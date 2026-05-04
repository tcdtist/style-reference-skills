---
version: alpha
name: Lego
description: LEGO's digital storefront feels like a toy aisle rendered in pixels — primary colors deployed with zero restraint, product photography doing all the emotional lifting against white and near-black surfaces. The yellow (#FFD502) is the brand's pulse: it appears on badges, nav highlights, and the logo bar, a single chromatic constant amid a white/off-black neutral scaffold. The orange CTA (#F47D20) on 999px pill buttons is the only call to action color — warm, rounded, immediately readable against product whites. The dark footer (#201D48) anchors the page in LEGO's classic deep navy, grounding a page that otherwise lives in bright daylight. Type is entirely Cera Pro, a custom geometric rounded sans that echoes brick curves — weight 700 for headings at tight tracking, weight 400 for body, nothing else.
colors:
  lego-yellow: "#FFD502"
  brick-orange: "#F47D20"
  ember-dark: "#E96F14"
  lego-navy: "#201D48"
  link-blue: "#006DB7"
  action-blue: "#005AD2"
  flag-red: "#D0021B"
  off-black: "#141414"
  graphite: "#2C2C2C"
  pitch: "#000000"
  snow: "#FFFFFF"
  fog: "#F2F2F2"
  pebble: "#F6F6F6"
  steel: "#757575"
  silver: "#E0E0E0"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.58
    letterSpacing: 0.12px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.56
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.36
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.35
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.19
    letterSpacing: -0.48px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.15
    letterSpacing: -0.3px
  display:
    fontFamily: "system-ui"
    fontSize: 37px
    lineHeight: 1.15
    letterSpacing: -0.74px
spacing:
  cardRadius: 8px
  buttonRadius: 999px
  elementGap: 8-16px
  sectionGap: 48-64px
components:
  product-card-lego-set:
    role: 
  tab-navigation-category-tiles:
    role: 
  lego-insiders-membership-banner:
    role: 
  primary-cta-pill-button:
    role: Purchase actions: 'Add to Bag', 'Buy now', 'Become a member'
  outlined-pill-button:
    role: Secondary actions: 'Learn more', 'Shop all new', 'Join LEGO® Insiders'
  circular-icon-button:
    role: Wishlist, cart, carousel controls
  ghost-text-button:
    role: Inline navigation actions, tab underlines
  new-exclusives-badge:
    role: Product card status labels, hero content tags
  category-navigation-tile:
    role: Theme/category browsing grid below hero tabs
  search-input:
    role: Global site search in header
  tab-navigation:
    role: Section content switcher ('What's new / Gifting / Themes', 'Featured / Formula 1®')
  announcement-banner:
    role: Promotional message bar at top of page
  insiders-membership-card-row:
    role: Benefit showcase in membership section
  site-footer:
    role: Global navigation footer
---

## Overview

**North Star:** Primary-color toy aisle — the brightness of a freshly opened set box on a white table.

LEGO's digital storefront feels like a toy aisle rendered in pixels — primary colors deployed with zero restraint, product photography doing all the emotional lifting against white and near-black surfaces. The yellow (#FFD502) is the brand's pulse: it appears on badges, nav highlights, and the logo bar, a single chromatic constant amid a white/off-black neutral scaffold. The orange CTA (#F47D20) on 999px pill buttons is the only call to action color — warm, rounded, immediately readable against product whites. The dark footer (#201D48) anchors the page in LEGO's classic deep navy, grounding a page that otherwise lives in bright daylight. Type is entirely Cera Pro, a custom geometric rounded sans that echoes brick curves — weight 700 for headings at tight tracking, weight 400 for body, nothing else.

### Do's

- Use 999px border-radius for all interactive buttons — CTA, secondary, and icon-only circular controls without exception.
- Place #FFD502 badges with 0px border-radius and padding 4px 12px on product imagery — never round the badge corners.
- Use #F47D20 exclusively for primary purchase CTA buttons; reserve #005AD2 for secondary/informational pill buttons.
- Set Cera Pro 700 with letter-spacing -0.02em for all headings at 24px and above.
- Keep product cards border-radius 8px with split construction: image area top-rounded, content area bottom-rounded, white fill, no box-shadow — rely on #F6F6F6 page background for contrast.
- Use #141414 as the default text color on all light surfaces; never substitute with pure #000000 for body text.
- Maintain the yellow (#FFD502) header bar and square LEGO logo block as the only chromatic navigation surface — never introduce colored top nav backgrounds.

### Don'ts

- Never use border-radius on badge/label elements — 0px sharp corners are the sticker/price-tag signature for status labels.
- Never apply box-shadow to product cards — elevation through background color contrast only (#FFFFFF card on #F6F6F6 base).
- Never use more than one CTA button color per page section — all purchase CTAs are #F47D20, all secondary CTAs are outlined or #005AD2.
- Never set Cera Pro at weight 300 — the site uses only 400, 500, and 700; sub-regular weights are off-brand.
- Never place text-heavy content over hero imagery without a sufficient semi-transparent scrim or white card overlay — the hero text block uses a white background panel, not text-over-image.
- Never use rounded inputs — search and form fields are 0px radius to visually distinguish data-entry from interactive controls.
- Never use the LEGO Navy (#201D48) as a section background mid-page — it belongs exclusively to the footer anchor.

### Layout

Max-width ~1280px centered on page, but hero and announcement bar are full-bleed. Navigation bar is sticky, 3-zone: yellow LEGO logo square left, horizontal nav links center, utility icons (search, wishlist, cart) right. Hero is full-viewport-height image composite with overlaid text and pill button CTAs centered-left over the imagery. Below hero: tab navigation row (3 tabs) followed by an 8-column category tile grid, full-width. Product card section uses a 5-column card grid on white/fog background with horizontal scroll carousel controls. Membership section is a 2-column layout (text-left, 3-column benefit tiles right). Footer is a 5-column link grid on #201D48. Section rhythm alternates: dark announcement bar → yellow nav → full-bleed hero → dark secondary nav strip → white category grid → white product grid → light gray membership → white → navy footer. Vertical section spacing 48-64px. Comfortable density — significant white space between product cards.

### Imagery

Product photography is the dominant visual medium — tight shots of assembled LEGO sets on clean gradient or white backgrounds, presented at a slight 3/4 angle to show depth. Hero section uses full-bleed composite photography blending physical models with illustrated sky backgrounds, creating a staged narrative around licensed products (PAN AM Airliner floating against a blue sky). Category tiles use full-bleed character art and product compositions. Minifigure photography appears as lifestyle elements in the hero — arranged like a cast photo. Icons are filled mono-color glyphs (shopping bag, heart, star, minifigure) at 16-20px, brand-colored (#141414 on light, #FFFFFF on dark). No lifestyle photography of humans — products and characters are always the subject. Image density is very high in the hero and category grid, then drops to white-background product isolation in the product card grid.

### Elevation

LEGO.com deliberately avoids card elevation — product cards use 0px shadow, relying on the 8px border-radius and white surface against #F6F6F6 background to define edges. Only interactive buttons in pressed states receive the rgba(0,0,0,0.54) 2px drop shadow. Depth is created through background color contrast, not shadow stacking.
