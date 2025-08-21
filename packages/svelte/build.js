import { readdirSync, copyFileSync, writeFileSync, mkdirSync } from "fs";
import { join } from "path";

// Ensure dist directory exists
const distDir = "./dist";
mkdirSync(distDir, { recursive: true });

// Copy all .svelte files to dist
const svelteFiles = readdirSync("./src/lib").filter((file) =>
  file.endsWith(".svelte")
);
svelteFiles.forEach((file) => {
  copyFileSync(join("./src/lib", file), join(distDir, file));
});

// Generate index.js that exports all components
let indexContent = "";
svelteFiles.forEach((file) => {
  // File names are already PascalCase, so component name is just the filename without extension
  const componentName = file.replace(".svelte", "");
  indexContent += `export { default as ${componentName} } from './${file}';\n`;
});

writeFileSync("./dist/index.js", indexContent);

// Generate basic index.d.ts
let typesContent = "";
svelteFiles.forEach((file) => {
  // File names are already PascalCase, so component name is just the filename without extension
  const componentName = file.replace(".svelte", "");
  typesContent += `declare const ${componentName}: any;\nexport { ${componentName} };\n`;
});

writeFileSync("./dist/index.d.ts", typesContent);

console.log("✅ Svelte package built successfully!");
console.log("📁 Generated files in ./dist/");
console.log(`📦 Built ${svelteFiles.length} Svelte components`);
