# Link

A Link navigates the user to another page, view or section, when the user presses it.

::: warning Working in progress
This component is still under development. It is not yet available in releases of Atlas.
:::

## Overview

### When to use Link

Use the Link component when you need to provide users with a clickable element to navigate to a different page, resource, or section in the same page.

Apart from links that navigate to other pages, there are the following different links:

* Links that open a modal instead of a new page (e.g. map links)  
* Links that open a file instead of a web page (e.g. PDF or document links)  
* Links that cause something to happen that the user would otherwise not expect (e.g. play a sound, like pronunciation links)  
* Links that open a new website instead of solely a new page [(external links)](https://en.wikipedia.org/wiki/Wikipedia:External_links)  
* Links that open a non-web protocol URI (e.g. `mailto:`, `tel:` links)

Avoid using Link when the user needs to perform an action. In such cases, use [Button](buttons.md) instead. Learn more about the [usage of links and buttons](../../style-guide/using-links-and-buttons.md).

### About Link

Link includes the following element.

#### Link text   
The text that describes the link destination as clearly as possible.

By default, the Link text style is set to the base font in regular. However, it can be easily customized to other styles by applying any of the existing fonts, text sizes or formats defined in our [font design tokens](https://doc.wikimedia.org/codex/main/design-tokens/font.html).

* **Do:** Highlight only the phrase that indicates the link destination. Translatable  
* **Don't:** Avoid using the words click, tap or here. Avoiding these terms makes things clear and precise, whether the reader is using an assistive device, a mobile device or a desktop experience. Accessible

## Examples

Visit a link to check visited link styles.

### Base Link

Base Links signal to users the option to navigate to a different page, view, or resource.

### Underline Link

By default, Links are only underlined when they are interacted with (hover over or pressed). To suit user preferences and for accessibility reasons, Links can always be underlined.

### External Link

The external link icon indicates that the link will take the user to a different website. This icon cannot be replaced with other icons.

## Technical implementation

## Keyboard navigation

| Key | Function |
| :---- | :---- |
| <kbd>Entrer</kbd> | If the Link is focused, it opens the Link. |