const fs = require('fs');
let html = fs.readFileSync('src/app/services/ai-agent-development/page.tsx', 'utf8');

const quoteStr = 'lucide-quote';
const startIndex = html.lastIndexOf('<svg', html.indexOf(quoteStr));

// The slider block ends with `</figure></div>`. Let's find that!
// Wait, the video call buttons are right AFTER the `</figure></div>`.
// So let's find `</figure></div><div className="flex flex-wrap gap-3 mb-8">` ?
const afterFigure = '</figure></div><div className="flex flex-wrap gap-3 mb-8">';
let endIndex = html.indexOf(afterFigure, startIndex);

if (endIndex === -1) {
    // maybe it is `<div className="flex flex-wrap gap-3 mb-8">` ?
    const flexWrap = '<div className="flex flex-wrap gap-3 mb-8">';
    const flexWrapIndex = html.indexOf(flexWrap, startIndex);
    
    // We want to keep everything from `flexWrapIndex` and onwards.
    // So the block to replace is `html.substring(startIndex, flexWrapIndex)`!
    console.log(html.substring(startIndex, flexWrapIndex).substr(-200));
} else {
    console.log('Found afterFigure');
}
