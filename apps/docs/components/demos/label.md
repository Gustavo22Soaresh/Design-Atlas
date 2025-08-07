# Label

A Label provides a descriptive title for an input or form field.

::: warning Working in progress
This component is still under development. It is not yet available in releases of Atlas.
:::

![][image1]

## Overview

### When to use label

Every input or form field must have an associated label. When creating a form, use the [Field](field.md) component, which contains a Label. When creating an input outside of a form use the Label component.

For more detailed information about form fields, consult the guidelines for [constructing forms](../../style-guide/constructing-forms.md).

### About Label

Label includes the following elements.

#### Label text
A clear and descriptive title for the input tells the user what information to enter.

* **Do:** Keep the label text short, clear, and easy to scan.  
* **Do:** Label text is required, but can be visually-hidden if the context of an input is sufficient to identify it.  
* **Do:** Label text is bold by default, but the label of nested fields should use the regular font weight to make the hierarchy clear.

#### Optional indicator (optional)  
Fields are assumed to be required by default. If a field is optional, it can be labeled as such.

* **Do:** Ensure that the entire word "optional" is displayed for translation purposes.  
* **Don't:** Don't mark required labels with an asterisk.

#### Description (optional)  
The description provides additional information about the field.

## Examples

::: tip TIP
Consider using the [Field](./field.md) component, which includes the Label component and handles accessibility features like ARIA attributes internally. If you need more custom behavior, use the Label component on its own.
:::

### Basic usage

By default, the Label will be visible with the label text styled in bold.
``` svelte
<AtlLabel
  id="username"
  label="Username"
/>

```

### Visually-hidden label
All inputs need a label to meet accessibility standards. In rare instances, you may not need a visible label if it's very clear from context how to use an input.
``` svelte
<AtlLabel
  id="search"
  label="Search"
  visuallyHidden={true}
/>
```

### With description

Description text can include markup. Only links and text formatting are recommended as description text should be concise.
``` svelte
<AtlLabel
  id="email"
  label="Email"
  description="Enter your work email address. We’ll never share it."
/>
```
* **Do:** Explain what users should do to use this element effectively.  
* **Don't:** Highlight what users should avoid when using this element.

### Label vs. legend

This component outputs a different HTML element depending on whether it is a label for a single input or for a group of inputs. Below are examples of a label and a legend with an associated description.

#### Label
``` svelte
<AtlLabel
  id="first-name"
  label="First Name"
  description="As it appears on your ID."
/>
```

#### Legend
``` svelte
<AtlLabel
  isLegend={true}
  label="Preferred Contact Method"
  description="Select all that apply."
/>
```


## Technical implementation
### Props
| **Prop Name**    | **Description**                                                                                                                       | **Type**         | **Default** |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ----------- |
| `id`             | The ID of the label element itself. Useful for accessibility or testing.                                                              | `string`         | `''`        |
| `label`          | Label text for the input or field.                                                                                                    | `string`         | `'Label'`   |
| `icon`           | Icon displayed before the label text.<br> Do not use if the input already has a `startIcon`.                                        | `string \| null` | `null`      |
| `optional`       | Adds an optional flag next to the label if set to `true`.                                                                             | `boolean`        | `false`     |
| `optionalFlag`   | Text to indicate that the field is optional.<br> Defaults to `"(optional)"` when `optional` is true.                                | `string`         | `''`        |
| `visuallyHidden` | Visually hides the label text but keeps it accessible for screen readers.<br> The `description` is also hidden when this is `true`. | `boolean`        | `false`     |
| `isLegend`       | Renders a `<legend>` element instead of a `<label>` when `true`. <br> Required when the label is inside a `<fieldset>`.              | `boolean`        | `false`     |
| `disabled`       | Indicates that the associated input is disabled. Updates the label style accordingly.                                                 | `boolean`        | `false`     |
| `required`       | Marks the input or field as required visually.                                                                                        | `boolean`        | `false`     |
| `description`    | Short descriptive text that appears below the label.                                                                                  | `string`         | `''`        |
| `inputId`        | The ID of the input/control this label is associated with. Sets the `for` attribute on `<label>`. Not used when `isLegend` is `true`. | `string`         | `''`        |
| `descriptionId`  | The ID of the description text.<br>Used to link with `aria-describedby` for accessibility purposes on the input/control.              | `string`         | `''`        |

### Slots
| **Slot Name** | **Description**                                                          | **Bindings** |
| ------------- | ------------------------------------------------------------------------ | ------------ |
| `default`     | Label text. Overrides the `label` prop if used.                          | —            |
| `description` | Short description or hint below the label. Overrides `description` prop. | —            |

## Keyboard navigation

| Key | Function |
| :---- | :---- |
| <kbd>Enter</kbd> | If the focus is placed on one of the interactive elements within the Label, it activates them. |


[image1]: <data:image/png;base64,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>