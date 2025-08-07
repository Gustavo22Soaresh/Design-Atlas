# Border

:::tip
Some border colors vary between light and dark modes. Use the color mode switcher in the site
header to check the border colors in the different modes. Using design tokens rather than raw hex
codes will ensure you're automatically using the right color for the chosen mode.
:::

## Border width
| example                                                                                  | Token                     | PX    |
| ---------------------------------------------------------------------------------------- | ------------------------- | ----- |
| <div class="example border" style="border-width: var(--border-width-04);"></div>       | `border-width-04`        | 0.4px |
| <div class="example border" style="border-width: var(--border-width-1);"></div>       | `border-width-1` | 1px |
| <div class="example border" style="border-width: var(--border-width-2);"></div>       | `border-width-2` | 2px |


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


## Border radius
| Radius                                                                             | Token              | PX (rem)      |
| ---------------------------------------------------------------------------------- | ------------------ | ------------- |
| <div class="example border" style="border-radius: var(--border-radius-4);"></div>  | `border-radius-4`  | 4px (0.25rem) |
| <div class="example border" style="border-radius: var(--border-radius-8);"></div>  | `border-radius-8`  | 4px (5rem)    |
| <div class="example border" style="border-radius: var(--border-radius-16);"></div> | `border-radius-16` | 4px (1rem)    |
| <div class="example border" style="border-radius: var(--border-radius-20);"></div> | `border-radius-20` | 4px (1.25rem) |
| <div class="example border" style="border-radius: var(--border-radius-24);"></div> | `border-radius-24` | 24px (1.5rem) |
| <div class="example border" style="border-radius: var(--border-radius-32);"></div> | `border-radius-32` | 32px (2rem)   |

## Border style
| Style                                                                           | Token                  | Value                                                     |
| ------------------------------------------------------------------------------- | ---------------------- | --------------------------------------------------------- |
| <div class="example border" style="border: var(--border-style-base);"></div>    | `border-style-base`    | `var(--border-width-04) solid var(--border-color-base)`   |
| <div class="example border" style="border: var(--border-style-accent);"></div>  | `border-style-accent`  | `var(--border-width-1) solid var(--border-color-accent)`  |
| <div class="example border" style="border: var(--border-style-focus);"></div>   | `border-style-focus`   | `var(--border-width-2) solid var(--border-color-accent)`  |
| <div class="example border" style="border: var(--border-style-active);"></div>  | `border-style-active`  | `var(--border-width-1) solid var(--border-color-accent)`  |
| <div class="example border" style="border: var(--border-style-error);"></div>   | `border-style-error`   | `var(--border-width-1) solid var(--border-color-error)`   |
| <div class="example border" style="border: var(--border-style-success);"></div> | `border-style-success` | `var(--border-width-1) solid var(--border-color-success)` |


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