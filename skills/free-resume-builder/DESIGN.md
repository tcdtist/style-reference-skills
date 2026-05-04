---
version: alpha
name: Free Resume Builder
description: Resume.io evokes a feeling of quiet competence through its balanced use of a predominantly cool color palette and generous spacing. The interface prioritizes clarity and approachability, using soft blues and grays alongside a confident, sans-serif typography. Interactive elements are clearly distinguished by a vibrant blue, making complex forms feel manageable and guiding users through the resume-building process with a reassuring visual tone.
colors:
  page-graphite: "#0f141"
  slate-text: "#1e2532"
  midtone-gray: "#656e83"
  soft-gray: "#828ba2"
  hover-gray: "#9fa6bb"
  light-steel: "#d9deeb"
  faded-blueprint: "#f1f2ff"
  whisper-white: "#f7f9fc"
  pure-white: "#ffffff"
  action-blue: "#1a91f0"
  recruiter-blue: "#1a1c6a"
  trustpilot-green: "#00b67a"
  error-red: "#fb4458"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: 0.29px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.26
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.22
  heading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.14
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.16
  display-sm:
    fontFamily: "system-ui"
    fontSize: 31px
    lineHeight: 1.17
  display:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.07
  display-lg:
    fontFamily: "system-ui"
    fontSize: 52px
    lineHeight: 1
  display-xl:
    fontFamily: "system-ui"
    fontSize: 67px
    lineHeight: 0.96
spacing:
  cardRadius: 4px
  buttonRadius: 4px
  elementGap: 4px
  sectionGap: 48-80px
components:
  hero-cta-button-group:
    role: 
  feature-tool-cards:
    role: 
  stats-feature-highlights:
    role: 
  secondary-outline-button:
    role: Alternative action button
  rounded-service-card:
    role: Feature or service description
  navigation-link:
    role: Header and footer navigation
---

## Overview

**North Star:** Calm productivity, like a well-organized office. Light-filled and orderly, with key tools highlighted in a crisp blue.

Resume.io evokes a feeling of quiet competence through its balanced use of a predominantly cool color palette and generous spacing. The interface prioritizes clarity and approachability, using soft blues and grays alongside a confident, sans-serif typography. Interactive elements are clearly distinguished by a vibrant blue, making complex forms feel manageable and guiding users through the resume-building process with a reassuring visual tone.

### Do's

- Use Action Blue (#1a91f0) for all primary interactive elements like buttons and active navigation states to guide user flow.
- Apply a 4px radius consistently to all standard buttons, cards, and input fields for a subtle softness.
- Maintain a clear visual hierarchy by using Page Graphite (#0f141e) for main headings and Slate Text (#1e2532) for body content.
- Utilize Whisper White (#f7f9fc) as the default background for content cards and sections to ensure a clean, breathable canvas.
- Employ the TT Commons typeface for all text elements, leveraging its 400, 500, and 600 weights to delineate content importance.

### Don'ts

- Do not use dark backgrounds for main content areas; reserve them for specific hero sections or full-bleed branding only.
- Avoid arbitrary border radii; stick to the defined 4px for standard elements, 24px for rounded cards, and 36px for pill buttons.
- Do not introduce new saturated colors beyond Action Blue (#1a91f0); rely on the existing neutral palette for variety.
- Do not use letter-spacing on body text; apply it only to larger headings or specific styled elements as defined in typography.
- Avoid heavy drop shadows or complex gradients; the aesthetic is grounded in simplicity and subtle shifts in background color and outline.

### Layout

The page primarily employs a max-width contained layout, centered on the screen, with content sections typically structured within a clear grid. The hero section is a split layout with a prominent headline and CTA on the left, balanced by a composite product visual on the right against a subtly textured light blue background. Following sections maintain a spacious vertical rhythm with alternating content arrangements: some are centered stacks, others utilize a text-left/image-right pattern. Feature sections often present information in a 2 or 3-column card grid, allowing for clear visual separation. The navigation is a sticky top bar with a left-aligned logo, right-aligned primary CTA button, and centered navigation links, providing consistent access across the site. Generous vertical spacing between sections creates a breathable, uncluttered experience.

### Imagery

The site uses a mix of crisp product screenshots and abstract 3D graphics. Product screenshots, like the resume preview, are contained within soft, rounded cards and feature tight crops that highlight the application's UI. Abstract graphics leverage a light, almost translucent blue/gray palette, often with subtle geometric forms and ethereal glow effects, creating a futuristic yet friendly atmosphere. Icons are primarily filled, monochrome (Slate Text #1e2532) with occasional Action Blue (#1a91f0) accents, featuring a medium stroke weight and a friendly, rounded style. Imagery serves both to showcase product functionality and to provide decorative, atmospheric elements that reinforce the brand's tech-forward yet approachable identity.
