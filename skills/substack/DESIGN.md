---
version: alpha
name: Substack
description: This design system presents a clean, content-focused experience reminiscent of a curated editorial platform, prioritizing readability and direct interaction. A single, vibrant orange accent color (#FF6719) cuts through a palette of cool grays, drawing immediate attention to calls to action and active states. Softly rounded corners (8px and 12px) for cards and inputs, contrasting with the nearly pill-shaped interactive elements (9999px), create a subtle tension between structure and approachability. The use of system fonts with custom display typography lends a familiar yet distinct voice, reinforcing its role as a platform for individual expression.
colors:
  orange-ember: "#FF6719"
  midnight-graphite: "#363737"
  anchor-gray: "#777777"
  ui-white: "#FFFFFF"
  silver-mist: "#EEEEEE"
  dark-overlay: "#232525"
  cool-stone: "#C8C8C8"
  light-steel: "#B6B6B6"
  ghost-shadow: "#E6E6E6"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.54
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.4
  subheading:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.2
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
  display:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.24
spacing:
  cardRadius: 8px
  buttonRadius: 9999px
  elementGap: 4-12px
  sectionGap: 24-32px
components:
  log-in-or-sign-up-card:
    role: 
  up-next-recommendations-card:
    role: 
  feed-post-card-with-engagement-actions:
    role: 
  pill-ghost-button:
    role: Secondary action, subtle navigation items
  rounded-ghost-button:
    role: Tertiary actions, filters, tags
  rounded-accent-button:
    role: Tertiary actions, specific calls to action that need a brand highlight but not full prominence
  solid-primary-button:
    role: Primary calls to action (CTA), e.g., 'Get started', 'Create'
  navigation-link-button:
    role: Main navigation items in the sidebar
  search-input-field:
    role: Global or section-specific search functionality
  card-container:
    role: Grouping related content, e.g., 'Log in' module, 'Up next' recommendations
  media-content-card:
    role: Displaying articles, videos, or other specific content items in a feed
---

## Overview

**North Star:** Warm editorial gateway. Like a clean, well-organized newsstand where one striking orange magazine cover catches your eye amidst a collection of white and gray.

This design system presents a clean, content-focused experience reminiscent of a curated editorial platform, prioritizing readability and direct interaction. A single, vibrant orange accent color (#FF6719) cuts through a palette of cool grays, drawing immediate attention to calls to action and active states. Softly rounded corners (8px and 12px) for cards and inputs, contrasting with the nearly pill-shaped interactive elements (9999px), create a subtle tension between structure and approachability. The use of system fonts with custom display typography lends a familiar yet distinct voice, reinforcing its role as a platform for individual expression.

### Do's

- Always use Orange Ember (#FF6719) for primary calls to action and active states to guide user focus.
- Apply 9999px border-radius for small, interactive pill-shaped elements like 'Subscribe' or 'Like' buttons.
- Use 8px border-radius for cards and larger interactive elements (like main CTA buttons) to maintain a soft but structured appearance.
- Prefer Midnight Graphite (#363737) for all primary text content (headings, body) to ensure excellent readability against white backgrounds.
- Utilize the `system-ui` font family for general UI labels and body text, keeping weights between 400 and 500 for optimal legibility.
- Employ Cahuenga (500 weight, 24px-32px) for page and section titles to express the brand's unique editorial voice.
- Maintain element spacing using a 4px base unit, with `elementGap` values like 4px, 8px, 12px, depending on proximity needs.

### Don'ts

- Avoid introducing additional saturated colors; maintain Orange Ember as the sole vibrant accent.
- Do not use sharp 0px corners, as the system consistently uses 8px, 12px, or 9999px radii.
- Do not deviate from the specified font families; `system-ui` for body, `Cahuenga` for headlines, and `Spectral`/`-apple-system-ui-serif` for editorial content.
- Avoid overly dramatic shadows; stick to the subtle `rgba(0,0,0,0.1) 0px 4px 6px` style for card elevation only.
- Do not use generic gray values; always pull from the defined neutral scale (Midnight Graphite, Anchor Gray, Silver Mist, Cool Stone).
- Never use `system-ui` for prominent headings; `Cahuenga` is reserved for this purpose.
- Do not introduce inconsistent padding values; adhere to the 4px base unit and established elementGap tokens like 4px, 8px, 12px.

### Layout

The site uses a fixed-width, centered main content area (approximately 700-900px wide based on the screenshot, though `pageMaxWidth` is null in data, indicating flexibility) with a persistent left-hand sidebar navigation. The hero section often features a contained banner with text and an image, utilizing brand colors. The main content is structured as a single-column feed, primarily text and image blocks, while a right-hand sidebar provides 'Up Next' content recommendations and login/signup calls-to-action within distinct card components. Section rhythm is consistent, separated by whitespace, offering a spacious and readable experience.

### Imagery

The visual language blends product photography within hero sections with a focus on user-generated content in the main feed. Marketing sections feature tight crops of creative tools (pens, notebooks) or abstract graphics, often against branded orange/green gradients, contained within rounded rectangles. User content primarily includes embedded videos, profile pictures, and article thumbnails, treated without masks or heavy stylization, allowing the raw content to shine. Icons are minimal, outlined, monochromatic, and typically in Anchor Gray (#777777), reserving the Orange Ember (#FF6719) for interactive states or the brand logo element. The density is image-heavy in the main content feed, interspersed with text.
