const fs = require('fs');
let html = fs.readFileSync('src/app/services/ai-agent-development/page.tsx', 'utf8');

// Replace all _next/image URLs with their decoded real URLs
html = html.replace(/src="\/_next\/image\?url=([^&"]+)(?:&amp;|&)[^"]*"/g, (match, encodedUrl) => {
    try {
        const decoded = decodeURIComponent(encodedUrl);
        return `src="${decoded}"`;
    } catch (e) {
        return match;
    }
});

fs.writeFileSync('src/app/services/ai-agent-development/page.tsx', html);
console.log('Fixed Next.js image URLs');
