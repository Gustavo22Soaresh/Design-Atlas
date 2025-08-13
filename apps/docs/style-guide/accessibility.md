# Accesibility 

Accessibility is a fundamental pillar of the Atlas Design System. Our goal is to ensure OpenStreetMap remains **a map for everyone**—regardless of abilities, language, devices, or technical expertise. This page outlines our accessibility principles and how Atlas helps build digital interfaces that are inclusive and usable for a diverse global community.  

## Why Accessibility Matters 

Accessibility ensures people with disabilities can perceive, navigate, and contribute to [OSM](http://osm.org). Beyond compliance, it improves usability for all. Our approach follows the **Web Content Accessibility Guidelines (WCAG) 2.0**, prioritizing **Perceivable, Operable, Understandable, and Robust (POUR)** design.  

We aim for **Level AA compliance**, balancing broad usability with sustainable implementation. Some **Level AAA** criteria conflict with or exceed our nonprofit scope, while specialized needs (e.g., cognitive disabilities) may be better served by dedicated tools.  

### Our Focus Areas  

We prioritize:  
- **Visual impairments** (e.g., contrast, screen reader compatibility)  
- **Motor impairments** (e.g., keyboard navigation, touch targets)  

Auditory and speech needs are addressed at the content level, while cognitive accessibility benefits from clear language and structure.  


## Accessibility in Practice  

### 1. Color & Contrast  
- **Never rely on color alone** to convey information.  
- **Minimum contrast ratios**:  
  - **4.5:1** for standard text  
  - **3:1** for large text (18pt+/bold 14pt+)  

### 2. Typography  
- **Legible fonts** with adjustable sizing (using `em`/`rem` units).  
- **Clear spacing** and scalable text to support zooming.  

### 3. Interaction  
- **Keyboard-compatible** components with visible focus states.  
- **Touch-friendly targets** (minimum 48×48px).  

### 4. Icons & Images  
- **Text alternatives** (`alt` attributes, SVG titles) for non-decorative elements.  
- **Screen-reader-friendly** labels for icon-only buttons.  

### 5. Semantic Markup  
- **ARIA-compliant HTML** for assistive technology.  
- **Machine-readable** structure for SEO and voice interfaces.  