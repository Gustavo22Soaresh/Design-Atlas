# Button

A Button triggers an action when the user clicks or taps on it.

::: warning Working in progress
This component is still under development. It is not yet available in releases of Atlas.
:::

## Overview

### When to use Button

Use the Button component when you want to trigger an action or toggle something in the user's current context.

Avoid using Button when:

* The action is to navigate the user to a new resource, which would take them away from the current context. In such cases, consider Link instead. Learn more about using links and buttons.  
* You need to represent state-persistent user actions. In this case, use ToggleButton instead.

### About Button

Button includes the following elements.

#### label  
Button labels should be as short as possible, with text that clearly states what action follows clicking the button (e.g. download, submit form, search).

Buttons labels should ideally be fewer than 38 characters in English, as translations average 42 characters. Logographic and Arabic-script languages are generally shorter, while Romance, some Germanic, Slavic, Austronesian, and others like Greek and Finnish tend to be longer, averaging 45–53 characters.

* **Do:** Use descriptive, accessible verbs to encourage action. Concise & Accessible
* **Do:** Write in sentence case, capitalizing only the first word. Consistent  
* **Do:** Answer direct questions in titles or body copy using the same terminology. Clear  
* **Don't:** Avoid using similar words for different actions. Clear

* **Don't:** Avoid verbs that imply visual or sensory abilities such as "see", or are idiomatic or vague. Accessible & Translatable

#### Icon (optional)  
Icons simplify user recognition and provide the ability to shorten Button labels to a minimum. When the Button includes a label, the icon is optional and should be used to add a clear visual reinforcement to the label. If the Button is icon-only, it should use a universally recognizable icon, such as the “edit” action.

* **Do:** Ensure that icons used in buttons are relevant and easily recognizable.  
* **Don't:** Avoid using icons that are difficult to recognize or do not clearly convey their purpose.

## Examples

### Button weight

A Button can convey one of three `weight` types.

1. **Outline**  
   When designing a project, outline buttons are the default choice.  
2. **Primary**  
   Primary buttons signal the main action in a given view – a page or a dialog. As they should guide the user to the most important action (“call to action”), there should only be one primary button per view.  
3. **Tertiary**  
   Use quiet buttons for an easily recognizable action that does not detract focus from the content. For example, the icon-only edit buttons alongside sections in an article on mobile Wikipedia.
4. **Danger**
    Reserve danger buttons for actions that involve removal or limitation, such as deleting a item or blocking a user. Avoid using them for actions like cancel buttons.

### With icon

Use an icon with the button label when you need to convey meaning through both textual and visual elements.

### Icon-only button

Use an icon-only button for actions that can be universally recognized through the icon alone. For an icon-only Button, the label is visually hidden but available to assistive technology users.

::: warning WARNING
Due to the lack of descriptive text, icon-only buttons require one of the following attributes: `aria-label` or `aria-hidden`.
The attribute `aria-label` has to be used on icon-only buttons to be understandable by assistive technology users.
:::

### Disabled button

Buttons may be disabled, but disabled buttons should be used sparingly.

* **Do:** Use disabled Buttons when they are related to a single input, therefore implying what must be completed to enable the Button.  
* **Don't:** Avoid using disabled Buttons to prevent a user from attmepting to continue forward. Instead, rely on providing validation as a response to what might be incomplete or incorrect.

## Technical implementation

## Keyboard navigation

| Key | Function |
| :---- | :---- |
| <kbd>Enter</kbd> / <kbd>Space</kbd> | If the focus is placed on the Button, it activates the Button. |

