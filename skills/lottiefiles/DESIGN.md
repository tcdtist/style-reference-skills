---
version: alpha
name: LottieFiles
description: LottieFiles presents a playful yet precise aesthetic, balancing approachable organic illustrations with crisp, systematic UI elements. The design centers on a vibrant teal accent that energizes a largely achromatic palette, hinting at creativity and innovation without overwhelming. Rounded forms and generous spacing contribute to a friendly and user-centric experience, ensuring complex animation tools feel accessible to a broad audience. The strategic use of a robust sans-serif for headlines anchors the lighthearted visuals with a sense of reliable technology.
colors:
  cloud-white: "#ffffff"
  ash-white: "#fafafa"
  slate-gray: "#e4e4e7"
  dark-graphite: "#f4f4f5"
  carbon-black: "#09090b"
  charcoal-black: "#18181b"
  steel-gray: "#71717b"
  cadet-gray: "#9f9fa9"
  lottie-teal: "#019d91"
  vivid-aqua: "#00ddb3"
  sunshine-yellow: "#f0b100"
  electric-blue: "#3a86ff"
  jolly-green: "#94d19f"
  coral-pink: "#ff8eed"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
    letterSpacing: -0.1px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.71
    letterSpacing: 0.1px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
    letterSpacing: -0.1px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.56
    letterSpacing: -0.3px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.25
    letterSpacing: -0.5px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.2
    letterSpacing: -1.44px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1.15
    letterSpacing: -1.92px
spacing:
  cardRadius: 16px
  buttonRadius: 12px
  elementGap: 8-24px
  sectionGap: 40-80px
components:
  feature-highlight-badges:
    role: 
  testimonial-card:
    role: 
  cta-button-group-with-search:
    role: 
  primary-lottie-teal-button:
    role: Primary call to action
  ghost-navigation-button-active:
    role: Navigation links and secondary actions
  ghost-navigation-button-inactive:
    role: Inactive/secondary navigation links
  outline-white-button:
    role: Secondary actions requiring emphasis
  feature-card:
    role: Showcasing product features or benefits
  customer-showcase-card:
    role: Highlighting customer projects or testimonials
  search-input-field:
    role: Site-wide search functionality
  testimonial-card:
    role: Displaying customer feedback
---

## Overview

**North Star:** Playful Precision amidst Animation; a digital canvas vibrant with motion, grounded by clear, spacious layouts.

LottieFiles presents a playful yet precise aesthetic, balancing approachable organic illustrations with crisp, systematic UI elements. The design centers on a vibrant teal accent that energizes a largely achromatic palette, hinting at creativity and innovation without overwhelming. Rounded forms and generous spacing contribute to a friendly and user-centric experience, ensuring complex animation tools feel accessible to a broad audience. The strategic use of a robust sans-serif for headlines anchors the lighthearted visuals with a sense of reliable technology.

### Do's

- Prioritize DM Sans for headlines (sizes > 24px) with specific letter-spacing as defined in typography, using Carbon Black (#09090b) for high impact.
- Use Lottie Teal (#019d91) exclusively for primary calls to action, maintaining its distinctive brand presence.
- Apply rounded corners consistently: 12px for buttons, 16px for cards, and 24px for larger visual elements like image containers to reinforce approachability.
- Maintain generous spacing with elementGap at 8px, 16px, or 24px, and sectionGap between 40-80px to ensure visual comfort and focus.
- Employ the subtle shadow rgba(0, 0, 0, 0.05) 0px 1px 2px 0px for all elevated cards and interactive elements, adding minimal depth.
- Utilize Inter font at 14px or 16px for all body text, links, and UI labels, ensuring high readability with a default letter-spacing of -0.01em.
- Ensure adequate contrast: Carbon Black (#09090b) on Cloud White (#ffffff) or Ash White (#fafafa) for all primary text content.

### Don'ts

- Avoid applying excessive shadows; stick to the single, subtle shadow defined for elevation.
- Do not introduce new chromatic colors outside of the defined brand and accent palette; maintain the vibrant teal focus with select pops of yellow/blue.
- Refrain from using sharp corners or radii smaller than 8px for interactive elements; the visual style leans into softer, friendlier shapes.
- Do not use DM Sans for large blocks of body text; reserve it for headlines and short, impactful statements to preserve its distinctive role.
- Avoid dense, information-heavy sections without adequate white space; prioritize breathability and comfortable reading experiences.
- Do not deviate from the specified dark neutral colors for primary text and headings; maintain high contrast and legibility.
- Do not use Lottie Teal (#019d91) for body text or non-interactive elements; keep it reserved for key actions and brand accents.

### Layout

The layout follows a centered, max-width contained model, with a pageMaxWidth of approximately 1200px providing ample breathing room. The hero section is a split design with a large, bold headline on the left and a prominent, playful illustration on the right, setting an inviting tone. Sections alternate between full-bleed background colors (e.g., white, light gray bands) and content blocks, creating a consistent visual rhythm. Content is frequently arranged in two-column layouts (text alongside imagery/cards) or multi-column grids (3-4 columns for feature cards or customer showcases), maintaining clear visual hierarchy. Vertical spacing between sections is generous (40-80px). The navigation is a sticky top bar, providing constant access without being obtrusive.

### Imagery

The site heavily relies on custom, vibrant, and character-driven illustrations featuring a mix of geometric and organic shapes with bold outlines and a wide palette of vivid colors like Sunshine Yellow, Electric Blue, and Coral Pink. These illustrations are primarily decorative but also explanatory, conveying functionality or emotional tone through anthropomorphic elements and playful scenarios. Photography is limited to product screenshots, often presented within mockups (e.g., phone screens) with softly rounded corners. Icons are typically solid, monocolor (Steel Gray or Lottie Teal), and have a uniform stroke weight (inferred from visual consistency), used for navigation and feature highlighting. Image density is moderate to high, often taking up significant visual space in primary sections to support the text and enhance visual appeal.
