# ADR-03 - Adoption of the class-first approach in CSS

**Date:** 31-05-2025
**Status:** Accepted

## Context

In the development of the Foundation design system for OpenStreetMap, we are building a visual foundation that is accessible, internationalizable, and consistent across multiple interfaces. We have already defined the use of **Design Tokens** as the source of truth for colors, spacing, typography, and other visual values (ADR-01).

With the use of Svelte (ADR-02), we have full control over the markup and applied styles, which allows us to adopt a more declarative and explicit approach. The **class-first** strategy (or utility-first), inspired by frameworks like Tailwind CSS, proposes that styles be applied directly via utility classes instead of component-scoped CSS or global styles.

This approach aligns with the use of previously defined tokens and themes, making visual decisions visible in the markup and eliminating ambiguity between style layers.

## Considered actions

* **Maintain traditional per-component styles (CSS Modules or scoped styles):** maintains encapsulation but makes visual consistency, reuse, and token tracking more difficult.

* **CSS-in-JS (e.g., styled-components, emotion):** Powerful integration between logic and style, but adds unnecessary complexity in Svelte and makes it harder to extract themes or tokens.

* **Class-first approach with tokens (e.g., Tailwind-like, using utility classes mapped to tokens):** Brings the interface closer to the design system and facilitates maintenance and auditing.

## Decision

We will adopt a **class-first** approach in CSS, using tokens directly in CSS classes. This approach will be aligned with the tokens defined in Atlas, ensuring consistency, semantic clarity, and compositional flexibility.

Example:

```html
<h1 class="header-1 regular">Title</h1>  
<p class="body-md color-danger">Body text</p>
```

Tokens used in these examples:

* `header-1, body`: typographic styles

* `regular`: color `{gray-500}`

* `regular`: weight defined in typography `{regular (400)}`

* `color-danger`: color defined for destructive actions.

## **Consequences**

**Positive:**

  * Increases traceability of tokens in the code.

  * Facilitates dynamic theming and real-time style switching.

  * Avoids CSS scope conflicts and simplifies style architecture.

  * Brings the style layer closer to design decisions.

**Negative:**

  * The learning curve may be steeper for those coming from BEM or traditional CSS.

  * HTML markup may initially appear more verbose.

  * Requires strict standardization in class naming derived from tokens.

## Next steps

* Create documentation mapping tokens to utility classes.

* Define naming conventions for token-based classes (`color-primary`, `bgn-success`, etc.).

* Automate the generation of classes from the JSON tokens using tools like Style Dictionary or custom build scripts.