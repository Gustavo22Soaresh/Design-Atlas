# Pagination

Pagination is a navigation control component used to split large amounts of content into smaller, more manageable pages. It allows users to move between pages clearly and accessibly.

*![][image1]*

## Overview

### When to use Pagination

Use the Pagination component when content is divided across multiple pages and a simple, consistent way to navigate between them is needed.

It is ideal for long lists, search results, data tables, and other situations where infinite scroll is not feasible or desired.

**Avoid using it:**

* When content fits on a single screen.  
* If infinite scroll offers a more natural or expected experience.

## About Pagination

The Pagination component is typically composed of the following elements:

#### Page Button

Represents a specific page that users can access.

* **Do:** Clearly highlight the current page with a visual distinction.  
* **Don't:** Don’t hide important page numbers without indicating there are more pages.

#### Navigation Buttons (Previous / Next)

Allow users to move to the previous or next page in the sequence.

* **Do:** Use arrows and/or text to enhance clarity and accessibility.  
* **Don't:** Avoid disabling navigation buttons without providing clear visual feedback

#### Jump Button (Ellipsis ...)

Used when there are many pages; it indicates there are intermediate pages not shown.

* **Do:** Use ellipsis to keep the interface compact for large sets of pages.  
* **Don't:** Don’t use ellipsis without making it clear that content is being hidden.

## Examples

*Detail the various properties, variants, and behaviors of the component by dedicating an example  to each component’s type or property. You can include as many Do’s and Don’ts recommendations as needed to outline best practices for using the component effectively.*

***Note:** Developers will create a demo for each example of the component.*

### Simple pagination with 5 pages

Displays page numbers with the current page visually highlighted. Includes next and previous navigation arrows.

* **Do:** Emphasize the current page with strong visual contrast.  
* **Don't:** Don’t remove navigation arrows when the number of pages is small.

### Long pagination with ellipsis

For more than 10 pages, shows beginning, end, and nearby pages, using ellipsis to indicate skipped page ranges.

* **Do:** Use ellipsis to reduce visual clutter.  
* **Don't:** Don’t hide all page numbers—maintain navigational context.

## Technical implementation

## Keyboard navigation

| Key | Function |
| :---- | :---- |
| Tab | Moves focus between pagination buttons |
| Enter | Activates the focused page button |
| Left arrow / Right arrow | Navigates to the previous or next page (when focused) |
| Home / End | Jumps to the first or last page (if applicable) |

[image1]: <data:image/png;base64,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>