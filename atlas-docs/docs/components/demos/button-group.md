# ButtonGroup

A ButtonGroup consists of a set of two or more normal buttons. Buttons in such a group signal a number of equally important actions that will occur when the user taps on them.

::: warning Working in progress
This component is still under development. It is not yet available in releases of Atlas.
:::

## Overview

### When to use ButtonGroup

Use the ButtonGroup component when you want users to choose actions from a set of actions, with the restriction that only one can be active at a time. If you want to enable users to select one or multiple options from a set of options, use ToggleButtonGroup instead.*.*

### About ButtonGroup

ButtonGroup consists of a minimum of two neutral normal Buttons, which include the following elements.

#### Label
Each button within the ButtonGroup must have a label. Button labels should be as short as possible, with text that clearly states what action will be taken once the button is pressed (e.g. download, submit form, search).*.*

* **Do:** Customize the content of each button, allowing for superscript, subscript, or special characters.  
* **Do:** Use numbers instead of text if needed  
* **Don't:** Highlight what users should avoid when using this element.

#### Icon (optional)
Icons simplify user recognition and provide the ability to shorten button labels to a minimum.

* **Do:** Mix text-only and icon-only buttons exclusively when using the ‘ellipsis‘ icon to indicate additional actions.  
* **Don't:** In order to ensure consistency, avoid mixing different types of button contents within the same ButtonGroup.

## Examples

### Basic usage

### With icon

Use an icon with the button label when you need to convey meaning through both textual and visual elements.

### Icon-only buttons

For icon-only buttons, the label will be visually hidden and available only to users of assistive technology.

* **Do:** Icon-only buttons may be used to form a ButtonGroup but only if the icons used are universally understood and do not require accompanying text.

### Icon-only buttons

When the ButtonGroup is too large to fit on one line, the buttons overflow to the next line.

## Technical implementation

## Keyboard navigation

| Key | Function |
| :---- | :---- |
| <kbd>Tab</kbd> | It moves the focus to the next Button within the group or to the next interactive element in tab order when the focus is placed on the last Button of the group. |
| <kbd>Shift</kbd> \+ <kbd>Tab</kbd> | It moves the focus to the previous Button within the group or to the previous interactive element when the focus is placed on the first Button of the group. |
| <kbd>Enter</kbd> / <kbd>Space</kbd> | If the focus is placed on one of the buttons, it activates that Button. |

