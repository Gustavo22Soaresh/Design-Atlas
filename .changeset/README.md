# Changesets

This project uses [Changesets](https://github.com/changesets/changesets) to manage versioning and publishing.

## How it works

1. **On PRs**: Developers run `pnpm changeset` to add version bumps
2. **On merge to main**: CI automatically builds, runs smoke tests, bumps versions, and publishes to npm
3. **CI fails if smoke tests fail** - ensuring quality before release

## Workflow

### For Developers

1. **Make changes** to packages
2. **Add a changeset** before committing:
   ```bash
   pnpm changeset
   ```
3. **Select packages** that changed
4. **Choose version bump** (patch, minor, major)
5. **Write description** of changes
6. **Commit and push** the changeset file

### For Maintainers

1. **Review PRs** with changesets
2. **Merge to main** when ready
3. **CI automatically**:
   - Builds all packages
   - Runs smoke tests
   - Bumps versions
   - Publishes to npm
   - Creates git tags
   - Generates changelogs

## Commands

- `pnpm changeset` - Add a new changeset
- `pnpm version-packages` - Version packages locally (for testing)
- `pnpm release` - Build and publish packages
- `pnpm smoke:all` - Run all smoke tests

## Package Configuration

All packages are configured with:
- `"private": false` (publishable)
- `"prepack": "pnpm build"` (auto-build before pack)
- `"publishConfig": { "access": "public" }` (public npm packages)
- Proper exports and types fields

## CI/CD

The `.github/workflows/release.yml` workflow:
- Triggers on push to main
- Uses Node.js 22 and pnpm 10.14.0
- Installs dependencies with frozen lockfile
- Builds all packages
- Runs smoke tests
- Publishes with npm provenance enabled
- Requires `NPM_TOKEN` secret for authentication
