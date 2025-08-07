# Designing components

## Component architecture

Before designing, it's important to identify the building blocks of the component. Ask yourself: Are they unique elements or existing components?

There are three possible scenarios:
1. **Standalone component**: Built from styled elements, but functions as a single unit (e.g. Button).
2. **Composite of existing components**: Combines components that already exist in Atlas (e.g. Combobox is built with a combination of TextInput + Button).
3. **Composite with non-existing components**: Includes components that don’t exist yet in Atlas. In this case, each sub-component must includes its own task and follow its own design and implementation process.

## Visual style and interaction

All Atlas components should follow the visual guidelines defined in the [style guide](../style-guide/overview.html). Design tokens can help support the visual definition of components, as they represent pre-made systematic decisions. If you need to use a token that is not documented yet, or you need to apply it in a different context of use, please read the [Contributing tokens](./contributing-tokens.md) guidelines.

You can also use [Material Symbols](https://fonts.google.com/icons).

::: info
You will need to [enable the Atlas design library](../using-atlas/designing.md#enable-the-library) to reuse the existing components and tokens.
:::

In order to provide a consistent experience, ensure the component's behavior and states align with Atlas design principles.

When defining the interactive behavior of new components, make sure to include:

- **Internationalization**: to support different languages and reading directions. Refer to the [Bidirectionality](../style-guide/bidirectionality.md) guidelines for more details.
- **Responsiveness**: make sure to specify the appropriate behavior for the different [breakpoints](../design-tokens/breakpoint.md) and devices.
- **Accessibility**: follow the best practices established for each component and specify the keyboard navigation when the component includes interactive states. Read more about [accessibility principles and resources](../style-guide/accessibility.md).

## Specification sheet

Once the component’s visual style and behavior are defined, create a specification sheet to document its functionality. This will serve as a guide during implementation. You can use this [component specification sheet template](https://www.figma.com/file/6hNSvvL4CoyfemXECihJD5/Component-spec-sheet-(exploration-file-template)?node-id=501%3A22874) to get started.

Below is a list of elements which can help when specifying the component:

1. **Guides**: List all tokens and sub-components used to build the component.
2. **When to use**: Explain when and when not to use the component.
3. **Anatomy**: Define the component’s anatomy and optional elements.
4. **Limitations**: Define minimum and maximum constraints like element count or character limits.
5. **Bidirectionality**: Show how the component adapts to LTR and RTL reading directions.
6. **Properties or variants** (if needed): Detail the component’s variants and properties.
7. **Interaction states**: If the component includes interaction, document all necessary interactive states.
8. **Best practices**: Offer guidance on optimal usage for each component, including both do's and dont's with practical examples.
9. **Keyboard navigation** (if needed): Detail the keys for interacting with the component via keyboard. This section applies only to components with interactive states.

::: info
These elements are not all required, as every component is different. Use your own discretion as to what is needed and what will be most beneficial during implementation.
:::

Once the design proposal and specification sheet are complete, share them in the Phabricator task to gather feedback. Iterate as needed, and consider testing the component in realistic scenarios.

## Prepare for implementation

Once the component’s design proposal has been discussed, iterated on and finished, the designer will share the link to the final version in the Phabricator task to prepare it for implementation.

The following actions are required by the designer:

1. Link the design spec in the task's description.
2. Post a comment explaining that the task is ready to be implemented.
3. Move the task to the next relevant column in the board.