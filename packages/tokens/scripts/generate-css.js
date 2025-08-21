import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';

// Ensure dist directory exists
const distDir = './dist';
mkdirSync(distDir, { recursive: true });

// Copy tokens.json to dist
const tokensJson = readFileSync('./tokens.json', 'utf8');
writeFileSync('./dist/tokens.json', tokensJson);

// Generate CSS custom properties
const tokens = JSON.parse(tokensJson);
let css = ':root {\n';

function generateCSSVariables(obj, prefix = '') {
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}-${key}` : key;
    
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      // Check if it's a token with $value
      if (value.$value !== undefined) {
        const cssKey = fullKey.replace(/([A-Z])/g, '-$1').toLowerCase();
        css += `  --${cssKey}: ${value.$value};\n`;
      } else {
        generateCSSVariables(value, fullKey);
      }
    }
  }
}

generateCSSVariables(tokens);
css += '}\n';

writeFileSync('./dist/tokens.css', css);

console.log('✅ Tokens package built successfully!');
console.log('📁 Generated files in ./dist/');
