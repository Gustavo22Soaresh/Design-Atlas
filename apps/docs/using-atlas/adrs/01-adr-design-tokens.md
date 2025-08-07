# ADR-01 - Design Tokens

**Date:** 31-05-2025  
**Status:** accepted  

## Context  

To ensure visual consistency across multiple interfaces and components, especially in a shared design system like Atlas, it is essential to adopt a systematic design approach.  

Design Tokens allow representing design values (such as colors, spacing, font sizes, borders, etc.) in a structured way, technology-agnostic, and easily integrable across multiple platforms (web, mobile, documentation, etc.).  

Additionally, tokens make design scalable, sustainable, and easier to maintain, promoting accessibility, responsiveness, and internationalization consistently.  

## Considered actions 

* **Do not use design tokens**: Keep values directly in component code, which leads to inconsistency and maintenance difficulties.  

* **Use isolated CSS variables**: Good practice, but does not guarantee cross-platform standardization or semantic structuring.  

* **Use Design Tokens with structured JSON format**: Cross-platform solution, integrable with tools like Style Dictionary, Figma Tokens, Token Studio, etc.  

## **Decision**  

We will adopt the use of **Design Tokens** defined in a structured JSON format as the single source of truth for design values.  

Relevant links:  

* [W3C Design Tokens Community Group](https://design-tokens.github.io/community-group/)  
* [Style Dictionary](https://amzn.github.io/style-dictionary/)  

## Consequences 

* All design values will be centralized and standardized.  
* Tokens can be used in multiple contexts: CSS, Svelte, Figma, documentation, and accessibility testing.  
* Facilitates theme switching and visual variations (e.g., dark mode, regional themes).  
* It is necessary to configure and maintain a build pipeline to distribute tokens in different formats (.css, .js, .scss, etc.).  
