
# Box-shadow

## Shadow (shorthand)

Shadows are used to show depth on the surface of a page. Borders are used alongside shadows to further emphasize the edge of a shape, especially in dark mode, where shadows are far more subtle.

The "light source" for these shadows is oriented between the top and center of the object which has the shadow applied. There are two levels of shadows in Codex represented as `small`, `medium`, and `large`.

- **Small** should be used for elements which other content disappears behind, and are on the lowest possible elevated plane, such as ProgressBars, toolbars, and collapsed headers.
- **Medium** should be used for elements which appear overtop of other content, but are triggered from a directly related element on the page, such as Menus.
- **Large** should be used for elements which appear overtop of an entire page or surface area, or require extra attention, such as Dialogs, Toasts, previews, and bottom sheets.

*Shadow levels should not change when a new plane is created. For example, a Menu which appears within a Dialog should still have a `medium` box-shadow.*


| shadow                                                               | Token          | value     |
| -------------------------------------------------------------------- | -------------- | ---------------- |
| <div class="example" style="box-shadow: var(--shadow-sm);"></div>    | `shadow-sm`    | 0 4px 6px -1px rgb(0 0 0 / 0.1)     |
| <div class="example" style="box-shadow: var(--shadow-md);"></div>    | `shadow-md`    | 0 10px 15px -3px rgb(0 0 0 / 0.1)   |
| <div class="example" style="box-shadow: var(--shadow-xl);"></div>    | `shadow-xl`    | 0 20px 25px -5px rgb(0 0 0 / 0.1)   |
| <div class="example" style="box-shadow: var(--shadow-2xl);"></div>   | `shadow-2xl`   | 0 25px 50px -12px rgb(0 0 0 / 0.25) |
| <div class="example" style="box-shadow: var(--shadow-inner);"></div> | `shadow-inner` | 0 25px 50px -12px rgb(0 0 0 / 0.25) |


<style>

    @import url(_variables.css);
        .example {
            width: 3rem;
            height: 3rem;
            border-radius: 0.25rem;
            background-color: none;
        }

        .border {
                border: var(--border-width-2) solid var(--border-color-base);
                box-shadow: none;
            }

</style>