const fs = require('fs');
let html = fs.readFileSync('src/app/services/ai-agent-development/page.tsx', 'utf8');

// Ensure import is there
if (!html.includes('import DeployAutomationSection')) {
    html = html.replace("import FooterSection from '@/components/FooterSection';", "import DeployAutomationSection from '@/components/DeployAutomationSection';\nimport FooterSection from '@/components/FooterSection';");
}

// Insert before FooterSection
if (!html.includes('<DeployAutomationSection />')) {
    html = html.replace('<FooterSection />', '<DeployAutomationSection />\n      <FooterSection />');
}

fs.writeFileSync('src/app/services/ai-agent-development/page.tsx', html);
console.log('Added DeployAutomationSection');
