const fs = require('fs');
const path = require('path');
const https = require('https');

const srcDir = path.join(__dirname, 'src');
const publicDir = path.join(__dirname, 'public');

// Function to recursively find all .tsx files
function findFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findFiles(filePath, fileList);
    } else if (filePath.endsWith('.tsx')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

// Function to download a file
function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    // Ensure directory exists
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function processFiles() {
  const tsxFiles = findFiles(srcDir);
  const downloadPromises = [];
  const downloadedPaths = new Set();

  for (const filePath of tsxFiles) {
    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanges = false;

    // Regex to match both direct URLs and _next/image URLs
    // Example 1: https://www.ayautomate.com/_next/image?url=%2Fclients%2Fclaude.png&w=96&q=75
    // Example 2: https://www.ayautomate.com/many-agents-v2.webp
    const urlRegex = /https:\/\/www\.ayautomate\.com(?:(\/_next\/image\?url=([^&"']+))|([^"']+))/g;

    content = content.replace(urlRegex, (match, isNext, nextUrl, directPath) => {
      let rawPath = '';
      
      if (isNext && nextUrl) {
        rawPath = decodeURIComponent(nextUrl);
      } else if (directPath) {
        rawPath = directPath;
      }

      if (!rawPath) return match; // fallback
      
      // Ensure rawPath starts with /
      if (!rawPath.startsWith('/')) {
        rawPath = '/' + rawPath;
      }

      const fullUrl = `https://www.ayautomate.com${rawPath}`;
      const localPublicPath = path.join(publicDir, rawPath);

      if (!downloadedPaths.has(rawPath)) {
        downloadedPaths.add(rawPath);
        console.log(`Queueing download: ${fullUrl} -> public${rawPath}`);
        downloadPromises.push(
          downloadFile(fullUrl, localPublicPath)
            .then(() => console.log(`Downloaded: ${rawPath}`))
            .catch(e => console.error(`Error downloading ${rawPath}:`, e.message))
        );
      }

      hasChanges = true;
      return rawPath; // Replace with local path
    });

    if (hasChanges) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated URLs in: ${filePath}`);
    }
  }

  console.log(`Waiting for ${downloadPromises.length} downloads to finish...`);
  await Promise.allSettled(downloadPromises);
  console.log("All done!");
}

processFiles().catch(console.error);
