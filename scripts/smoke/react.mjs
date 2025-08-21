#!/usr/bin/env node

import { execSync } from "child_process";
import { mkdtempSync, rmSync, writeFileSync, mkdirSync, readFileSync } from "fs";
import { join } from "path";
import { tmpdir } from "os";

const packageName = "@design-atlas/react";
const tempDir = mkdtempSync(join(tmpdir(), "smoke-react-"));

// Read actual package version from package.json
const packageJsonPath = join(process.cwd(), "packages/react/package.json");
const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf8"));
const packageVersion = packageJson.version;

const tarballPath = join(
  process.cwd(),
  "dist-tarballs",
  `${packageName.replace("@", "").replace("/", "-")}-${packageVersion}.tgz`
);

try {
  console.log(`🧪 Testing ${packageName}...`);

  // Change to temp directory
  process.chdir(tempDir);

  // Create package.json manually
  console.log("📦 Creating package.json...");
  const packageJson = {
    name: "smoke-test-react",
    private: true,
    version: "0.0.0",
    type: "module",
    scripts: {
      build: "tsc && vite build",
    },
    dependencies: {
      react: "^18.2.0",
      "react-dom": "^18.2.0",
    },
    devDependencies: {
      "@types/react": "^18.2.43",
      "@types/react-dom": "^18.2.17",
      typescript: "^5.2.2",
      vite: "^5.0.8",
      "@vitejs/plugin-react": "^4.2.1",
    },
  };

  writeFileSync("package.json", JSON.stringify(packageJson, null, 2));

  // Create vite.config.ts
  console.log("🔧 Creating vite.config.ts...");
  const viteConfig = `
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
`;
  writeFileSync("vite.config.ts", viteConfig);

  // Create tsconfig.json
  console.log("🔧 Creating tsconfig.json...");
  const tsConfig = {
    compilerOptions: {
      target: "ES2020",
      useDefineForClassFields: true,
      lib: ["ES2020", "DOM", "DOM.Iterable"],
      module: "ESNext",
      skipLibCheck: true,
      moduleResolution: "bundler",
      allowImportingTsExtensions: true,
      resolveJsonModule: true,
      isolatedModules: true,
      noEmit: true,
      jsx: "react-jsx",
      strict: true,
      noUnusedLocals: true,
      noUnusedParameters: true,
      noFallthroughCasesInSwitch: true,
    },
    include: ["src"],
    references: [{ path: "./tsconfig.node.json" }],
  };
  writeFileSync("tsconfig.json", JSON.stringify(tsConfig, null, 2));

  // Create tsconfig.node.json
  const tsConfigNode = {
    compilerOptions: {
      composite: true,
      skipLibCheck: true,
      module: "ESNext",
      moduleResolution: "bundler",
      allowSyntheticDefaultImports: true,
    },
    include: ["vite.config.ts"],
  };
  writeFileSync("tsconfig.node.json", JSON.stringify(tsConfigNode, null, 2));

  // Create src directory and files
  mkdirSync("src", { recursive: true });

  // Create index.html
  const indexHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Smoke Test</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`;
  writeFileSync("index.html", indexHtml);

  // Create main.tsx
  const mainTsx = `
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)`;
  writeFileSync("src/main.tsx", mainTsx);

  // Create App.tsx with Button component
  console.log("🔧 Creating test component...");
  const appTsx = `
import { Button } from '@design-atlas/react';

function App() {
  return (
    <div>
      <h1>Smoke Test</h1>
      <Button>Test Button</Button>
    </div>
  );
}

export default App;
`;
  writeFileSync("src/App.tsx", appTsx);

  // Install dependencies
  console.log("📥 Installing dependencies...");
  execSync("pnpm install", { stdio: "inherit" });

  // Install the tarball
  console.log("📦 Installing tarball...");
  execSync(`pnpm add file:${tarballPath}`, { stdio: "inherit" });

  // Build the app
  console.log("🏗️ Building app...");
  execSync("pnpm build", { stdio: "inherit" });

  console.log("✅ React smoke ok");
} catch (error) {
  console.error("❌ React smoke test failed:", error.message);
  process.exit(1);
} finally {
  // Clean up temp directory
  console.log("🧹 Cleaning up...");
  rmSync(tempDir, { recursive: true, force: true });
}
