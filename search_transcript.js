const fs = require('fs');
const readline = require('readline');

async function search() {
  const fileStream = fs.createReadStream('C:/Users/Hassaan/.gemini/antigravity-ide/brain/dd3a1c0e-5132-4ca2-b738-51a11fb74256/.system_generated/logs/transcript_full.jsonl');
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let capContent = null;
  let solContent = null;
  for await (const line of rl) {
    if (line.includes('"type":"TOOL_RESPONSE"')) {
      const data = JSON.parse(line);
      const out = data.content || '';
      if (out.includes('export default function CapabilitiesSection()')) {
         if (!out.includes('The above content does NOT show')) capContent = out;
      }
      if (out.includes('export default function OurSolutionsSection()')) {
         if (!out.includes('The above content does NOT show')) solContent = out;
      }
    }
  }

  if (capContent) {
    fs.writeFileSync('cap_recovered.txt', capContent);
    console.log('Found Cap!');
  }
  if (solContent) {
    fs.writeFileSync('sol_recovered.txt', solContent);
    console.log('Found Sol!');
  }
}

search();
