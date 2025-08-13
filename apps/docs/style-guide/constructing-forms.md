# Constructing forms

A general guide for creating forms in **Atlas** using the **OSM Foundation** design system. A form consists of at least one **Field**.

## Usability, Accessibility, and Inclusion

Forms should be as usable, accessible, and inclusive as possible. This isn't just an ethical consideration - it increases form submission success rates. The primary goal of any form is to enable users to complete and submit it with comfort and confidence.

1. **Keep fields simple:** Don't overcomplicate field functionality or logic. Use existing Atlas components for data input needs.
2. **Request only essential information.** Avoid asking for data like email or gender unless absolutely necessary.
3. When collecting such information, consider the differences between **sex** and **gender**.
4. **Labels** should always be visible and associated with inputs. This improves readability and aids navigation.
5. Avoid using disabled buttons as a validation method.
6. Don't impose **time limits** for form completion.
7. Avoid hiding forms inside components like Accordions when completion is mandatory, regardless of screen size.
8. All fields are considered **required by default**. Optional fields should be marked with "(optional)" in the label. The Label component has this functionality built-in.


## Layout

### Width

The form and its fields should occupy **100% of the parent container's width**. For long forms with available horizontal space, they may be divided into sections using a **Table of Contents**.

Fields can have a maximum width of `size-420` (equivalent to 26.25rem) when not using a table of contents. Regardless, all fields should maintain **consistent width**.

Other components within the form (tables, accordions) may occupy **100% width** of their container.

:::tip Note:
 Headers and footers should always span 100% of the page or module width.
:::

### Format

Forms may contain fields in different formats: **multi-column**, **fieldsets**, and **modules**. Label font weight may vary based on desired visual hierarchy.

* **Top labels** should be used to maintain natural reading flow.
* Visually hidden labels may be used for specific accessible cases.

#### Multi-column

Use when:
* Fields are related (e.g., "First Name" and "Last Name")
* Translations won't significantly affect input sizes
* Avoid boxing horizontal fields - use reduced spacing between them instead

#### Fieldsets

Related groups like **checkboxes** and **radio buttons** should be organized in a `fieldset` with corresponding `legend`.

#### Modules

Modules may wrap the entire form or sections to highlight areas with:
* Border
* Subtle background color (`bgn-base`)
* `border-radius-4` from base tokens

Related fields like "Start Date" and "End Date" may be grouped in a module labeled "Duration."

:::tip Note:
 Module labels should be **bold**, while internal labels use regular weight to indicate hierarchy.
:::

## Conditional and Nested Fields

Fields that appear based on another field's selection should be **indented by 16px** per nesting level.

When selecting options like "Other" in radio/checkbox groups, the additional field should appear **immediately below** the selected option, aligned with its label.


## Form Elements

### Table of Contents

May be used to divide long forms. It should be:
* Aligned to the page start
* Contain links to internal sections
* Use `border-color-base` for section heading bottom borders

::: warning Caution:
 Don't use alongside side navigation bars to avoid usability conflicts.
:::

## Footer

Should be fixed to the viewport bottom with background and top border, keeping primary actions always accessible.

* Primary action should be a **Primary Button**
* Secondary actions may use **Tertiary Buttons** (neutral color)
* Destructive actions require **Danger Button**
* Actions should be left-aligned with the primary button right in the group
* Footers with table of contents should match field width, not TOC width

Include any **disclaimer** above the submit button.


## **Validation**

### **Best Practices**

* Use **inline validation** or validation on submission
* Avoid disabled buttons as submission blockers
* After failed submission, show error message above submit button
* This message should disappear when errors are corrected

### **Inline Validation**

May be used for immediate feedback.

### Key Translation Features:
1. Maintained all technical terms and component names
2. Preserved the structured hierarchy with clear sectioning
3. Kept design system tokens intact (`size-420`, `bgn-base`, etc.)
4. Used active voice for clearer instructions
5. Maintained consistent terminology (e.g., "viewport" instead of "view port")
6. Added explanatory notes where helpful without changing meaning
