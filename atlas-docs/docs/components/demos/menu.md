# Menu

A Menu displays a list of available options, suggestions, or actions. It expands from a control (e.g. a button, selector or input) after it is activated by a user.

## Overview

### When to use Menu

Use the Menu component when you need to display a list of selectable options in a temporary overlay, typically anchored to a trigger such as a button or input. It is commonly used inside other components like dropdowns, select inputs, or action buttons.

**Use it when:**

* You want to show grouped or contextual options triggered by an interaction.  
* You need keyboard-accessible and visually lightweight overlays.

**Avoid using it:**

* When you need persistent navigation elements (use a Navigation Bar or Tabs).  
* For complex or multi-step interactions (use a Dialog or Popover instead)

### About Menu

Define the component's anatomy by listing all elements or subcomponents that make it up. Provide a definition for each component’s element and include as many Do’s and Don’ts as needed to outline best practices for using the component effectively.

#### Menu Item

An actionable element inside the Menu. It can be a link, button, or option.

* **Do:** Keep Menu Items short, clear, and interactive.  
* **Don't:** Avoid placing non-interactive content here.

#### Menu Divider (optional)

Visually separates groups of Menu Items for better organization.

* **Do:** Use it to break long menus into logical sections.  
* **Don't:** Don’t overuse; only include if grouping adds clarity.

## Examples

### Basic usage


# Technical implementation

## Keyboard navigation

| Key | Function |
| :---- | :---- |
| <kbd>Tab</kbd> | Moves focus between trigger and next focusable elements |
| <kbd>Enter</kbd> / <kbd>Space</kbd> | Opens the Menu if the trigger is focused  |
| <kbd>Arrow down</kbd> / <kbd>Arrow up</kbd> | Navigates between Menu Items |
| <kbd>Esc</kbd> | Closes the Menu |
| <kbd>Enter</kbd> | Selects the focused Menu Item |