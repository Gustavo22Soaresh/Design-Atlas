# Select

A Select is an input with a dropdown menu of predefined, selectable options.

::: warning Working in progress
This component is still under development. It is not yet available in releases of Atlas.
:::


![][image1]

## Overview

### When to use Select

Use the Select component when users need to choose an option from a short, predefined list.

When not to use:

* If users need to be able to select multiple options, use a [Checkbox group](checkbox.md) (for a short list of options) or Multiselect (for a long list).  
* If users need to be able to select a predefined option or enter their own custom value, use Combobox.

### About Select

Select includes the following elements.

#### Default Icon (optional)  
A default icon can be included alongside the default label to visually enhance the Select's purpose.

* **Do:** Use a simple icon that is easily understandable to users.  
* **Do:** Include an icon when the menu items also contain icons.

#### Label  
The Select will display the label of its selected item. If nothing is selected, a default label can be displayed.

* **Do:** The default label text should clearly indicate the kinds of options that follow. Clear & Trustworthy  
* **Don't:** Don't make the default label a part of a sentence that is completed by the options. Translatable

#### Menu  
When the Select is open, a Menu with options is displayed. These options can use all the features of the MenuItem component.

* **Do:** 2–5 menu items are recommended for optimal usability.  
* **Do:** When there are more items, consider setting a visible item limit to enable scrolling.

## Examples

### Basic usage

Menu items must have a value, and can have a label that gets output in the Select component. If no label is provided (like the third menu item in this example), the value will be displayed.

### With icons

The `defaultLabel` and `menuItems` can have icons.

### With custom label display

You can customize how the label of the selected item appears

### With menu groups

You can group `menuItems` to improve organization. Groups can be customized to add a description or an icon.

### Form field

A Select can be wrapped in the Field component to add features like a semantic label, description and help text, validation messages, and more. Refer to the [Field](field.md) page for more information.

### Other features

The Select component has an internal Menu. You can use the following features from Menu in the Select component:

* [Custom menu item display](https://doc.wikimedia.org/codex/latest/components/demos/menu.html#menu-item-display)  
* [Limited height with scrolling](https://doc.wikimedia.org/codex/latest/components/demos/menu.html#with-scrolling-enabled)  
* [Menu groups](https://doc.wikimedia.org/codex/latest/components/demos/menu.html#menu-groups) (demonstrated above)  
* [MenuItem features](https://doc.wikimedia.org/codex/latest/components/demos/menu-item.html)

## Technical implementation

## Keyboard navigation

*Incorporate keyboard navigation into a table, detailing the keys for interacting with the component via keyboard. This section will clarify how users can navigate the component using various keyboard shortcuts, and it applies only to components with interactive states.*

| Key | Function |
| :---- | :---- |
| <kbd>Down arrow</kbd> | When the focus is placed on the input, it opens the menu. When the menu is open, it navigates through menu options. If pressed at the last visible option, it scrolls to the next "hidden" menu item. |
| <kbd>Up arrow</kbd> | When the focus is placed on the input, it opens the menu. When the menu is open, it navigates through menu options. |
| <kbd>Enter</kbd> | It expands and collapses the menu when the focus is placed on the Select. If the focus is placed in any of the options within the menu, the focused option is selected. |
| <kbd>Esc</kbd> | This key closes the menu when it is open. |
| <kbd>Home</kbd> | Optionally, it moves the focus to the first option. Optionally, in a single-select listbox, selection may also move with focus. Supporting this key is strongly recommended for lists with more than five options. |
| <kbd>End</kbd> | Optionally, it moves the focus to the last option. Optionally, in a single-select listbox, selection may also move with focus. Supporting this key is strongly recommended for lists with more than five options. |

[image1]: <data:image/png;base64,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dn9pK6Mjud/0UbNmTaqiZDPNehAInEDaymjv3r1Wt25dZBR4AyM8CCRLABklS4r1IACBEiWAjEoULzuHAASSJYCMkiXFehCAQIkSQEYlipedQwACyRJARsmSYj0IQKBECSCjEsXLziEAgWQJIKNkSbEeBCBQogRiKSN/Y61uLEzHK1VLtEVcYufnzp1zzHQfFAsEUkkgVjLSjbUbNmyw06dPJxjqJtu2bdsmfcfzO++8Y8eOHbPevXunJA8So74eW507NDH6JyF48SjWt99+2513nz59UnL+7AQCnkBsZKSO9NZbb7mvr77hhhvspptuMl3FfeLECdN9bnfddVdSrUI3IuqeOHXGVMjjq6++coLs3r17ni+NTCqYEl5JfD788EMnXn+uO3futBo1alidOnVK+OjsPm4EYiOjr7/+2tatW2ctWrSwm2++OZHnffv22Z49e6xXr16J6kgVwcmTJ52kqlWr5iThO2NhMlJl82Xut9pKeFo/f5Wj/0tgqsiuvvpqq1KlitufjqPOvn//fmvatKnr4DpWYYvfh/Zz1VVX5X6rbdVvrOa0voZUOg8dy8fl961z88+/kZD19zXXXJMYfmnbZcuWOXlnZGS4G5J1XvqGXv2ODtO0rt9HUcdRPFpHT1jQcdL92TtxE8WVON/YyEidaO3atdagQQNr3LhxQi7+gWxeNhLGmjVr8nS26667ztq3b++2yS+jTz/91N599908ubrtttusXr167n8SlTp1VDISgZ4789lnn9n27dvzbFvY8EedXVWdBOQXyXXAgAFFzt188MEHTnLRpV27du7mYi0rVqywzz//3FU5/twlxzvvvNMdZ+vWrXb8+PHE5hJg165d3XYSTqdOndxrvnqKHkfy0vBXbBctWuTiaNasWWIVnX+/fv1iN+906NAhmz17dqEPAVT7GDduXKwlHRsZqWPMmTPHatWqZXrMgoZlerePPgtJ6yxfvtxVMXpdrx04cMBVTpKROm5URhLN6tWrXaXTuXNn16m3bNniqhE/7Jo7d67bTq+rk2u+adu2bdakSRO75ZZbTDKTkDIzM10nL2zop9ePHj3q1lFVof1v3rzZSfXWW28t8Kblh34ajrZq1co1fsWppUePHk4Cfu5HklClqHOZP3++i7Vv375uXQnpiy++cOciFopNMtL5SlqFHcfvw2+jh98p5g4dOlj1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>
