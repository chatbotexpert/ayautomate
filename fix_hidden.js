const fs = require('fs');

let html = fs.readFileSync('src/app/services/ai-agent-development/page.tsx', 'utf8');

// The string to look for:
const targetDiv = '<div className="w-full bg-background overflow-x-hidden relative transition-colors duration-500 text-foreground">';
const targetIndex = html.indexOf(targetDiv);

if (targetIndex !== -1) {
    // We want to cut out everything between `<div className="pt-20 bg-background">` and `targetDiv`
    const pt20Index = html.indexOf('<div className="pt-20 bg-background">');
    if (pt20Index !== -1) {
        // The prefix ends right after `<div className="pt-20 bg-background">`
        const prefixEnd = pt20Index + '<div className="pt-20 bg-background">'.length;
        
        // Let's also remove the trailing `</div></div>` which closed the `<div hidden id="S:0">`
        // We know at the bottom it looks like `...</footer></div></div>\n      </div>\n      <FooterSection />`
        let endHtml = html.substring(targetIndex);
        
        // Remove the extra `</div>` that closed the hidden div.
        endHtml = endHtml.replace(/<\/div><\/div>\s*<\/div>\s*<FooterSection \/>/g, '</div>\n      </div>\n      <FooterSection />');

        const newHtml = html.substring(0, prefixEnd) + '\n        ' + endHtml;
        fs.writeFileSync('src/app/services/ai-agent-development/page.tsx', newHtml);
        console.log('Fixed hidden div issue');
    }
}
