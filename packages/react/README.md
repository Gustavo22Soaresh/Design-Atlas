# @design-atlas/react

React components for Design Atlas.

## Installation

```bash
pnpm add @design-atlas/react
```

## Usage

```tsx
import { Button } from '@design-atlas/react';

function App() {
  return (
    <div>
      <Button variant="primary" size="medium" onClick={() => console.log('clicked')}>
        Click me
      </Button>
      
      <Button variant="secondary" size="small">
        Secondary Button
      </Button>
      
      <Button variant="outline" size="large" disabled>
        Disabled Button
      </Button>
    </div>
  );
}
```

## Components

### Button

A versatile button component with multiple variants and sizes.

#### Props

- `children`: React node to render inside the button
- `variant`: Button style variant (`'primary' | 'secondary' | 'outline'`)
- `size`: Button size (`'small' | 'medium' | 'large'`)
- `disabled`: Whether the button is disabled
- `onClick`: Click event handler
- `type`: Button type (`'button' | 'submit' | 'reset'`)
- `className`: Additional CSS classes

#### Variants

- **Primary**: Blue background with white text
- **Secondary**: Gray background with white text  
- **Outline**: Transparent background with border

#### Sizes

- **Small**: Compact padding and small text
- **Medium**: Standard padding and text size
- **Large**: Generous padding and large text

## Development

This package uses TypeScript and is built as an ES module. Components are styled with utility classes that can be customized with Tailwind CSS or similar frameworks.
