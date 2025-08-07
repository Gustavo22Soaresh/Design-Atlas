# TextArea

A TextArea is a multi-line text input that allows manual resizing if needed.

::: warning Working in progress
This component is still under development. It is not yet available in releases of Atlas.
:::

![][image1]

## Overview

### When to use TextArea

Use the TextArea component to let users enter long text that exceeds one line.

This form element is useful when the user needs to enter a sizable amount of free-form text, for example comments, reviews, feedback, or short essay responses. If the text is expected to be short, use TextInput instead.

### About TextArea

TextArea includes the following elements.

#### Start icon (optional)  
Describe the component's element and include Do’s and Don’ts as needed.

* **Do:** Use a simple icon that is easily understandable to users.

#### TextArea 
The textarea element's has an optional grabber that allows vertical resizing, and a scrollbar will appear if the text exceeds the height of the textarea before resizing. If the autosize property is enabled, the height of the textarea adjusts automatically according to the length of the text.

#### Start icon (optional)  
The textarea element's has an optional grabber that allows vertical resizing, and a scrollbar will appear if the text exceeds the height of the textarea before resizing. If the autosize property is enabled, the height of the textarea adjusts automatically according to the length of the text.

* **Do:** Use a simple icon that is easily understandable to users.

#### Placeholder text (optional)  
Placeholder text provides an example of what type of information is being requested in the TextArea.

* **Do:** Placeholder text should further illustrate and support the TextArea's label.  
* **Don't:** Placeholder text should never replace the label nor be the input's only description.

#### End icon (optional)  
A secondary end icon can be included if needed.

## Examples

### Basic usage

By default, the TextArea has a grabber that can be used to manually resize it.

### Custom rows 

*Provide a description of this example and include an image illustrating how the component demo should look. This will help developers accurately implement it later.*

* **Do:** The number of rows shown should reflect the amount of text expected to be entered.

### With autosize

When the autosize property is enabled, the TextArea's height will automatically grow with the length of the text. The grabber and scrollbar are removed since the TextArea expands automatically and shows all of the text at once.

* **Do:** Use a TextArea with \`autosize\` when there is ample space in the layout for the TextArea to expand.

### With icons

A TextArea can have a start icon, end icon, or both. Any Codex icon can be used.

* **Do:** Use simple icons that are easily understandable to users.

### Form field

A TextArea can be wrapped in the Field component to add features like a semantic label, description and help text, and validation messages. A character counter can also be added via the Field component. Refer to the [Field](field.md) page for more information.


### Native validation

The TextArea component exposes [native constraint validation](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation) methods. Refer to the methods below to review all of the supported features.

This demo sets the `required` attribute on the textarea and validates it when the form is submitted. When the textarea is invalid, it sets the Field's status to "error" and passes the native validation message to the Field component for display. Submit the form while leaving the TextArea blank.


## Technical implementation

## Keyboard navigation

| Key | Function |
| :---- | :---- |
| <kbd>Left arrow</kbd> / <kbd>Right arrow</kbd> | The left and right arrows navigate through the text content within the input. |
| <kbd>Up arrow</kbd> / <kbd>Down arrow</kbd> | Up arrow moves the focus from the last position of the input to the first one, while down arrow moves it from the first position to the last. |

[image1]: <data:image/png;base64,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>