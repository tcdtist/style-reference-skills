---
version: alpha
name: Loops
description: Loops presents a precise, document-like interface with stark black typography on crisp white and soft gray backgrounds. A distinctive, serif-led typographic voice for headlines creates an established feel, contrasting with system sans-serifs for body text and interactive elements. Interaction is direct and functional, guided by subtle borders, soft shadows, and a singular, vibrant orange accent for specific highlights and calls to attention, rather than primary actions. The overall impression is one of clarity, focused content, and understated authority.
colors:
  midnight-ink: "#000000"
  greige-canvas: "#faf9f7"
  whisper-white: "#ffffff"
  slate-gray: "#1c1917"
  fog: "#d6d3d1"
  ash: "#e7e5e4"
  stone: "#44403c"
  pewter: "#a8a29e"
  warm-gray: "#292524"
  steel: "#57534e"
  silver: "#78716c"
  porcelain: "#f1efef"
  flame-orange: "#f97316"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.2
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.29
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.45
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.25
    letterSpacing: -0.56px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 34px
    lineHeight: 1.2
    letterSpacing: -1.02px
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1
    letterSpacing: -3.2px
spacing:
  cardRadius: 8px
  buttonRadius: 8px
  elementGap: 12px
  sectionGap: 40px
components:
  pill-ghost-button:
    role: Secondary action or tag within content.
  standard-ghost-button:
    role: Informational or subtle action within the UI.
  outlined-card:
    role: Content container with an emphasis on its contained nature.
  navigation-link:
    role: Primary navigation item.
  hero-action-button:
    role: Primary Call to Action.
  elevated-content-card:
    role: Highlighting key information or interactive blocks.
  code-block-card:
    role: Showcasing code snippets or API examples.
  monochrome-tab-button:
    role: Switching between content views.
---

## Overview

**North Star:** Architectural blueprint on white marble. Sharp, clean, and formally structured.

Loops presents a precise, document-like interface with stark black typography on crisp white and soft gray backgrounds. A distinctive, serif-led typographic voice for headlines creates an established feel, contrasting with system sans-serifs for body text and interactive elements. Interaction is direct and functional, guided by subtle borders, soft shadows, and a singular, vibrant orange accent for specific highlights and calls to attention, rather than primary actions. The overall impression is one of clarity, focused content, and understated authority.

### Do's

- Use Newsreader 600 with tight letter-spacing for all primary headings (display, heading-lg, heading).
- Employ Greige Canvas (#faf9f7) as the default page background to maintain a light, expansive feel.
- Accentuate specific terms using Flame Orange (#f97316) for keywords in body text or small decorative icons.
- Structure interactive elements and content cards with a default border-radius of 8px, defaulting to 12px for elevated cards.
- Utilize Slate Gray (#1c1917) as the background for primary action buttons to create visual weight and clear calls to action.
- Apply Soft Shadows (rgba(0, 0, 0, 0.05) 0px 1px 4px 0px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px) sparingly for only truly elevated components like cards or modals.
- Implement the 12px unit as the primary elementGap for vertical and horizontal spacing between content blocks.

### Don'ts

- Do not use saturated colors other than Flame Orange (#f97316) unless for semantic success/error states.
- Avoid heavy drop shadows; elevation should be subtle, usually a single soft shadow layer.
- Do not deviate from the specified serif for headlines; maintain its distinct, opinionated character.
- Refrain from using complex background gradients; surfaces should remain flat or subtly shaded neutrals.
- Do not use pure white for large content blocks unless it's a card on a Greige Canvas (#faf9f7) background.
- Avoid excessive spacing or overly large typography for body text; prioritize compact and dense readability.
- Do not introduce new typefaces; rely on the established system sans-serifs, Newsreader, and ui-monospace.

### Layout

The page uses a maximum-width contained layout, likely around 1200px, centered on the screen. The hero section features a large, centered headline and subtext, followed by a dark, filled button and a ghost button. Content sections alternate between centered text blocks and multi-column layouts, often featuring a 2-column arrangement with text on one side and a content card (like a code block or screenshot) on the other. Vertical spacing between logical sections is consistent and comfortable. The navigation is a minimalist top bar with log-in/start buttons and a left-aligned sidebar for secondary navigation, maintaining a clean, focused presentation.

### Imagery

The site largely avoids decorative imagery beyond simple, functional icons and product screenshots. Photography is absent. Icons are typically solid black or Slate Gray (#1c1917), exhibiting a filled style with clean lines, conveying functionality. Product screenshots are contained within cards or code-like blocks, serving an explanatory and demonstrative role rather than aesthetic adornment. The density is text-dominant, with visuals acting as clear, explanatory anchors.
