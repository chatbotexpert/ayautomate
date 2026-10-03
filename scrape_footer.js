const fs = require('fs');
const cheerio = require('cheerio');

async function scrapeFooter() {
    console.log('Fetching live site...');
    const response = await fetch('https://www.ayautomate.com/services/ai-agent-development');
    const html = await response.text();
    
    console.log('Parsing with cheerio...');
    const $ = cheerio.load(html, { xmlMode: false, decodeEntities: false });
    
    // Find the footer
    const footer = $('footer');
    if (!footer.length) {
        console.log('No footer found!');
        return;
    }
    
    // Get HTML
    let footerHtml = $.html(footer);
    
    // Convert to JSX-friendly format
    footerHtml = footerHtml.replace(/class="/g, 'className="');
    footerHtml = footerHtml.replace(/for="/g, 'htmlFor="');
    footerHtml = footerHtml.replace(/tabindex="/g, 'tabIndex="');
    footerHtml = footerHtml.replace(/<!--[\s\S]*?-->/g, ''); // Remove HTML comments
    
    // Convert style attributes
    footerHtml = footerHtml.replace(/style="([^"]*)"/g, (match, styleString) => {
        const rules = styleString.split(';').filter(r => r.trim());
        const styleObj = {};
        for (const rule of rules) {
            let [key, value] = rule.split(':');
            if (key && value) {
                key = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
                styleObj[key] = value.trim();
            }
        }
        return `style={${JSON.stringify(styleObj)}}`;
    });
    
    // Wrap in component
    const componentCode = `import React from 'react';\n\nconst FooterSection = () => {\n  return (\n    ${footerHtml}\n  );\n};\n\nexport default FooterSection;\n`;
    
    fs.writeFileSync('src/components/FooterSection.tsx', componentCode);
    console.log('Successfully replaced FooterSection.tsx with scraped footer!');
}

scrapeFooter();
