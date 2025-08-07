# Using links and buttons
Here is the English translation of your text with terminology aligned to design system documentation standards:


## Using Links and Buttons

A comprehensive guide for when to use links, buttons, or a combination of both within the OSM Atlas interface.


### Links vs. Buttons

Use a **Link** to navigate to another page, section, or resource, and use a **Button** to trigger a function (such as submitting a form or opening a panel).
Making a clear distinction between links and buttons is essential to help users understand the expected interaction—especially those using a keyboard or screen reader.

* A **button** should not be styled to look like a **link**.
* A **link** should not be styled to look like a **button**.

**Avoid** styling an `<a>` tag as a button. Instead, use the **Button** component from the design system.
**Avoid** styling a `<button>` tag as a link. Use the **Link** component from the design system.

**Exception**: In cases where a **link** needs to appear visually as a **button** for emphasis (such as actions like “Donate” or “Register”), use a **Link** styled as a tertiary button, while keeping the correct semantic structure.

## Accessibility Note

* **Links** can be activated using the **Enter** or **Return** key only.
* **Buttons** can be activated using **Enter**, **Return**, or the **Space** key.


## Groups of Links and Buttons

Links and buttons can coexist in the same group, as long as they don’t cause visual confusion.
Avoid placing **quiet tertiary buttons** next to links, as they may appear too similar.


## Spacing

Use justified spacing or `spacing-16` (equivalent to 16px) as the default spacing between links and buttons in both horizontal and vertical groups.


## Links

Use **Links** to direct users to other pages or sections of the interface.
Avoid using links to trigger actions (such as “hide” or “edit”) unless the action results in navigation to a different page.

**Link styling in Atlas**:

* Links are **not underlined by default**, but become underlined on hover or active states.
* **External links** (that open in a new tab) must include an **external link icon** next to the text.
* **Links must contain text**—never use icons alone.
* The **font size** of a link should match the surrounding content.
* Use **regular font weight** by default. Bold or italic may be used where appropriate, depending on surrounding context.
