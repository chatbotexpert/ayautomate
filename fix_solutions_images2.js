const fs = require('fs');

const filePath = 'src/components/OurSolutionsSection.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const images = [
  'https://www.ayautomate.com/images/generated/browserbase-consulting.webp',
  'https://www.ayautomate.com/images/generated/ai-implementation-browserbase.webp',
  'https://www.ayautomate.com/images/generated/ai-training-placement-browserbase.webp'
];

let index = 0;
// Replace the broken style objects with proper JSX template literals
content = content.replace(/style=\{\{ backgroundImage: "linear-gradient\(to bottom, rgba\(248, 245, 246, 0\.06\), transparent 52%, rgba\(248, 245, 246, 0\.14\)\), url\('" \+ url \+ "'\)", backgroundPosition: "center, center center", backgroundRepeat: "no-repeat, no-repeat", backgroundSize: "100% 100%, cover", imageRendering: "pixelated" \}\}/g, (match) => {
  const imgUrl = images[index % images.length];
  index++;
  return `style={{ backgroundImage: "linear-gradient(to bottom, rgba(248, 245, 246, 0.06), transparent 52%, rgba(248, 245, 246, 0.14)), url('${imgUrl}')", backgroundPosition: "center, center center", backgroundRepeat: "no-repeat, no-repeat", backgroundSize: "100% 100%, cover", imageRendering: "pixelated" as const }}`;
});

fs.writeFileSync(filePath, content);
console.log('Fixed', index, 'background image style objects');
