const fs = require('fs');
let html = fs.readFileSync('src/app/services/ai-agent-development/page.tsx', 'utf8');

// The issue was: `before + <TestimonialCarousel /> + after`. 
// `after` started at `<section id="ai-agent-booking"...` BUT since I missed the closing `</section>` of the replaced section, it caused a double `</section>`.
// Wait, `after` started at `<section`, but `nextSectionStart` was actually the beginning of `<section id="ai-agent-booking"`.
// So the `</section>` of the original section was inside `before`? NO, it was between `hearIndex` and `nextSectionStart`!
// If `nextSectionStart = html.indexOf('<section', hearIndex);`, it found the next opening `<section`.
// Which means everything between `hearIndex` and `nextSectionStart` was deleted!
// And that included the `</section>` of the current section!
// Wait... if the `</section>` was deleted, why did we get `</section></section>`?
// Oh! Because the next section might have its OWN `</section>`, and maybe the parsing broke.

// Let's just fix the syntax error directly. The error is `...nial 7"></button></div></section></section><section id="ai-agent-booking" className="bg...`
// Wait, if it says `</section></section><section id="ai-agent-booking"`, then the `after` actually DID include the `</section></section>`?
// Let's just look at that specific part of the code and replace it.

const brokenPart = '></button></div></section></section><section id="ai-agent-booking"';
if (html.includes(brokenPart)) {
    // Actually, we don't want the native testimonial carousel AT ALL! We want `<TestimonialCarousel />`.
    // The broken part contains the native carousel!
    // Why did `html.indexOf('<section', hearIndex)` skip the native carousel? 
    // Because the native carousel didn't contain any `<section` inside it!
    // Wait, if it didn't contain any `<section`, then `indexOf('<section')` found `<section id="ai-agent-booking"`.
    // And it deleted everything in between!
    // But then why does `after` still have `></button></div></section></section>`?
    // Because those tags were BEFORE the `<section id="ai-agent-booking"`!
    // Ah, `html.substring(nextSectionStart)` STARTS with `<section id="ai-agent-booking"`. It does NOT contain the tags before it!
    // So where did `></button></div></section></section>` come from?!
    // Oh, `TestimonialCarousel` component ITSELF does not have `</section>`.
}

// Let me just re-run all the scripts to regenerate from `ai-agent.html` properly!
