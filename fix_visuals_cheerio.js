const fs = require('fs');
const cheerio = require('cheerio');

// We have page.tsx which contains some wrapper JSX (import Navbar, etc.) and then the HTML.
// Let's use cheerio to parse JUST the HTML part, manipulate it, and put it back.

let tsx = fs.readFileSync('src/app/services/ai-agent-development/page.tsx', 'utf8');

// The HTML starts right after `<div className="pt-20 bg-background">`
const splitStr = '<div className="pt-20 bg-background">';
const parts = tsx.split(splitStr);

if (parts.length > 1) {
    let before = parts[0] + splitStr;
    // The HTML ends right before `</div>\n      <FooterSection />`
    let htmlPart = parts[1];
    
    // We need to parse this as XML/HTML in Cheerio.
    // However, it has JSX syntax like `tabIndex={-1}`, `className="..."`, etc.
    // Cheerio can parse it as XML so it preserves JSX!
    const $ = cheerio.load(htmlPart, { xmlMode: true, decodeEntities: false });
    
    // 1. Fix the Client Logos (AGENTS SHIPPED FOR TEAMS AT)
    // Find all images in the clients directory
    $('img[src*="/clients/"]').each((i, el) => {
        let cls = $(el).attr('className') || '';
        if (!cls.includes('dark:invert')) {
            $(el).attr('className', cls + ' dark:invert dark:brightness-0');
        }
    });

    // We don't touch the avatar images because they are in `/images/clients/faces/`
    // Actually wait, `/clients/faces` also matches `/clients/`!
    // So let's REMOVE `dark:invert` from faces!
    $('img[src*="/faces/"]').each((i, el) => {
        let cls = $(el).attr('className') || '';
        cls = cls.replace(/dark:invert/g, '').replace(/dark:brightness-0/g, '').trim();
        $(el).attr('className', cls);
    });

    // 2. Replace the native Video Testimonials section with our Component.
    // The section contains "Hear it from the operators"
    let targetSection = null;
    $('section').each((i, el) => {
        if ($(el).html().includes('Hear it from the')) {
            targetSection = $(el);
        }
    });

    if (targetSection) {
        // Replace this entire section with `<TestimonialCarousel />`
        targetSection.replaceWith('\n        <TestimonialCarousel />\n');
    }

    let finalHtml = $.html();
    
    // Cheerio xmlMode might self-close some tags that React doesn't like, or mess up JSX curly braces.
    // Actually, Cheerio xmlMode preserves `{}` in attributes if they are like `tabIndex={-1}` ?
    // Let's check!
    
    // Wait, let's just use string replace if we are worried about Cheerio breaking JSX.
}
