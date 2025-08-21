# Design Atlas Roadmap

## Version 0.1.0 - Initial Release

This milestone focuses on establishing the basic foundation for npm publishing with minimal viable packages for React and Svelte.

### 🎯 Goals

- Release minimal component library packages for React and Svelte
- Publish packages to npm registry
- Test the publishing and installation workflow
- Establish basic package structure

### 📦 Package Development

#### Core Tokens Package (`@design-atlas/tokens`)

- [x] Review and finalize design tokens structure
- [x] Ensure tokens are properly exported for consumption
- [x] Generate CSS custom properties from tokens

#### React Package (`@design-atlas/react`)

- [x] Finalize Button component implementation (✓ Basic implementation exists)
- [x] Ensure proper TypeScript types and exports
- [x] Configure build process for TypeScript compilation
- [x] Test component exports and imports

#### Svelte Package (`@design-atlas/svelte`)

- [x] Review existing Svelte components (11 components exist)
- [x] Ensure proper component exports
- [x] Add TypeScript definitions
- [x] Test component exports and imports

### 🔧 Build & Development Infrastructure

#### Build System

- [x] Set up build process for React package (TypeScript compilation)
- [x] Set up build process for Svelte package
- [x] Configure proper package exports for both packages
- [x] Add build scripts to root package.json

### 🚀 Publishing & Distribution

#### NPM Publishing

- [ ] Configure npm publishing workflow
- [ ] Configure package.json files for publishing
- [x] Set up proper versioning strategy
- [ ] Test package installation and usage

#### Release Process

- [ ] Create release checklist
- [x] Configure semantic versioning
- [ ] Test packages in external projects
- [ ] Prepare release announcement

### 🔍 Pre-Release Validation

#### Package Testing

- [x] Validate package installation process
- [x] Test React Button component in sample application
- [x] Test Svelte components in sample application
- [x] Verify TypeScript integration works correctly

---

## Success Criteria

Version 0.1.0 will be considered complete when:

1. ✅ Both `@design-atlas/react` and `@design-atlas/svelte` packages are published to npm
2. ✅ React package contains working Button component
3. ✅ Svelte package contains existing components and exports properly
4. ✅ Packages can be successfully installed and used in external projects
5. ✅ Design tokens package is available and usable
6. ✅ Basic build and publishing workflow is established

---

## Next Steps for NPM Publishing

### Immediate Actions Required

1. **NPM Authentication & Publishing Setup**
   - [ ] Login to npm registry
   - [ ] Verify package names are available
   - [ ] Test npm publish with --dry-run flag

2. **Package Validation**
   - [ ] Verify all dist/ folders contain correct files
   - [ ] Test package installation locally
   - [ ] Validate package.json exports and main fields

3. **Publishing Order**
   - [ ] Publish `@design-atlas/tokens` first (dependency)
   - [ ] Publish `@design-atlas/react`
   - [ ] Publish `@design-atlas/svelte`

4. **Post-Publish Verification**
   - [ ] Verify packages appear on npmjs.com
   - [ ] Test installation in fresh project
   - [ ] Update documentation with npm installation instructions

---

*This roadmap is a living document and will be updated as development progresses.*
