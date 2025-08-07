# Typography

The user experience of [OpenStreetMap](osm.org) is based on reading, interpreting, and navigating geographic information. Typography is therefore a core pillar of our design system. Our typographic choices ensure legibility, accessibility, and alignment with OSM’s principles of neutrality and openness.

## Legibility

All textual content on [OSM](osm.org) must be readable by anyone, regardless of physical ability, usage environment, or language. Factors such as contrast, spacing, and font type must be carefully considered to ensure clear reading.

### Contrast

The contrast between text and background must meet at least a 4.5:1 ratio (WCAG AA level) to ensure legibility, especially on mobile devices or under direct sunlight.
Use the color tokens provided by the Atlas to ensure contrast aligns with our standards.

**Avoid:**

Text with contrast below the recommended level, especially at small sizes, which hinders readability.

### Text Spacing (Tracking and Leading)

* **Line length:** ideally no more than **75 characters** to improve reading flow.

* **Line height:** use relative units like `1.6rem` to prevent clipping in non-Latin scripts (e.g., Burmese, Tamil, Arabic).

* **Tracking:** maintain regular letter spacing to preserve word shapes in languages with dense composition.

## Dynamic Text

[OSM](osm.org) is global and multilingual. Interfaces must accommodate variations in text length across languages and zoom levels. Avoid components that rely on fixed-length texts or hard truncation.

Recommendations:

* **Spacious interfaces:** keep the layout clean with few competing elements.

* **Responsive layouts:** use containers that adapt to content.

* **Adaptive sizing:** reduce font size for longer text when necessary.

* **Truncated text:** use ellipses only when the full information is accessible through a clear alternative.

## Typefaces in OpenStreetMap

Fonts should prioritize accessibility, language coverage, and visual consistency across operating systems. We recommend:

### Font Selection Criteria

* **Clarity:** prioritize fonts with large x-heights and open shapes.

* **Neutrality:** avoid fonts with strong aesthetic voices.

* **Simplicity:** simpler letterforms work better on low-resolution devices.

* **Open source:** free fonts reflect OSM’s open philosophy.

### Base Typeface Stack

We use the `Inter` typeface by default, combined with the system font stack to ensure global coverage:

```css
font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Lato, Helvetica, Arial, sans-serif;
```

This combination balances visual consistency with international compatibility, respecting each platform’s conventions.

### Alternative Fonts

When designing or prototyping in a platform-neutral context, we recommend:

* **Inter** (a sans-serif typeface optimized for digital interfaces)

* **Noto Fonts** (a comprehensive font family by Google, supporting a wide range of languages and scripts)

These fonts meet our criteria for readability, neutrality, and open-source licensing.

## Text Styles and Hierarchy

In the **Atlas**, we follow a **class-first** approach for organizing typographic styles. This means that in CSS, properties such as **font size** and **font weight** are defined using **modular, reusable classes**, each with a single responsibility. This allows for greater flexibility and makes it easier to maintain and scale styles in code.

For example, to apply a regular primary heading style:

```css
class="display-1 regular"
```

* `display-1` sets the font size and spacing;
* `regular` sets the font weight (`font-weight: 400`).

This separation makes it easy to create new combinations, such as `display-1 bold`, without duplicating full style definitions.

::: warning Warning
To ensure consistency between design and development, in Figma the styles are still named as composed tokens, such as:
`display-1-regular`
:::

| Style      | Example         |
| ------------ | -------------- |
| Display-1 Regular <br>`font-family-sans-serif` <br> `font-size-120` <br> `font-weight-regular` <br> `line-height-header` <br> `color-emphasized`| |
| Display-2 Regular <br>`font-family-sans-serif` <br> `font-size-96` <br> `font-weight-regular` <br> `line-height-header` <br>`color-emphasized`| |
| Display-3 Regular <br>`font-family-sans-serif` <br> `font-size-76` <br>`font-weight-regular` <br> `line-height-header` <br> `color-emphasized`| |
| header-1 Semibold<br>`font-family-sans-serif` <br> `font-size-60` <br> `font-weight-semibold` <br> `line-height-header` <br> `color-emphasized`| |
| header-2 Semibold <br>`font-family-sans-serif` <br> `font-size-60` <br> `font-weight-semibold` <br> `line-height-header` <br> `color-emphasized`| |
| header-3 Semibold <br>`font-family-sans-serif` <br> `font-size-48` <br> `font-weight-semibold` <br> `line-height-header` <br> `color-emphasized`| |
| header-4 Regular<br>`font-family-sans-serif` <br> `font-size-40` <br> `font-weight-regular` <br> `line-height-header` <br> `color-emphasized`| |
| header-5 Regular <br>`font-family-sans-serif` <br> `font-size-32` <br> `font-weight-regular` <br> `line-height-header` <br> `color-emphasized`| |
| header-6 Bold <br>`font-family-sans-serif` <br> `font-size-24` <br> `font-weight-bold` <br> `line-height-header` <br> `color-emphasized`| |
| label <br>`font-family-sans-serif` <br> `font-size-16` <br> `font-weight-regular` <br> `line-height-label` <br> `color-emphasized`| |
| body-lg Regular <br>`font-family-sans-serif` <br> `font-size-24` <br> `font-weight-regular` <br> `line-height-paragraph` <br> `color-base`| |
| body-md Regular <br>`font-family-sans-serif` <br> `font-size-16` <br> `font-weight-semibold` <br> `line-height-paragraph` <br> `color-base`| |
| body-md Semibold <br>`font-family-sans-serif` <br> `font-size-16` <br> `font-weight-regular` <br> `line-height-paragraph` <br> `color-base`| |
| body-sm Regular <br>`font-family-sans-serif` <br> `font-size-12` <br> `font-weight-regular` <br> `line-height-paragraph` <br> `color-base`| |
| body-sm bold <br>`font-family-sans-serif` <br> `font-size-12` <br> `font-weight-bold` <br> `line-height-paragraph` <br> `color-base`| |


We use **relative units (rem, em)** whenever possible to adapt to screen density and user accessibility settings. A `1rem` text size automatically scales with pixel density and zoom preferences.

