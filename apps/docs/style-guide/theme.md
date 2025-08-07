# Theme
The Atlas color palette is used to bring visual meaning to interface elements and convey specific
messages in certain instances. The primary colors used are various shades of gray as textual and
foundational elements, blue as progressive elements, and red, yellow, and green to convey status.
To check the contrast ratio between two colors, visit the [WebAIM contrast checker](https://webaim.org/resources/contrastchecker/).

For documentation on the entire color palette, visit [Colors](/design-tokens/colors.md).

:::tip
Some colors vary between light and dark modes. Use the color mode switcher in the site header to see
the colors in the different modes. Using design tokens rather than raw hex codes will ensure you're
automatically using the right color for the chosen mode.
:::

## Class First 

The Atlas color system follows a *class-first* approach, which means you can apply styles directly using utility classes like `color-accent`, `bg-primary`, `text-link`, and others. This enables faster and more consistent interface development without relying on inline styles or custom CSS for each element.

These classes are based on Atlas’s **design tokens** and ensure all elements adhere to the OpenStreetMap visual identity, including accessibility, contrast, and responsiveness. By using classes like `color-accent`, you apply the accent color defined in the active theme (whether light or dark) ensuring visual harmony across all contexts.

The *class-first* approach also simplifies maintenance and scalability of the design system and allows smoother integration with utility-based frameworks like Tailwind CSS.

## Theming
You can easily adapt **Atlas** to your project’s color scheme thanks to the use of **Design Tokens**. This makes it simple to customize elements like `color-accent` while preserving the system’s visual consistency and structure.

We recommend keeping Atlas’s original background colors to maintain contrast and accessibility. When customizing, prioritize adjusting the `color-accent` and always check contrast with background elements to ensure readability.

## Text color
Color tokens applied to text and icons

| Color                                                                             | Token                                          | When to use                      |
| --------------------------------------------------------------------------------- | ---------------------------------------------- | ------------------------------- |
| <div class="example" style="background-color: var(--color-base);"></div>          | `color-base`          | Default color of all text styles and icons | 
| <div class="example" style="background-color: var(--color-subtle);"></div>        | `color-subtle`        | Subtle text/icons that shouldn't be distracting (e.g. subtitles, descriptions) |
| <div class="example" style="background-color: var(--color-emphasized);"></div>    | `color-emphasized`    | Emphasized text/icons (e.g., Headings) |
| <div class="example" style="background-color: var(--color-base-hover);"></div>    | `color-base-hover`    | Tertiary buttons text/icons on hover |
| <div class="example" style="background-color: var(--color-disable);"></div>       | `color-disable`       | Use it for disabled text/icons in interactive elements (e.g. input, form items).|
| <div class="example" style="background-color: var(--color-accent);"></div>        | `color-accent`        | Active color for accents text and icons |
| <div class="example" style="background-color: var(--color-accent-hover);"></div>  | `color-accent-hover`  | Hover color of primary text elements |
| <div class="example" style="background-color: var(--color-accent-active);"></div> | `color-accent-active` | Text on darker backgrounds  |
| <div class="example" style="background-color: var(--color-foreground);"></div>    | `color-foreground`    | Icons on hover |
| <div class="example" style="background-color: var(--color-inverse);"></div>       | `color-inverse`       |  Text and icons on darker backgrounds |
| <div class="example" style="background-color: var(--color-link);"></div>          | `color-link`          |  Links  |
| <div class="example" style="background-color: var(--color-link-active);"></div>   | `color-link-active`   |  Links active |
| <div class="example" style="background-color: var(--color-link-visited);"></div>  | `color-link-visted`   | Visited links |
| <div class="example" style="background-color: var(--color-success);"></div>       | `color-success`       | Success messages and icons |
| <div class="example" style="background-color: var(--color-info);"></div>          | `color-info`          | Info messages and icons |
| <div class="example" style="background-color: var(--color-warning);"></div>       | `color-warning`       |  Warning messages and icons  |
| <div class="example" style="background-color: var(--color-error);"></div>         | `color-error`         | Error messages and icons |

## Background colors
Color tokens applied in backgrounds
| Color                                                                           | Token                | When to use     |
| ------------------------------------------------------------------------------- | -------------------- | ---------------- |
| <div class="example" style="background-color: var(--bgn-base);"></div>          | `bgn-base`           | Base background |
| <div class="example" style="background-color: var(--bgn-surface);"></div>       | `bgn-surface`        | Surface background  |
| <div class="example" style="background-color: var(--bgn-surface-hover);"></div> | `bgn-surface-hover`  | Hovered menu options, active tertiary buttons |
| <div class="example" style="background-color: var(--bgn-disable);"></div>       | `bgn-disable`        | Disabled background of interactive elements (e.g. button) |
| <div class="example" style="background-color: var(--bgn-accent);"></div>        | `bgn-accent`         | Default accent backgrounds |
| <div class="example" style="background-color: var(--bgn-accent-hover);"></div>  | `bgn-accent-hover`   | Hover accent backgrounds |
| <div class="example" style="background-color: var(--bgn-accent-active);"></div> | `bgn-accent-active`  | Active accent backgrounds |
| <div class="example" style="background-color: var(--bgn-foreground);"></div>    | `bgn-foreground`     | Foreground background |
| <div class="example" style="background-color: var(--bgn-danger);"></div>        | `bgn-danger`         |  Default danger/error backgrounds |
| <div class="example" style="background-color: var(--bgn-danger-hover);"></div>  | `bgn-danger--hover`  | Hover on danger/error interactive backgrounds  |
| <div class="example" style="background-color: var(--bgn-danger-active);"></div> | `bgn-danger--active` | Active danger/error backgrounds (e.g. active selected-error checkbox) |
| <div class="example" style="background-color: var(--bgn-info);"></div>          | `bgn-info`           | Info feedback background |
| <div class="example" style="background-color: var(--bgn-sucess);"></div>        | `bgn-sucess`         | Success feedback background |
| <div class="example" style="background-color: var(--bgn-warning);"></div>       | `bgn-warning`        | Warning feedback backgorund |
| <div class="example" style="background-color: var(--bgn-error);"></div>         | `bgn-error`          | Error feedbacks backgorund |


## Border colors
Color tokens applied to borders on form items and buttons
| Color                                                                                    | Token                     | Reference                       |
| ---------------------------------------------------------------------------------------- | ------------------------- | ------------------------------- |
| <div class="example border" style="border-color: var(--border-color-base);"></div>       | `border-color-base`        | Default for interactive elements, dialogs, menus |
| <div class="example border" style="border-color: var(--border-color-base-hover);"></div> | `border-base-color-hover` | When interactive elements on hover |
| <div class="example border" style="border-color: var(--border-color-subtle);"></div>     | `border-color-subtle`     | Dividers and thumbnail borders |
| <div class="example border" style="border-color: var(--border-color-accent);"></div>     | `border-color-accent`     | Disabled form item borders |
| <div class="example border" style="border-color: var(--border-color-focus);"></div>      | `border-color-focus`      |  |
| <div class="example border" style="border-color: var(--border-color-info);"></div>       | `border-color-info`       | ``  |
| <div class="example border" style="border-color: var(--border-color-success);"></div>    | `border-color-success`    | ``  |
| <div class="example border" style="border-color: var(--border-color-warning);"></div>    | `border-color-warning`    | ``  |
| <div class="example border" style="border-color: var(--border-color-error);"></div>      | `border-color-error`      | ``  |

<style>

    @import url(_variables.css);
        .example {
            width: 3rem;
            height: 3rem;
            border-radius: 0.25rem;
            box-shadow: var(--shadow-sm);
        }

        .border {
                border: var(--border-width-2) solid var(--border-color-base);
                box-shadow: none;
            }

</style>