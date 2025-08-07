# **ADR-04: Demo tool**

**Date:** 14-06-2025
**Status:** Accepted

## Context

We are developing Atlas, focusing on reusable components in **Svelte**, accessible documentation, and realistic demos for designers and developers.

The component demo tool is essential for:

* Interactive visualization and documentation of components
* Presentation of variations, states, and design tokens
* Generation of reusable example code
* Accessibility and visual regression testing
* Long-term collaborative maintenance

The **Codex** project, used by the Wikimedia Foundation and based on Vue, uses **VitePress** for this purpose, in contrast with the more common use of **Storybook** in design system projects.

We consider it necessary to evaluate which of these tools best fits our context (based on **Svelte**, focused on **accessibility**, **public documentation**, and **ease of maintenance**).

### **Critical requirements for the demo tool**

* Realistic demos with reusable code
* Visualization of all components, variants, and icons
* Automatic generation of component usage documentation
* Design token visualization
* Hot Module Replacement (HMR) for development
* Open source with an active community
* Lightweight, with few dependencies
* Support for accessibility, themes, and visual regression plugins
* Visual and responsive testing
* Simple to configure and maintain
* Visual aligned with the Design Style Guide

## **Considered actions**

### 1. **Use Storybook**

**Advantages**

* Widely used and well-documented tool
* Mature ecosystem with various plugins (a11y, viewport, visual testing, theming)
* Integration with Chromatic for automated visual testing
* De facto standard for design systems in various organizations

**Disadvantages**

* Heavy, with many dependencies
* Primary focus on **React**; **Svelte** support is still unstable, partial, and buggy
* Documentation and examples usually do not cover Vue or Svelte well
* "Stories" format is artificial and not very useful as a real example for end users
* High configuration curve, with its own DSL and multiple layers of abstraction

### 2. **Use VitePress (as in the Codex project)**

**Advantages**

* Lightweight, fast, with few dependencies
* Demos are real components (requires plugins for Svelte), used practically and reusable
* Direct integration with Vite
* Markdown + component = simple and accessible documentation
* Ideal for design systems that prioritize clarity, simplicity, and flexibility
* Easy to maintain long term
* Customizable visual to align with the Style Guide

**Disadvantages**

* Tool based on **Vue 3**, which requires adaptation to work with **Svelte**
* Integration with Svelte is not native, requiring *workarounds*, custom loaders, or alternative solutions
* New and experimental, with limited support for features specific to design systems
* Not as feature-rich natively as Storybook
* It will be necessary to develop extensions for theme control, custom views, and token/variable navigation

## **Decision**

We decided to **adopt VitePress as the main documentation and component demo tool** for the Foundation Design System. This will allow us to maintain a simple, accessible, and realistic workflow, centered on the transparent use of Svelte components for developers and designers.

Missing functionalities, such as filters for variants, responsiveness, and visual regression, will be implemented incrementally as needed. The priority is to ensure that the design system is useful, clear, and sustainable for the OSM community.

## **Consequences**

* The documentation will be based on **Markdown + Svelte** over a **VitePress** structure, originally built for Vue
* It will be necessary to configure **support for Svelte within VitePress**, via `vite.config.js`, adapters, and possible custom plugins
* Some functionalities that would be automatic in Storybook will need to be implemented manually (visualizations, tokens, themes)
* The use of VitePress may make external contributions more difficult if the Svelte configuration is not clear or well documented
* On the other hand, we gain more control over the structure, layout, and style of the final documentation
* The system remains lightweight, fast, and aligned with the Design System stack (Vite + Svelte), even with the extra integration effort
