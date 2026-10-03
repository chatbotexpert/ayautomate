const fs = require('fs');
let html = fs.readFileSync('capabilities.html', 'utf8');

// The original extraction missed the first 500 characters
const prefix = `<section id="services" class="bg-[#131319] border-t border-border-strong text-foreground relative py-24 sm:py-32 overflow-hidden transition-colors duration-500">
  <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-4 relative z-10">
    <div class="text-center mb-16">
      <div class="inline-flex items-center gap-2 px-3 py-1 border border-primary-purple/30 bg-primary-purple/10 mb-6">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full bg-primary-purple opacity-50 rounded-full"></span>
          <span class="relative inline-flex h-2 w-2 bg-primary-purple rounded-full"></span>
        </span>
        <span class="text-[11px] font-bold text-primary-purple uppercase tracking-widest">Capabilities</span>
      </div>
      <h2 class="text-3xl md:text-5xl font-bold mb-6 tracking-tight">`;

if (!html.startsWith('<section')) {
  html = prefix + html;
  fs.writeFileSync('capabilities.html', html);
  console.log('Fixed capabilities.html');
} else {
  console.log('capabilities.html is already fixed');
}
