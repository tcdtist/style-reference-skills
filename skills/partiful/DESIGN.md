---
version: alpha
name: Partiful
description: Partiful runs on celebration energy: a white canvas that gives way to full-bleed photographic heroes washed in purple-to-pink gradients, then returns to white for feature sections with soft periwinkle-to-white gradient backgrounds. The type system pairs a custom display face (Partiful Display Medium) for statement headlines — used at sizes up to 112px with tight -0.03em tracking — with TWK Lausanne Pan across all weights for UI text, giving the whole interface a confident, slightly editorial quality. Black is the primary action color: filled black buttons, black borders, black headings — no blue accent, just pure contrast. Decorative depth comes from invitation card imagery, scattered at tilted angles against gradient washes, making the UI feel like a physical party surface rather than a software dashboard.
colors:
  midnight-ink: "#000000"
  pure-canvas: "#ffffff"
  graphite: "#333333"
  slate: "#666666"
  ash: "#999999"
  fog: "#b3b3b3"
  silver: "#cccccc"
  warm-sand: "#d9c58b"
  party-pink: "#f8c4ff"
  sky-periwinkle: "#96c4ff"
  spearmint: "#85dadc"
  midnight-blue: "#001666"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.2
    letterSpacing: -0.22px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
    letterSpacing: -0.28px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
    letterSpacing: -0.36px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: -0.96px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.2
    letterSpacing: -1.44px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
    letterSpacing: -0.96px
spacing:
  cardRadius: 12px
  buttonRadius: 8px
  elementGap: 10px
  sectionGap: 80px
components:
  announcement-banner:
    role: 
  feature-tab-selector:
    role: 
  rsvp-response-buttons:
    role: 
  primary-filled-button:
    role: Main page CTAs — Create invite, Create event
  ghost-nav-button:
    role: Login / secondary header action
  pill-badge-rating-tag:
    role: Star rating display, count labels, RSVP status
  active-nav-link:
    role: Currently selected category in horizontal navigation
  standard-content-card:
    role: Feature cards, testimonial cards, invite preview tiles
  event-preview-card:
    role: Live event page mockup shown in feature demos
  invitation-template-tile:
    role: Gallery of invitation design options in carousels
  feature-tab-selector:
    role: Tabbed navigation for Backgrounds / Fonts / Animations / Posters
  rsvp-response-button:
    role: Going / Maybe / Can't go response options on event pages
  hero-section:
    role: Full-bleed page header with photography and gradient overlay
  announcement-banner:
    role: Top-of-page promotional strip
  app-notification-preview:
    role: Mobile push notification widget shown floating over hero
---

## Overview

**North Star:** confetti landing on white marble — the page stays quiet and light while the content explodes with color and celebration.

Partiful runs on celebration energy: a white canvas that gives way to full-bleed photographic heroes washed in purple-to-pink gradients, then returns to white for feature sections with soft periwinkle-to-white gradient backgrounds. The type system pairs a custom display face (Partiful Display Medium) for statement headlines — used at sizes up to 112px with tight -0.03em tracking — with TWK Lausanne Pan across all weights for UI text, giving the whole interface a confident, slightly editorial quality. Black is the primary action color: filled black buttons, black borders, black headings — no blue accent, just pure contrast. Decorative depth comes from invitation card imagery, scattered at tilted angles against gradient washes, making the UI feel like a physical party surface rather than a software dashboard.

### Do's

- Use #000000 filled buttons with #ffffff text and 8px radius for all primary CTAs — no colored accent replaces this.
- Apply TWK Lausanne Pan at -0.04em letter-spacing for all headings at 24px and above; drop to -0.02em for body text at 14-18px.
- Use 960px border-radius for pill badges, RSVP status tags, and tab selectors — never a small radius on these elements.
- Wrap feature sections in periwinkle-to-white gradients (rgba(150,196,255,0.1) → #ffffff) to create visual rhythm alternating with pure white sections.
- Scatter invitation card tiles at ±10-15° rotation in showcase sections — the tilted stack of cards communicates creative variety and physical party energy.
- Reserve Partiful Display Medium exclusively for hero headlines and the largest section display titles; use TWK Lausanne Pan 700 for all other headings.
- Use #31c431, #ffae00, and red exclusively for RSVP semantic states (Going/Maybe/Can't go) — never use these as decorative or brand colors elsewhere in the UI.

### Don'ts

- Never use a colored accent (purple, blue, pink) as the primary button fill — the entire action hierarchy runs on black and white only.
- Don't apply box-shadow to the hero or full-bleed sections — elevation is only used on cards and floating widgets, never on full-width surfaces.
- Don't use Partiful Display Medium below 26px — at small sizes it loses its identity; use TWK Lausanne Pan 700 instead.
- Never use #d9c58b (Warm Sand) for anything other than the active nav link state — it reads as a selected-state indicator, not a general accent.
- Don't center-align body copy paragraphs in feature sections — body text stays left-aligned even when the section layout is centered.
- Don't use more than 2 type sizes in a single card component — the hierarchy is title + body, not a cascade of 3+ sizes.
- Never apply the pink-to-mauve gradient to interactive UI components (buttons, inputs, badges) — it is a background/surface treatment only.

### Layout

Max-width approximately 1200px, centered. Hero is full-bleed viewport-width photography (~420px tall) with left-aligned headline and centered gradient overlay, navigation sits in a dark-background top bar above it. Below the hero, sections alternate between white canvas (feature demos with tab selectors and event card mockups) and soft gradient washes (periwinkle-to-white or pink-to-white) for 'For every occasion' type sections. Feature sections use a two-column layout: text-left with a large product card mockup or scattered invitation tiles on the right. Invitation gallery carousels are full-width horizontal scroll rows with visible overflow. A 3-4 column card grid appears in testimonial/press sections. Section vertical rhythm is consistent at ~80px gaps. Navigation is a sticky top bar with horizontal category links (Graduations, Birthdays, Dinners, etc.) plus Login/Create button pair in the top right — no mega-menu, no sidebar.

### Imagery

Partiful mixes three distinct visual registers: (1) editorial lifestyle photography — tight, high-energy shots of people laughing and dancing, shot in warm mixed lighting with intentional grain; used full-bleed in the hero with a pink-violet gradient overlay that tints the photograph without obscuring it. (2) Invitation card templates — the dominant imagery type across the page, shown as portrait-format tiles in carousels and scattered at ±10-15° rotation in feature sections; these range from flat color blocks with display typography to painterly watercolors to retro album-art pastiche, each wildly different in visual style. (3) Product UI screenshots — clean white event pages shown in card mockups with realistic shadow, used to demonstrate feature functionality. Icons throughout the UI are filled mono-weight shapes at 16-20px, appearing exclusively in #000000 or #ffffff. The overall image density is medium-high — photography and invitation tiles occupy the majority of above-fold screen real estate, with text-dominant sections only appearing in alternating feature bands below. No abstract geometric illustration or decorative SVG patterns are used.
