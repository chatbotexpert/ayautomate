const fs = require('fs');

let html = fs.readFileSync('src/app/services/ai-agent-development/page.tsx', 'utf8');

// Fix TypeScript attribute issues:
// 1. tabindex="0" -> tabIndex={0}
html = html.replace(/tab[I|i]ndex="(-?\d+)"/g, 'tabIndex={$1}');

// 2. disabled="disabled" or disabled="true" or just disabled -> disabled={true}
// Wait, regex might be tricky if it's already disabled. Let's just strip ="disabled" and ="true" for boolean attributes if they break.
// Actually, in React, disabled="" or disabled="disabled" throws error. We need disabled or disabled={true}.
html = html.replace(/disabled="[^"]*"/g, 'disabled');
html = html.replace(/hidden="[^"]*"/g, 'hidden');
html = html.replace(/required="[^"]*"/g, 'required');
html = html.replace(/checked="[^"]*"/g, 'defaultChecked');

// Let's also check if there are other number attributes:
// width="24" -> width={24}, height="24" -> height={24}
html = html.replace(/\bwidth="(\d+)"/g, 'width={$1}');
html = html.replace(/\bheight="(\d+)"/g, 'height={$1}');

// SVG attributes like strokeWidth="2" -> strokeWidth={2}
html = html.replace(/strokeWidth="(\d+)"/g, 'strokeWidth={$1}');
html = html.replace(/strokeMiterlimit="(\d+)"/g, 'strokeMiterlimit={$1}');

// React boolean aria attributes usually accept strings in TS, but maybe one of them is strictly typed? No, aria-hidden="true" is perfectly valid TSX.
// What about `readonly`?
html = html.replace(/readonly="[^"]*"/gi, 'readOnly');

fs.writeFileSync('src/app/services/ai-agent-development/page.tsx', html);
console.log('Fixed TSX types');
