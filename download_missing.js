const fs = require('fs');
const path = require('path');
const https = require('https');

const missingImages = [
  "images/clients/ronin-global.webp",
  "images/clients/fleetforward-logo.webp",
  "images/clients/untaylored.webp",
  "images/clients/neoday.webp",
  "images/clients/hello-customer.webp",
  "images/clients/thinkone.webp",
  "images/clients/shems-pub.webp",
  "images/clients/wearview.webp",
  "images/clients/emprende-logo.webp",
  "images/clients/kateb.webp",
  "images/clients/humanoidz.webp",
  "images/clients/earl-logo.avif"
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
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
      file.on('finish', () => file.close(resolve));
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function main() {
  const publicDir = path.join(__dirname, 'public');
  const promises = missingImages.map(async (img) => {
    const dest = path.join(publicDir, img);
    const url = `https://www.ayautomate.com/${img}`;
    try {
      await downloadFile(url, dest);
      console.log(`Downloaded: ${img}`);
    } catch (e) {
      console.error(`Error downloading ${img}:`, e.message);
    }
  });
  
  // also check if dga and maroc gov are missing
  const extraImages = [
    "images/clients/DGA-Logo.svg",
    "images/clients/maroc-gov.svg"
  ];
  for (const img of extraImages) {
    const dest = path.join(publicDir, img);
    const url = `https://www.ayautomate.com/${img}`;
    promises.push(downloadFile(url, dest).then(()=>console.log("Downloaded", img)).catch(e=>console.error(e.message)));
  }

  await Promise.allSettled(promises);
  console.log("All missing images downloaded!");
}

main();
