const fs = require('fs');
let html = fs.readFileSync('src/app/services/ai-agent-development/page.tsx', 'utf8');

// Apply `dark:invert dark:brightness-0` to `/images/press/` logos (YCombinator, a16z, HackerOne, etc)
html = html.replace(/<img([^>]*)src="([^"]+)"([^>]*)>/g, (match, before, src, after) => {
    if (src.includes('/images/press/')) {
        let fullTag = match;
        // Inject classes if not there
        if (!fullTag.includes('dark:invert')) {
            fullTag = fullTag.replace(/className="/, 'className="dark:invert dark:brightness-0 ');
        }
        return fullTag;
    }
    return match;
});

fs.writeFileSync('src/app/services/ai-agent-development/page.tsx', html);
console.log('Fixed press logos');
