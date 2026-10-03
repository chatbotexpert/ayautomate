const https = require('https');

https.get('https://www.ayautomate.com/', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    function findContext(str, query) {
      const idx = str.indexOf(query);
      if (idx === -1) return "Not found: " + query;
      return str.substring(Math.max(0, idx - 1000), Math.min(str.length, idx + 1000));
    }

    console.log("=== Hero H1 ===");
    console.log(findContext(data, "<h1"));
    
    console.log("\n=== CSS Variables in head ===");
    console.log(findContext(data, "--text-soft"));
    
    // Also let's extract the style tags from the head if they contain :root
    const rootMatches = data.match(/:root\s*{[^}]+}/g);
    console.log("\n=== Root styles ===");
    if (rootMatches) console.log(rootMatches.join("\n"));
  });
}).on('error', (e) => {
  console.error(e);
});
