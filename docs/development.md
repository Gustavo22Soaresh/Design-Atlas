# Development Setup

## Prerequisites

- Node.js (see `.nvmrc` for version)
- pnpm

## Quick Start

```bash
# Clone and setup
git clone <repo-url>
cd design-atlas
nvm use
pnpm install

# Build all packages
pnpm -r build

# Run smoke tests
pnpm run smoke:all
```

## Development Workflow

```bash
# Work on packages
cd packages/react  # or svelte/tokens
# Make changes...

# Build and test
pnpm build
pnpm -r build  # build all packages

# Test changes
pnpm run smoke:all
```

## Package Structure

- `packages/react` - React components
- `packages/svelte` - Svelte components  
- `packages/tokens` - Design tokens
- `apps/docs` - Documentation site
- `apps/svelte-demo` - Svelte demo app

## Scripts

- `pnpm -r build` - build all packages
- `pnpm run smoke:all` - run smoke tests
- `pnpm changeset` - create changeset for release
