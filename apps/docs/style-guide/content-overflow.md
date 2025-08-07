# Content Overflow

In Atlas, managing **content overflow** is essential to ensure clear, accessible, and responsive interfaces across different devices, screen resolutions, and global usage contexts. This guide outlines best practices for handling excessive textual content or UI elements within components.

### Types of Content Overflow

Overflow occurs when the content exceeds the allocated space within a component. The most common cases include:

* **Text overflow:** When the text exceeds the available width or height, such as long labels inside buttons.

* **Element overflow:** When multiple elements cannot fit within a visible container, requiring scrolling to view all content.

## Strategies for Handling Overflow

To address overflow issues, Atlas recommends the following approaches:

* **Wrapping:** Allow content to span multiple lines.

* **Truncation with ellipsis (`...`):** Cut off excess text and indicate it with an ellipsis.

* **Fade:** Use gradients to indicate additional content that is scrollable.

## Wrapping

Allowing text to break onto multiple lines is the default and preferred solution, especially for components that can grow vertically.

**Do**

* The component can expand vertically without disrupting interface consistency.

**Don't**

* The component requires uniform height across multiple instances, such as in lists or card collections.


## Truncation with Ellipsis

Ellipsis truncation is useful when height or alignment needs to be preserved between elements.

**Do**

* The component has a fixed height or must align with other elements.
* Visual consistency is important in groups of chips, buttons, or lists.
* Tooltips are enabled to show the full text on hover or focus (keyboard-accessible).

**Don't**

* Truncation is unnecessary to maintain element uniformity.


## Optional Line-Limited Truncation

In components like **Cards** or **Menus**, you can limit the number of visible lines and truncate the rest with an ellipsis. In these cases, tooltips are not required, as the intent is to control the visual height of the description rather than to hide essential information.



## Bidirectionality (LTR and RTL)

Ellipsis truncation should follow the reading direction:

* In **LTR** languages (such as English or Portuguese), ellipses appear on the **right** side of the text.
* In **RTL** languages (such as Arabic or Hebrew), ellipses appear on the **left**.

Refer to the [Bidirectionality guidelines](bidirectionality.md) for more details on internationalization support.

## Fade

Fade effects serve as a visual indicator that content is scrollable within containers.

**Do**

* You need to show that a group of elements (like a list or carousel) can be scrolled.

**Don't:**

* You need to truncate text. Use ellipsis for that purpose instead of fade.