# Tooltip

A Tooltip is a brief message that shows up when a user hovers over a specific part of the user interface, providing additional information. 

::: warning Working in progress
This component is still under development. It is not yet available in releases of Atlas.
:::

## Overview

### When to use Tooltip

Use the Tooltip component to add a small piece of information to its associated element. Tooltips can be used to explain the meaning or purpose of interface elements like icons and buttons where the initial element might not be clear, or to show the full version of truncated text where space is not available.

### About Tooltip

The Tooltip will be shown on hover or focus of its trigger. On touchable screens, the Tooltip can be shown by long pressing on the trigger. By default, the Tooltip appears beneath its trigger, but automatically moves based on the placement of the trigger and the edge of the viewport.

The Tooltip component is purely informational and includes text-only content.

* **Do:** Use punctuation for more than one sentence.   
* **Don't:** Don't provide significant details or information in Tooltips, such as errors — Tooltips can be easily overlooked. 

* **Don't:**  Don't include interactive elements like links or buttons within a Tooltip. 

## Examples

### Basic usage

Apply a Tooltip to a component or native HTML element. When you hover over the component or element, the Tooltip displays additional information.

### Custom placement

The default placement of the Tooltip is `bottom`. Specify the placement by using an argument in your directive like `v-tooltip:top`. The `top` argument places the Tooltip on top of the reference element.

The Tooltip can appear in the following places:

* `bottom`, `bottom-start`, `bottom-end`  
* `top`, `top-start`, `top-end`  
* `right`, `right-start`, `right-end`  
* `left`, `left-start`, `left-end`

## Technical implementation

## Keyboard navigation

| Key | Function |
| :---- | :---- |
| <kbd>Esc</kbd> | Dismisses the Tooltip. |