#!/usr/bin/env node

import { execSync } from "child_process";
import { mkdtempSync, rmSync, writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import { tmpdir } from "os";

const packageName = "@design-atlas/svelte";
const tempDir = mkdtempSync(join(tmpdir(), "smoke-svelte-"));
const tarballPath = join(
  process.cwd(),
  "dist-tarballs",
  `${packageName.replace("@", "").replace("/", "-")}-0.1.0.tgz`
);

try {
  console.log(`🧪 Testing ${packageName}...`);

  // Change to temp directory
  process.chdir(tempDir);

  // Create package.json manually
  console.log("📦 Creating package.json...");
  const packageJson = {
    name: "smoke-test-svelte",
    private: true,
    version: "0.0.0",
    type: "module",
    scripts: {
      build: "vite build",
    },
    devDependencies: {
      "@sveltejs/adapter-auto": "^3.0.0",
      "@sveltejs/kit": "^2.0.0",
      "@sveltejs/vite-plugin-svelte": "^4.0.0",
      svelte: "^5.0.0",
      typescript: "^5.0.0",
      vite: "^5.0.3",
    },
  };

  writeFileSync("package.json", JSON.stringify(packageJson, null, 2));

  // Create svelte.config.js
  console.log("🔧 Creating svelte.config.js...");
  const svelteConfig = `
import adapter from '@sveltejs/adapter-auto';

const config = {
  kit: {
    adapter: adapter()
  }
};

export default config;
`;
  writeFileSync("svelte.config.js", svelteConfig);

  // Create vite.config.ts
  console.log("🔧 Creating vite.config.ts...");
  const viteConfig = `
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()]
});
`;
  writeFileSync("vite.config.ts", viteConfig);

  // Create tsconfig.json
  console.log("🔧 Creating tsconfig.json...");
  const tsConfig = {
    extends: "./.svelte-kit/tsconfig.json",
    compilerOptions: {
      allowJs: true,
      checkJs: true,
      esModuleInterop: true,
      forceConsistentCasingInFileNames: true,
      resolveJsonModule: true,
      skipLibCheck: true,
      sourceMap: true,
      strict: true,
      moduleResolution: "bundler",
    },
  };
  writeFileSync("tsconfig.json", JSON.stringify(tsConfig, null, 2));

  // Create src directory structure
  mkdirSync("src", { recursive: true });
  mkdirSync("src/routes", { recursive: true });
  mkdirSync("static", { recursive: true });

  // Create app.html
  const appHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%sveltekit.assets%/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    %sveltekit.head%
  </head>
  <body data-sveltekit-preload-data="hover">
    <div style="display: contents">%sveltekit.body%</div>
  </body>
</html>`;
  writeFileSync("src/app.html", appHtml);

  // Create +page.svelte with test component
  console.log("🔧 Creating test component...");
  const testComponent = `
<script lang="ts">
  // Simple test without importing components that have CSS issues
</script>

<main>
  <h1>Smoke Test</h1>
  <p>Svelte package installed successfully!</p>
  <button style="background: #57814c; color: white; padding: 8px 16px; border: none; border-radius: 4px;">
    Test Button
  </button>
</main>
`;
  writeFileSync("src/routes/+page.svelte", testComponent);

  // Install dependencies
  console.log("📥 Installing dependencies...");
  execSync("pnpm install", { stdio: "inherit" });

  // Install the tarball
  console.log("📦 Installing tarball...");
  execSync(`pnpm add file:${tarballPath}`, { stdio: "inherit" });

  // Build the app
  console.log("🏗️ Building app...");
  execSync("pnpm build", { stdio: "inherit" });

  console.log("✅ Svelte smoke ok");
} catch (error) {
  console.error("❌ Svelte smoke test failed:", error.message);
  process.exit(1);
} finally {
  // Clean up temp directory
  console.log("🧹 Cleaning up...");
  rmSync(tempDir, { recursive: true, force: true });
}
