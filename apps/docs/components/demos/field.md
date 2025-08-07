# Field

A form field with a label, an input or control, and an optional validation message. 

::: warning Working in progress
This component is still under development. It is not yet available in releases of Atlas.
:::

## Overview

### When to use Field

Use the Field component to create form layouts with a variety of form inputs, such as:

*     TextInput and TextArea  
*     Select  
*     Combobox  
*     Checkbox, Radio groups, and ToggleSwitch  
*     ChipInput  
*     Lookup and MultiselectLookup

If you do not need to collect user input, do not use Field. For example, Field is not necessary to display a SearchInput. Although SearchInput is built with a TextInput component, it triggers an action and is not a form item.

### About Field

Field provides features for building a form field to collect user input. Field includes the following elements.

#### Label 
A label serves as a precise and informative title for the form field, indicating the type of information to be entered. Explore Label to check its different properties.

* **Do:** Keep the Field’s label short, clear, and easy to scan. Consistent & Clear  
* **Do:** Label text is bold by default, but the label of nested fields should use the regular font weight to make the hierarchy clear.  
* **Do:** Use a start icon next to the label to emphasize the required input in the form field.  
* **Don't:** Avoid using an icon next to the label if the input already contains an icon.

#### Optional indicator (optional)  
Fields are assumed to be required by default. If a field is optional, it can be labeled as such.

* **Do:** Only indicate the optional Fields in the form, ensuring that the entire word "optional" is displayed for translation purposes.  
* **Don't:** Don't mark required labels with an asterisk or use abbreviations in the optional indicator.

#### Description (optional)  
A description can also be added below the label to provide more information about it. This description can include plain text and links.

### Input(s)  
The input element, or a group of inputs, where the user enters information. Field can use any form input such as TextInput, Select, Checkbox, etc.

#### Placeholder (when applicable)
Labels indicate what the input should be. Placeholder text provides an example of what type of information is being requested in the input.

* **Do:** Placeholder text should further illustrate and support the label. Clear  
* **Don't:** Placeholder text should never replace the label nor be the input's only description. Accessible

#### Help text (optional)  
Help text provides supplementary information or instructions to guide users in completing the field correctly. This text often clarifies formatting or indicates input restrictions. Help text can include plain text and links.

* **Do:** Give clear information about input restrictions. Clear & Accessible  
* **Don't:** Highlight what users should avoid when using this element.

#### Validation mensages 
An inline validation message will appear to provide feedback about the status of the field.

## Examples

For more detailed information about form fields, consult the guidelines for [constructing forms](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Your_first_form).

### Validation messages

You can display a validation message based on the current status of the field.

#### Error

Try entering a username into the field below that's longer than a single character to trigger the error state and error message.
``` svelte
<AtlField
  label="Username"
  placeholder="Enter your username"
  required={true}
  status="error"
  alertMessage="Username must be at least 2 characters."
/>

```
* **Do:** Let a reader know exactly what to do to fix the issue. Relevant & Trustworthy  
* **Don't:** Don't give multiple options for fixing the issue. Concise.

#### Warning

This example shows a warning message on blur if the username doesn't meet the criteria written in the help text. Note that form inputs do not display a "warning" state.
``` svelte
<AtlField
  label="Username"
  placeholder="Enter your username"
  status="warning"
  alertMessage="Usernames are case-sensitive. Be careful!"
/>

```
* **Do:** Keep messages short and precise. Concise & Accessible.  
* **Don't:** Don't write in a way that might cause a reader to panic or worry. Trustworthy

#### Success

This example shows a success message on blur when the username is unique. Note that form inputs do not display a "success" state.
``` svelte
<AtlField
  label="Username"
  placeholder="Enter your username"
  status="success"
  alertMessage="This username is available."
/>

```
* **Do:** Use clear, positive, short messages. Accessible & Concise  
* **Don't:**     Don't include too much information. Relevant

<!-- ### Fieldset with radio group

Groups of [Radio](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/radio) or [Checkbox](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/checkbox) components are considered fieldsets.

* **Do:** Use a fieldset for groups of binary inputs. -->

<!-- ### Field with multiple inputs

The following example is a fieldset with two inputs that depend on one another. Each input needs its own individual label, but in this case, the individual labels can be visually-hidden.

* **Do:** Use a fieldset for any field that contains multiple inputs or controls that depend on one another to form a single meaningful value or dataset.  
* **Don't:** Don't use a fieldset to group separate inputs or for layout purposes.

### Fieldset with nested Fields

Nest Fields within a Field when each input needs its own visible label, description, validation status, and validation message.

* **Do:** Use a fieldset to group Fields that depend on one another to form a single meaningful value or dataset.  
* **Don't:** Don't use a fieldset to group separate Fields or for layout purposes. -->

<!-- ### Custom help text content

The `help-text` slot can contain markup, including other components and dynamic text. This is an example of a custom character counter embedded inside a Field.

* **Do:** Use a character counter only when it's necessary to limit the number of characters in a form input.  
* **Do:** Display an inline error message if the character limit is exceeded. -->

# Technical implementation
## Props
| **Prop Name**      | **Description**                                                                                                    | **Type**                                         | **Default**       |
| ------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------ | ----------------- |
| `label`            | Label text for the field.                                                                                          | `string`                                         | `''`              |
| `labelIcon`        | Icon displayed before the label text. <br> Do not use if the input already has a `startIcon`.                    | `string`                                         | `''`              |
| `labelDescription` | Short descriptive text displayed below the label (optional).                                                       | `string`                                         | `''`              |
| `optional`         | Displays an optional flag next to the label when `true`.                                                           | `boolean`                                        | `false`           |
| `optionalFlag`     | Text to indicate the field is optional. <br> Defaults to "(optional)".                                           | `string`                                         | `'(optional)'`    |
| `hideLabel`        | Visually hides the label and description. <br> The label remains accessible for screen readers.                  | `boolean`                                        | `false`           |
| `isFieldset`       | Wraps the field in a semantic `<fieldset>` and `<legend>` when `true`. Otherwise, uses a `<div>` with a `<label>`. | `boolean`                                        | `false`           |
| `disabled`         | Disables the entire field group, including label, input, and any alerts.                                           | `boolean`                                        | `false`           |
| `required`         | Marks the field as required (for native validation or visual indication).                                          | `boolean`                                        | `false`           |
| `inlineAlert`      | Whether the alert appears inline (without padding, background, or border).                                         | `boolean`                                        | `false`           |
| `status`           | Validation status for the field and input. Controls the style and the alert visibility.                            | `'default' \| 'error' \| 'warning' \| 'success'` | `'default'`       |
| `alertMessage`     | The alert message displayed when the `status` is not `'default'`.                                                  | `string`                                         | `'Alert Message'` |

<!-- ## Input Related Props (Passed to AtlTextInput)
| **Prop Name** | **Description**                                | **Type**           | **Default**     |
| ------------- | ---------------------------------------------- | ------------------ | --------------- |
| `startIcon`   | Icon before the input.                         | `string`           | `''`            |
| `endIcon`     | Icon after the input.                          | `string`           | `''`            |
| `clearable`   | Shows a clear button when there is input text. | `boolean`          | `true`          |
| `inputType`   | HTML input type.                               | `'text' \| ...`    | `'text'`        |
| `readonly`    | Makes the input read-only.                     | `boolean`          | `false`         |
| `placeholder` | Placeholder text in the input.                 | `string`           | `'Placeholder'` |
| `value`       | Bound value for the input.                     | `string \| number` | `''`            |

## Slots
| **Slot Name** | **Description**                                                                         | **Bindings** |
| ------------- | --------------------------------------------------------------------------------------- | ------------ |
| `label`       | Custom label content (overrides the `label` prop).                                      | —            |
| `description` | A short description or instruction below the label.                                     | —            |
| `default`     | The input field or control itself.                                                      | —            |
| `help-text`   | Additional guidance or notes below the input.                                           | —            |
| `warning`     | Custom warning message. Used when `status` is `'warning'` and can contain rich content. | —            |
| `error`       | Custom error message. Used when `status` is `'error'` and can contain rich content.     | —            |
| `success`     | Custom success message. Used when `status` is `'success'` and can contain rich content. | —            | -->

## Keyboard navigation
| Key | Function |
| :---- | :---- |
| <kbd>Tab</kbd> | It moves the focus to the next interactive element in tab order. |
| <kbd>Shift</kbd> \+ <kbd>Tab</kbd> | It moves the focus to the previous interactive element. |
| <kbd>Enter</kbd> | If the focus is placed on one of the interactive elements within the Field, it activates them. |

