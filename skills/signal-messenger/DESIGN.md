---
version: alpha
name: Signal Messenger
description: This design system projects an image of digital security and approachability, achieved through a bright, spacious layout with rounded elements. The intentional use of soft blue and white as primary background colors creates an open, trustworthy atmosphere, while dark typography ensures readability. The system strikes a balance between solid, clear interactive elements and subtle background variation, making complex privacy concepts feel accessible.
colors:
  cloud-cover: "#ffffff"
  sky-dust: "#f6f6f6"
  stone-whisper: "#e9e9e9"
  signal-blue: "#9dbbf8"
  ocean-deep: "#2c6bed"
  night-sky: "#1b1b1b"
  deep-space: "#404654"
  slate-shadow: "#3c3744"
  link-blue: "#2942ff"
  subtle-mist: "#a5cad5"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.14
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.1
  display:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1.07
spacing:
  cardRadius: 16px
  buttonRadius: 8px
  elementGap: 12px
  sectionGap: 64px
components:
  get-signal-cta-button-group:
    role: 
  share-without-insecurity-feature-block:
    role: 
  donate-to-signal-card:
    role: 
  primary-call-to-action-button:
    role: Primary interactive element for key actions
  navigation-link-button:
    role: Secondary action in header navigation
  navigation-item-link:
    role: Standard navigation link
  product-screenshot-wrapper:
    role: Encapsulates product visuals
---

## Overview

**North Star:** open sky, clear communication

This design system projects an image of digital security and approachability, achieved through a bright, spacious layout with rounded elements. The intentional use of soft blue and white as primary background colors creates an open, trustworthy atmosphere, while dark typography ensures readability. The system strikes a balance between solid, clear interactive elements and subtle background variation, making complex privacy concepts feel accessible.

### Do's

- Use Night Sky (#1b1b1b) for all primary headings and body text to ensure maximum readability against light backgrounds.
- Apply Signal Blue (#9dbbf8) as a primary background accent for hero sections to immediately establish brand identity.
- Utilize 8px border-radius for all primary buttons to maintain a soft, approachable aesthetic.
- Maintain a clear page structure with sections separated by at least 64px, alternating backgrounds where appropriate (Cloud Cover #ffffff, Sky Dust #f6f6f6, or Signal Blue #9dbbf8).
- Ensure all interactive elements, such as buttons and links, use Ocean Deep (#2c6bed) or Link Blue (#2942ff) to signify action and interaction clearly.
- Use Inter font family exclusively for all text elements, leveraging weights 400 for body, 600 for subheadings, and 800 for major headings and display titles.

### Don'ts

- Avoid using highly saturated, non-brand colors; stick to the established palette of blues, grays, and whites.
- Do not deviate from the 8px and 16px border radii; squared or overly complex rounded shapes are not part of this system.
- Never use dark backgrounds for large text blocks except in the footer where Slate Shadow (#3c3744) is established, always prioritize high contrast with light backgrounds.
- Do not introduce complex gradients or texture overlays on backgrounds; maintain a flat, clean aesthetic.
- Avoid excessive use of shadows; reserve the specific shadow token rgba(0, 0, 0, 0.12) 0px 4px 12px 0px, rgba(0, 0, 0, 0.08) 0px 0px 2px 0px only for elevated elements like product mocks.

### Layout

The site uses a max-width 1344px centered container for most content, with a full-bleed hero section employing Signal Blue (#9dbbf8) background. Sections generally alternate between clean white backgrounds (Cloud Cover #ffffff) and very subtle gray backgrounds (Sky Dust #f6f6f6) or brand-colored fills (Signal Blue #9dbbf8, Subtle Mist #a5cad5), creating a gentle visual rhythm. Content is often arranged in a split layout, with text on one side and a visual (product screenshot or illustration) on the other. Navigation is a sticky top bar with clearly delineated links and buttons. Vertical spacing between main sections is generous, around 64px, contributing to a spacious feel.

### Imagery

Imagery primarily consists of product screenshots of the Signal app on mobile devices, treated with subtle shadows indicating elevation. These are typically contained within the main layout. Illustrations are abstract and geometric, using brand colors and outlines to convey concepts like global communication and security without being overly literal. Icons are outlined, simple, and monochrome, complementing the clean UI. The visual emphasis is on functionality and clarity, using images to explain product features rather than for decorative atmosphere.
