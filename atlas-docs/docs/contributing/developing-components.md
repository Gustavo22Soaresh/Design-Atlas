---
outline: deep
---

# Developing components

::: warning Working in progress
We are current working on this page.
:::

<!--

## Local development

### Vite Sandbox

Running the Vite server for local development will spin up the component sandbox. Each component
should have a simple working demo in the sandbox for local development and testing.

To start the local dev server, run this command in the root of the Codex repository:

```bash
npm run dev
```

This will serve the sandbox page at `http://localhost:5173`, and automatically update it in the
browser as you make changes to the code (hot module reloading). If you need it to be served on a
different port, you can use `npm run dev --port=12345`.

To add a new component demo to the sandbox:

- In `packages/codex/src/demo`, add a new `.vue` file containing the new demo
- Import the new file into `packages/codex/src/demo/Sandbox.vue`, add it to the template, and add
  it to the `demoSections` array.

### VitePress docs site

Aside from Vite Sandbox, you can also run the VitePress docs site locally to write and test a full
suite of user-facing component demos. Visit the [component demos](./component-demos) section for
more information or run this command in the root of the Codex repository:


```bash
npm run doc:dev
```

## Component basics

The `@wikimedia/codex` package uses [Vue 3](https://v3.vuejs.org/guide/introduction.html) and
prefers the [Composition API](https://v3.vuejs.org/guide/composition-api-introduction.html) over the
Options API.

Codex is written in TypeScript: check the [Working with TypeScript](./typescript.md) section for
information about code conventions, solved problems, and potential pitfalls.

Patches related to components should include the following as applicable:

- **Documentation:** Each component should have a docblock describing what the component is and the
  basics of how it works. Props, slots, and events should be documented in the code.
- **Vite Sandbox demo:** Each component should have a simple demo in the
  [Vite Sandbox](./developing-components.md#vite-sandbox) for testing the basic functionality of
  the component locally and within MediaWiki.
- **Jest snapshots:** Include snapshots for all variations of props and slots.
- **Unit tests (not required for [WIP components](./developing-components.md#wip-components)):** Attempt to meet the established coverage
  threshold, which will be calculated and output in the command line interface when you run tests.
- **Demos (not required for WIP components):** Each component should have a demo page on the
  VitePress site that shows realistic examples of different variations and uses of the component.

### Conventions

- Export all components that are ready for public consumption in `src/lib.ts` to make them
available to library users.
- PascalCase multi-word component names are used per the [Vue.js Style Guide](https://vuejs.org/style-guide/).
Component names should be prefixed with "Cdx," e.g. CdxButton.
- Use consistent prop, slot, and event names across components. When adding a feature to a component, consult other components with similar features and follow existing patterns.
- Slot names should be all lowercase. Use `kebab-case` for slot names with multiple words. This is
necessary to ensure support for environments that use DOM templates, including MediaWiki.
- Boolean props always default to false to create a consistent mental model across components.

### Using this guide

- When adding a new component, start with a [WIP component](#wip-components).
- Follow our guide for [writing styles](#writing-styles).
- Ensure the component properly [inherits attributes](#inheriting-attributes).
- Learn how to support [bidirectional text](#bidirectional-text).
- Ensure text within components is [translatable](#translatable-strings).
- Review the list of composables for reusable logic, located in `packages/codex/src/composables`.
  The composables that are exported for use are documented in the
  [composables section](../composables/overview.md); otherwise refer to documentation in the
  composable files.

## WIP components

Until a component is ready for public consumption, it is considered a "work in progress" or "WIP"
component. WIP components are housed in a separate directory, `packages/codex/src/components-wip`,
and are included in `index.ts` in that same directory. WIP components are not included in
public dist files, nor will they appear on the docs site when viewing the documentation for a
specific Codex release. However, WIP components will appear on the docs site for the main branch,
and when serving the docs site locally.

### Adding a WIP component

To add a new WIP component:
- Add a new directory and `.vue` file to the WIP components directory, e.g.
  `packages/codex/src/components-wip/my-new-component/MyNewComponent.vue`
- Import this component into `packages/codex/src/components-wip/index.ts`

Before submitting a patch for the new component, add a [basic demo to the
sandbox](#vite-sandbox) and [snapshot tests](./testing-components.md#snapshot-tests).

When adding examples for the VitePress demo page in the `codex-docs` package, the component should
be imported from the `@wikimedia/codex` package as usual. This will not work in real code as long
as the component is still WIP, but the `codex-docs` package is set up to be able to access
WIP components this way.

### WIP to public component

Once the entire design specification has been implemented, the component has a full suite of
interactive demos, and the component has reached the unit test threshold, it is ready for public
use. To make this transition, submit a patch that:

- Moves the component directory from `components-wip` to `components`
- Exports the component in `lib.ts` instead of `components-wip/index.ts`
- Updates the paths used to import component, from `../../components/foo/Foo.vue` to
  `../foo/Foo.vue`.

Once this patch is merged, the component will be included in the `/dist` directory and will appear
on the docs site for the next release.

## Writing styles

Styles are written in [Less](https://lesscss.org/#) and are included at the end of the single-file
component in a `<style lang="less">` block. Codex design tokens are imported as Less variables from
the `@wikimedia/codex-design-tokens` package.

### Conventions

**Design tokens**
- Token usage is enforced via Stylelint. See [token definition and structure](../design-tokens/definition-and-structure.md) for a detailed overview.

**Selectors and structure**
- A light version of block-element-modifier or [BEM](https://getbem.com/) is used for class naming structure:
  - The root element (block) will have the class `.cdx-component-name`
  - A sub-element, such as a header, would have the class name `.cdx-component-name__header`
  - A variation of that header with a close button would have the class `.cdx-component-name__header--has-close-button`
  - The header's close button element would have the class `.cdx-component-name__header__close-button`.
  - Do not go deeper than 2 element levels in a class name; class names of further child
	elements can omit some of the elements for the sake of brevity.
- If a style or selector isn't self-explanatory, add a comment explaining it.
- Avoid HTML element selectors. The style rulesets should aim to be independent from specific
  element choices, which may change.
- Styles specific to a component's enabled or disabled state should be contained in a selector
  specific to that state. This structure allows us to avoid overriding enabled styles for the
  disabled state.
  - The pseudo-classes `&:enabled` and `&:disabled` can be used when available, otherwise
    `&--enabled` and `&--disabled` classes should be added (e.g. `.cdx-menu-item--enabled`).
  - The stylelint `no-descending-specificity` rule can be disabled to maintain this structure (see
    [styles example](#examples) below).
- Use `--has-` and `--is-` prefixes for modifiers that are not tied to a specific state, e.g.
  `--has-thumbnail` or `--is-link`.
- Add specificity when styling a sub-component to avoid override styles. For example, an Icon
	component that is inside a Label component would use the selector `.cdx-label__icon.cdx-icon`. In Less:
	```less
	.cdx-label {
		&__icon.cdx-icon {
			// ...rules...
		}
	}
	```

**Linting**
- Codex uses [stylelint-order](https://github.com/hudochenkov/stylelint-order/) to order CSS/Less
  rules.
- Stylelint requires reliance on specific CSS properties over shorthands for `background`, `font`,
  `animation` and `transition`.
- When there is a legitimate reason to disable Stylelint, do it for a single line using a CSS style
 comment `/* stylelint-disable-next-line rule-name */`.

**Less mixin parameters**
- In order to distinguish them from CSS variables and Codex tokens, Less mixin function
  parameters should be prefixed with `param` (e.g. `@param-size`).

### Examples
Below are some sample styles for a component to demonstrate these conventions:

```less
<style lang="less">
@import ( reference ) '@wikimedia/codex-design-tokens/theme-wikimedia-ui.less';
@import ( reference ) '../../themes/mixins/binary-input.less';

.cdx-radio {
	// Common binary input styles.
	.cdx-mixin-binary-input();

	// Custom-styled radio that's visible to the user.
	&__icon {
		border-radius: @border-radius-circle;

		// …
	}

	// HTML `<input type="radio">`.
	// Based on the HTML attributes of the radio input, we can change the style
	// of the adjacent `span`, which will look like a custom-styled radio.
	&__input {
		&:enabled {
			& + .cdx-radio__icon {
				border-color: @border-color-input-binary;
			}

			// Note: there is no focus behavior for the input in its unchecked
			// state because you can't focus on it without selecting it.
			&:hover + .cdx-radio__icon {
				border-color: @border-color-input-binary--hover;
			}

			// …
		}

		/* stylelint-disable no-descending-specificity */
		&:disabled {
			// Only disabled radios should have a gray label.
			& ~ .cdx-radio__label {
				color: @color-disabled;
			}

			// …
		}
		/* stylelint-enable no-descending-specificity */
}
</style>
```

## Inheriting attributes

By default, components will place any [attributes bound to them](https://vuejs.org/guide/components/attrs.html#fallthrough-attributes)
(e.g. `class`, `type`, or `aria-label`) on the root element of the component. Sometimes, this is not
desired: for example, for a component that contains an `<input>` element, it's helpful to bind most
of the attributes to that `<input>` element rather than the root element.

Some attributes, however, should always be bound to the root element to provide expected
results for library users. This includes `class` and `style` attributes.

To achieve the desired behavior in such components, use the `useSplitAttributes` composable. It
returns the following properties:
1. `rootClasses`: all CSS classes that should be bound to the root element, including those set via
the `class` attribute on the component and those that are internal to the component, like dynamic
and conditional classes.
2. `rootStyle`: the `style` attribute bound to the component, should one be provided.
2. `otherAttrs`: all other attributes, which can be bound to the desired child element.

Below is sample usage from the TextInput component:

```vue
<template>
	<!-- Add rootClasses and rootStyle to the root element. 
	<div
		class="cdx-text-input"
		:class="rootClasses"
		:style="rootStyle"
	>
		<!-- Bind otherAttrs to the input.
		<input
			class="cdx-text-input__input"
			v-bind="otherAttrs"
		>
	</div>
</template>

<script>
// Import the composable.
import useSplitAttributes from '../../composables/useSplitAttributes';

export default defineComponent( {
	name: 'CdxTextInput',
	// Set inheritAttrs to false.
	inheritAttrs: false,
	setup( props, context ) {
		// Define dynamic classes internal to the component,
		// in Vue's object syntax format.
		const internalClasses = computed( () => {
			return {
				'cdx-text-input--has-start-icon': !!props.startIcon,
				'cdx-text-input--has-end-icon': !!props.endIcon || props.clearable,
				'cdx-text-input--clearable': isClearable.value
			};
		} );

		// Get helpers from the composable.
		const {
			rootClasses,
			rootStyle,
			otherAttrs
		} = useSplitAttributes( context.attrs, internalClasses );

		return {
			rootClasses,
			rootStyle,
			otherAttrs
		}
	}
} );
</script>
```

## Bidirectional text
Codex has limited support for [bidirectional text](https://en.wikipedia.org/wiki/Bidirectional_text).
It supports pages that are entirely in a left-to-right (LTR) script, or pages that are entirely
in a right-to-left (RTL) script. It does not support pages with a mix of LTR and RTL
content, or pages whose directionality changes at runtime, except in some special cases.
At the time of this writing, it's virtually impossible to support those use cases without the
`:dir()` CSS pseudo-class, which is
[not yet supported by most browsers](https://caniuse.com/css-dir-pseudo).

There are tools (like postcss-rtlcss; read more below) that generate bidirectional CSS using
attribute selectors like `[dir='ltr']`, but this technique is fragile. It breaks in confusing and
ugly ways on pages that don't have a `dir` attribute set, and on pages where a `dir="ltr"` element
is nested inside a `dir="rtl"` element or vice versa.

Because of these limitations, Codex provides direction-specific stylesheets for use in MediaWiki.
The `codex.style.css` file contains LTR styles, and `codex.style-rtl.css` contains RTL styles.
The CSS files for individual components (used by MediaWiki's
[Codex code-splitting feature](https://www.mediawiki.org/wiki/Codex#Using_a_limited_subset_of_components))
are similarly broken down into direction-specific variants (with an `-rtl` suffix). These files are
described below.

::: tip Experimental Bidirectional Stylesheet
As of version `1.12.0`, the Codex package also includes a `codex.style-bidi.css` file. This is
an **experimental** stylesheet that supports client-side direction flipping via `[dir]` selectors
as described above. This file is not intended for usage in MediaWiki, but may be useful in
single-page applications which wish to support client-side language and direction switching.
The caveats above still apply.
:::

### Flipping styles
Styles in Codex are written for left-to-right (LTR) environments. Codex uses
[RTLCSS](https://rtlcss.com/) to generate flipped versions of these styles for right-to-left (RTL)
environments. For example, a rule like `.foo { padding-left: 4px; }` will be changed to
`.foo { padding-right: 4px; }` in RTL. In the build, the LTR styles are placed in `codex.style.css`
and the RTL styles in`codex.style-rtl.css`.

In most cases, this automatic transformation should produce the correct result, but you should
always test style changes in both LTR and RTL. Both the sandbox (`npm run dev`) and the component
demos (`npm run doc:dev`) have direction switchers that allow you to switch between LTR and RTL
on the fly.

In some cases, the automatic flipping transformation doesn't produce the correct result. Override
directives can be used to address this. To prevent a rule from being flipped, put `/* rtl:ignore */`
on the line above it. To set a different value for a property in RTL, put the RTL value in
a comment like `/* rtl:4px */`. These two directives are the most important ones, but others exist;
see the postcss-rtlcss documentation on [control directives](https://rtlcss.com/learn/usage-guide/control-directives/)
and [value directives](https://rtlcss.com/learn/usage-guide/value-directives/)
for more information.

Below is an example that demonstrates these directives:
```less
.foo {
	// This rule gets flipped to padding-right: 12px; in RTL.
	padding-left: 12px;

	// This rule isn't flipped. It uses float: left; in both LTR and RTL.
	/* rtl:ignore */
	float: left;


}

.bar {
	// This rule uses -100% (`@size-full`) in RTL, because that value is explicitly specified.
	transform: translateX( 0 ) /* rtl:translateX( calc( -1 * @size-full ) ) */;

	// This rule is NOT flipped to margin-right, because an explicit RTL value is specified
	// In RTL, this rule becomes margin-left: 30px; (NOT margin-right: 30px;)
	margin-left: 12px /* rtl:30px */;
}
```

### Component behavior
Some components need to adjust their behavior depending on the text direction. For example,
components that listen for the left and right arrow keys being pressed may need to react to those
key presses differently depending on the text direction.

To achieve this, components should use the
[`useComputedDirection` composable](../composables/demos/use-computed-direction.md), which detects
the direction of the surrounding context of the component at mount time. This works even on pages
with mixed or nested directionality; however it does not detect changes in directionality that
happen after the component is mounted.

Below is an example that demonstrates the use of the `useComputedDirection` composable function:
```vue
<template>
	<!-- Set ref="rootElement" on the root element of your component
	<div
		ref="rootElement"
		class="cdx-my-component"
		@keydown.left.right="onKeydown"
	>
		<!-- ...component template goes here...
	</div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import useComputedDirection from '../../composables/useComputedDirection';
// ...other imports...

export default defineComponent( {
	setup() {
		const rootElement = ref(); // If using TypeScript, use ref<HTMLDivElement>();
		const computedDir = useComputedDirection( rootElement );

		function onKeydown( e ) {
			if ( e.key === 'ArrowLeft' ) {
				// Left means "next" in RTL, "previous" in LTR
				navigate( computedDir.value === 'rtl' ? 'next' : 'previous' );
			} else if ( e.key === 'ArrowRight' ) {
				navigate( computedDir.value === 'ltr' ? 'previous' : 'next' );
			}
		}

		function navigate( prevOrNext ) {
			// ...
		}

		return {
			rootElement,
			onKeydown
		};
	}
} );
</script>
```

The [Icon component](../components/demos/icon.md) also uses this composable to detect the text direction,
and allows the detected direction to be overridden through the `dir` prop. For more information about
how bidirectionality is handled for icons in particular, see
[the icon documentation](../icons/overview.md#right-to-left-rtl-and-language-support).

## Translatable strings

Sometimes, components contain text that is always or usually the same across features. For
example:
- In a Table with row selection, the "select all" checkbox always has the visually-hidden label
  "Select all rows".
- The "search" button in a SearchInput usually has the label "Search".

These are different from feature-specific strings, like a Table's caption or the label of a normal
Button.

For strings that are always or usually the same across features, we provide two composables
that do the following:
1. Take in a message key.
1. Look for a provided internationalization (i18n) function (like [`mw.msg()` in MediaWiki](https://doc.wikimedia.org/mediawiki-core/master/js/mw.html#.msg)).
1. If one is provided, get the translated string for that message key. If not, use an English fallback.
1. Return the value, or if a custom value was provided for strings that can be customized, use that.

In MediaWiki core, we provide `mw.msg()` as the i18n function, along with translated strings for all
relevant messages, so users of Codex inside MediaWiki will get translated text for these strings by
default.

### Adding a new message

Every message that is used in a Codex component should also be defined in MediaWiki core. To add a
new message, in MediaWiki core, add the message to both the `en.json` and `qqq.json` files in
`languages/i18n/codex`. Ensure the message key is prefixed with `cdx-` and the component name.

In the Codex repository, add the new message key to the `I18nMessageKeys` constant,
which maintains a list of all message keys used in Codex.

### Using the message

Note that both composables return a computed ref containing the translated string.

#### Static strings

For strings that should always be the same and should never be customizable by developer users, use the
`useI18n` composable. These strings are typically special text for assistive technology that help
users understand how to use the component—we want such strings to be consistent across products.

`useI18n` has 3 arguments:

| Argument | Type | Description |
| --- | --- | --- |
| `messageKey` | `I18nMessageKey` | The message's machine name |
| `defaultValue` | `I18nMessageValue<P>` | The English fallback (as a string, or a function if there are parameters) |
| `params` | `MaybeRef<P>[]` | An array of parameters for the message, if needed |

The following example comes from the Table component file; check the whole file for more context.

```ts
import useI18n from '../../composables/useI18n';

const translatedSelectAllLabel = useI18n(
	// Message key.
	'cdx-table-select-all-label',
	// English fallback.
	'Select all rows'
);
```

#### Customizable strings

For strings that are usually the same but could be customized in some cases, use the
`useI18nWithOverride` composable, which has 4 arguments:

| Argument | Type | Description |
| --- | --- | --- |
| `override` | `Ref<string>` | The component prop used as an override |
| `messageKey` | `I18nMessageKey` | The message's machine name |
| `defaultValue` | `I18nMessageValue<P>` | The English fallback (as a string, or a function if there are parameters) |
| `params` | `MaybeRef<P>[]` | An array of parameters for the message, if needed |

Additionally, add a prop that can be used to provide a custom value for the string if desired.

The following example comes from the SearchInput component file; check the whole file for more
context. SearchInput has a prop called `buttonLabel` which can be used to provide custom text for
the "Search" button. If this prop is set, its value is used directly, overriding the translatable
message.

```ts
import useI18nWithOverride from '../../composables/useI18nWithOverride';

const translatedSearchButtonLabel = useI18nWithOverride(
	// The prop that is used for customization of the string.
	toRef( props, 'buttonLabel' ),
	// Message key.
	'cdx-search-input-search-button-label',
	// English fallback.
	'Search'
);
```

#### With parameters

Both composables can take in parameters for messages with dynamic parts. For example, for sortable
Tables, some text is appended to the visually-hidden caption explaining that the columns are
sortable. The following example comes from the Table component file; check the whole file for more
context.

```ts
import useI18n from '../../composables/useI18n';

const translatedSortCaption = useI18n(
	// Message key.
	'cdx-table-sort-caption',
	// English fallback, provided as a function to include the parameter.
	( caption ) => `${ caption }, column headers with buttons are sortable.`,
	// Array of parameters (in this case, just one: the caption prop).
	[ toRef( props, 'caption' ) ]
);
```

Note that params will typically be refs to support reactivity, but they can be static values as
well.

-->