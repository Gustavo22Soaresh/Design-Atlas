# TextInput

A TextInput is a form element that lets users input and edit a single-line text value.

::: warning Working in progress
This component is still under development. It is not yet available in releases of Atlas.
:::

![][image1]

## Overview

### When to use TextInput

Use the TextInput component in forms when the user’s answer to a prompt can not easily be predicted, or when there is significant variability in potential inputs. 

### About TextInput

*Define the component's anatomy by listing all elements or subcomponents that make it up. Provide a definition for each component’s element and include as many Do’s and Don’ts as needed to outline best practices for using the component effectively.*

#### Start Icon (optional)  
A start icon can be included to visually enhance the input's purpose. For example, the "user avatar" icon might be used in a username field.
```svelte
<TextInput
  inputType="text"
  startIcon="person"
  placeholder="Enter your username"
/>
```

* **Do:** Use a simple icon that is easily understandable to users.

#### Input (optional)  
The following input types can be used:

1. Text (default)  
2. Search  
3. Number  
4. Email  
5. Password  
6. Telephone  
7. URL  
8. Week  
9. Month  
10. Date  
11. Date and time  
12. Time

#### Placeholder text (optional)  
Placeholder text provides an example of what type of information is being requested in the input.
```svelte
<TextInput
  inputType="text"
  placeholder="Enter your name"
/>
```

* **Do:** Placeholder text should further illustrate and support the TextInput's label.  
* **Don't:** Placeholder text should never replace the label nor be the input's only description.

#### End icon (optional)  
A secondary end icon be included if needed.

#### Clear button (optional)  
A 'clear' button can be included to remove the typed content within the input field.

## Examples

### Basic usage

### With initial value

### Input type

Any of the [native input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types) can be used. Some types may result in a browser-provided user interface, like a date picker for a date input.later.

### Clearable

A clearable TextInput will have a clear button when there is text in the input. When clicked, the clear button will set the input value to an empty string.
```svelte
    <AtlTextInput inputType='text' clearable=true />
```
### With icons

Any of the [native input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types) can be used. Some types may result in a browser-provided user interface, like a date picker for a date input.later.

```svelte
<AtlTextInput
  inputType="text"
  startIcon="user"
  endIcon="check"
  placeholder="Enter your username"
/>
```


* **Do:**
    - Use icons to clarify the purpose of the input (e.g., a user icon for username, an email icon for email).
    - Pair icons with clear placeholders or labels.
    - Use end icons to indicate status or actions (like a checkmark for valid input).
* **Don't:** 
    - Don’t rely only on icons without labels or placeholders — it can confuse users.
    - Avoid using too many icons that create visual clutter.
    - Don’t use icons that are ambiguous or irrelevant to the input’s purpose.

### Form field

A TextInput can be wrapped in the Field component to add features like a semantic label, description and help text, validation messages, and more. Refer to the [Field](field.md) page for more information.

### Native validation
The TextInput component exposes native constraint validation methods. Refer to the methods below to review all of the supported features.
This demo sets the input type to "email" and validates the input on blur. When the input is invalid, it sets the Field's status to "error" and passes the native validation message to the Field component for display.

## Technical implementation
### Props
| **Prop Name** | **Description**                                                                                       | **Type**           | **Values**                                                                                                                               | **Default**     |
| ------------- | ----------------------------------------------------------------------------------------------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| `value`       | Current value of the input. (Usado com binding)                                                       | `string \| number` | —                                                                                                                                        | `''`            |
| `inputType`   | HTML input type attribute.                                                                            | `string`           | `'text'`, `'search'`, `'number'`, `'email'`, `'password'`, `'tel'`, `'url'`, `'week'`, `'month'`, `'date'`, `'datetime-local'`, `'time'` | `'text'`        |
| `status`      | Validation status. Changes the style according to the state.                                          | `string`           | `'default'`, `'error'`, `'success'`                                                                                                      | `'default'`     |
| `disabled`    | Disables the input if `true`.                                                                         | `boolean`          | —                                                                                                                                        | `false`         |
| `readonly`    | Makes the input read-only (not editable).                                                             | `boolean`          | —                                                                                                                                        | `false`         |
| `placeholder` | Placeholder text shown when the input is empty.                                                       | `string`           | —                                                                                                                                        | `'Placeholder'` |
| `startIcon`   | Optional icon displayed at the start (left) of the input field.                                       | `string`           | —                                                                                                                                        | `''`            |
| `endIcon`     | Optional icon displayed at the end (right) of the input field.                                        | `string`           | —                                                                                                                                        | `''`            |
| `clearable`   | Adds a clear button that appears when there is text in the input. Clicking it clears the input value. | `boolean`          | —                                                                                                                                        | `false`         |

<!-- ### Methods
| **Method Name**              | **Description**                                                                                                                      | **Signature**                             |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- |
| `focus()`                    | Focuses the input element.                                                                                                           | `Returns: void`                           |
| `blur()`                     | Removes focus (blurs) from the input element.                                                                                        | `Returns: void`                           |
| `checkValidity()`            | Checks the validity of the input based on native HTML constraints (`required`, `pattern`, etc.). Emits `'invalid'` event if invalid. | `Returns: boolean` (valid or not)         |
| `reportValidity()`           | Checks validity and displays native browser UI validation error if invalid.                                                          | `Returns: boolean` (valid or not)         |
| `setCustomValidity(message)` | Sets a custom error message for the input. Pass an empty string (`''`) to reset.                                                     | `Params: message: string — Returns: void` |

### Events
| **Event Name**      | **Payload**                   | **Description**                                                                                                                                                                                                                            |
| ------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `update:modelValue` | `{ value: string \| number }` | Emitted when the input value changes (two-way binding).                                                                                                                                                                                    |
| `keydown`           | `KeyboardEvent`               | Fired when the user presses a key inside the input. *(Excludes Home and End keys unless combined with Ctrl/Cmd.)*                                                                                                                          |
| `input`             | `InputEvent`                  | Fired whenever the value of the input changes due to direct user input.                                                                                                                                                                    |
| `change`            | `Event`                       | Fired when a user commits a change (e.g., after blur or pressing Enter).                                                                                                                                                                   |
| `focus`             | `FocusEvent`                  | Fired when the input gains focus.                                                                                                                                                                                                          |
| `blur`              | `FocusEvent`                  | Fired when the input loses focus.                                                                                                                                                                                                          |
| `clear`             | `MouseEvent`                  | Fired when the input is cleared via the clear button (when `clearable` is `true`).                                                                                                                                                         |
| `invalid`           | `Event`                       | Fired when the input fails HTML constraint validation (e.g., `required`, `pattern`, `min`, `max`). See [HTMLInputElement invalid event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/invalid_event) for more details. | -->

## Keyboard navigation

| Key | Function |
| :---- | :---- |
| <kbd>Left arrow</kbd> / <kbd>Right arrow</kbd> | The left and right arrows navigate through the text content within the input. |
| <kbd>Up arrow</kbd> / <kbd>Down arrow</kbd> | Up arrow moves the focus from the last position of the input to the first one, while down arrow moves it from the first position to the last. |

[image1]: <data:image/png;base64,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>