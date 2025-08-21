# @design-atlas/tokens

Design tokens for the Design Atlas design system.

## Installation

```bash
npm install @design-atlas/tokens
```

## Usage

### JSON Tokens

```javascript
import tokens from '@design-atlas/tokens';

console.log(tokens.colors.primary);
console.log(tokens.spacing.small);
```

### CSS Custom Properties

```css
@import '@design-atlas/tokens/css';

.my-component {
  color: var(--colors-primary);
  padding: var(--spacing-small);
}
```

## Available Token Categories

- **Colors**: Primary, secondary, and neutral color palettes
- **Typography**: Fonts, sizes, and weights
- **Spacing**: Margins, paddings, and grids
- **Borders**: Border styles and radius values
- **Shadows**: Shadow effects and elevations
- **Breakpoints**: Responsive design breakpoints

## License

MIT
