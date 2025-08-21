# npm Trusted Publishing Setup

This repository uses npm Trusted Publishing (OIDC) instead of stored tokens for secure package publishing.

## Setup Instructions

### 1. In npm Package Settings

For each package (`@design-atlas/tokens`, `@design-atlas/react`, `@design-atlas/svelte`):

1. Go to [npmjs.com](https://npmjs.com) and log in
2. Navigate to your package (e.g., `@design-atlas/tokens`)
3. Go to **Package Settings** → **Publishers**
4. Click **Add trusted publisher**
5. Select **GitHub Actions**
6. Configure:
   - **Repository**: `OSMBrasil/design-atlas`
   - **Environment**: `production` (or leave blank for any environment)
   - **Workflow name**: `Release`
   - **Branch**: `main`
7. Click **Add trusted publisher**

### 2. How It Works

- **No tokens stored**: The workflow uses GitHub's OIDC tokens
- **Automatic authentication**: npm trusts the GitHub Actions workflow
- **Provenance enabled**: `NPM_CONFIG_PROVENANCE=true` ensures package integrity
- **Main branch only**: Packages are only published from the main branch

### 3. Security Benefits

- ✅ No long-lived npm tokens in repository secrets
- ✅ Automatic token rotation via GitHub OIDC
- ✅ Fine-grained control over which workflows can publish
- ✅ Audit trail of all publishing actions

### 4. Workflow Requirements

The workflow requires these permissions:
- `contents: write` - To create git tags and update changelogs
- `id-token: write` - To generate OIDC tokens for npm authentication

## Troubleshooting

If publishing fails:
1. Verify the trusted publisher is configured correctly in npm
2. Check that the workflow is running on the main branch
3. Ensure the package names match exactly in npm and package.json
4. Verify the repository URL in package.json matches your GitHub repo
