# Release Process

## Overview

Releases are automated via GitHub Actions when code is merged to `main`.

## Creating a Release

### 1. Make Changes

```bash
# Work on your feature
git checkout -b feature/new-component
# Make changes...
git commit -m "feat: add new component"
```

### 2. Create Changeset (on develop)

```bash
git checkout develop
git merge feature/new-component
pnpm changeset
# Select packages that changed
# Choose version bump: patch/minor/major
# Write user-facing description
```

### 3. Commit and Push

```bash
git add .changeset/
git commit -m "chore: add changeset for new component"
git push
```

### 4. Merge to Main

```bash
# Create PR: develop -> main
```

## Automated Release Process

When merged to `main`, GitHub Actions will:

1. **Version packages** - `pnpm changeset version`
2. **Build packages** - `pnpm -r build`  
3. **Run tests** - `pnpm run smoke:all`
4. **Publish to npm** - `pnpm changeset publish`

## Version Types

- **patch** (0.1.0 → 0.1.1) - bug fixes, small improvements
- **minor** (0.1.0 → 0.2.0) - new features, components
- **major** (0.1.0 → 1.0.0) - breaking changes

## Manual Publishing (Emergency)

```bash
# Only if automated release fails
pnpm changeset version
pnpm -r build
pnpm changeset publish
```
