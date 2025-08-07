# ADR-02 - Adoption of Svelte as Frontend Framework 

**Date:** 31-05-2025  
**Status:** accepted  

## Context  

The project requires choosing a modern frontend framework that is efficient and provides good support for accessibility, performance, and internationalization. The goal is to deliver an excellent user experience based on principles of usability, accessibility, and consistent design.  
The team already has experience with reactive frameworks like React and Vue, but there is interest in exploring leaner alternatives with fewer dependency overheads.  

Svelte is a framework that compiles code into highly optimized JavaScript at build time, eliminating browser runtime and offering better initial performance. Its simplicity may also facilitate the learning curve for contributors.  

## Considered Actions  

* **Use React:** Very popular, rich ecosystem, but with heavy runtime and verbose code for simple cases.  
* **Use Vue:** Simple and accessible, but still requires browser runtime and has less integration with the team's current tools.  
* **Use Svelte:** Compiles to optimized code, simpler to start with, excellent performance, accessible support, and growing community adoption.  
* **Do not adopt a framework and use vanilla JavaScript with Web Components:** Flexible but requires more time and attention to consistency, accessibility, and maintenance.  

## Decision  

We will adopt **Svelte** as the project's primary frontend framework.  

Relevant links:  
* [Svelte – Official Site](https://svelte.dev/)  
* Technical comparison between frameworks (2025)  

## Consequences  

* Better performance and smaller final bundle for users.  
* Reduced learning curve for new developers.  
* Need to configure Svelte-specific tools in the build pipeline (e.g., Vite, Rollup).  
* Potentially fewer ready-to-use libraries compared to React and Vue ecosystems.