const fs = require('fs');

let tsx = fs.readFileSync('src/app/services/ai-agent-development/page.tsx', 'utf8');

// 1. Fix backgroundImage that got broken by &#x27; replacement 
tsx = tsx.replace(/&#x27;/g, "'");

// Actually, let's fix all background images to point to the live site
tsx = tsx.replace(/url\('\\?\/([^']+)'\)/g, "url('https://www.ayautomate.com/$1')");
tsx = tsx.replace(/url\("([^"]+)"\)/g, (match, url) => {
    if (url.startsWith('/')) {
        return `url("https://www.ayautomate.com${url}")`;
    }
    return match;
});
tsx = tsx.replace(/url\('([^']+)'\)/g, (match, url) => {
    if (url.startsWith('/')) {
        return `url('https://www.ayautomate.com${url}')`;
    }
    return match;
});

// 2. Fix _next/image URLs in img tags
// They look like src="/_next/image?url=%2Fimages%2F...&w=...&q=75"
tsx = tsx.replace(/src="\/_next\/image\?url=([^&]+)&amp;[^"]*"/g, (match, encodedUrl) => {
  try {
    const decodedUrl = decodeURIComponent(encodedUrl);
    return `src="https://www.ayautomate.com${decodedUrl}"`;
  } catch (e) {
    return match;
  }
});
tsx = tsx.replace(/src="\/_next\/image\?url=([^&]+)&[^"]*"/g, (match, encodedUrl) => {
  try {
    const decodedUrl = decodeURIComponent(encodedUrl);
    return `src="https://www.ayautomate.com${decodedUrl}"`;
  } catch (e) {
    return match;
  }
});

// 3. Fix any `<img src="/images/...`
tsx = tsx.replace(/src="\/(images|assets|videos)\//g, 'src="https://www.ayautomate.com/$1/');
tsx = tsx.replace(/src="\/(favicon|apple-touch-icon)/g, 'src="https://www.ayautomate.com/$1');
tsx = tsx.replace(/poster="\/(images|assets|videos)\//g, 'poster="https://www.ayautomate.com/$1/');


// 4. Ensure opacity: 0 and translate are removed from motion/animation divs
tsx = tsx.replace(/"opacity"\s*:\s*0/g, '"opacity":1');
tsx = tsx.replace(/"opacity"\s*:\s*"0"/g, '"opacity":"1"');
tsx = tsx.replace(/"transform"\s*:\s*"translateY\([^)]+\)"/g, '"transform":"translateY(0)"');

// 5. Remove any data-nimg attributes that break the images when loaded directly
tsx = tsx.replace(/data-nimg="[^"]*"/g, '');
// For some reason, next images might have sizes or srcset which break it if they point to localhost
tsx = tsx.replace(/srcSet="[^"]*"/g, '');

// Save changes
fs.writeFileSync('src/app/services/ai-agent-development/page.tsx', tsx);
console.log('Fixed page.tsx URLs and styles');
