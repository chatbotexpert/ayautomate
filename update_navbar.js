const fs = require('fs');
const navbar = fs.readFileSync('src/components/Navbar.tsx', 'utf8');
const replacement = fs.readFileSync('mega_menu_replacement.txt', 'utf8');

const startStr = '<div className="w-[800px] flex border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1a1a24] shadow-xl overflow-hidden">';
const startIdx = navbar.indexOf(startStr);
if (startIdx === -1) {
  console.log('Could not find start string');
  process.exit(1);
}

// The end of the mega menu is the </div> corresponding to startStr.
// It is right before {/* Resources Mega Menu */}
const resourcesIdx = navbar.indexOf('{/* Resources Mega Menu */}');
const endIdx = navbar.lastIndexOf('</div>\n              </div>\n            </div>', resourcesIdx);

if (endIdx === -1) {
  console.log('Could not find end index');
  process.exit(1);
}

// wait, the replacement has `</div>` at the end, so I just replace from startIdx to endIdx where the closing tag of w-[800px] is.
// Actually, let's look at what's before resourcesIdx.
const partBefore = navbar.substring(0, startIdx);
const partAfter = navbar.substring(navbar.indexOf('</div>\n              </div>\n            </div>', startIdx));
// Wait, the partAfter string I want is the `</div>` that closes `w-[800px]`.
// Looking at the view_file:
// 112: 
// 113:                 </div>
// 114:               </div>
// 115:             </div>
// 116: 
// 117:             {/* Resources Mega Menu */}
const newNavbar = partBefore + replacement + '\n              </div>\n            </div>\n\n            {/* Resources Mega Menu */}' + navbar.substring(navbar.indexOf('{/* Resources Mega Menu */}') + 27);

fs.writeFileSync('src/components/Navbar.tsx', newNavbar);
console.log('Successfully updated Navbar.tsx');
