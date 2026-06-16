# Mini-ATV.no — Claude Code Project Brief

## Project Overview

Building a new ecommerce website for **Engros Service** at domain **mini-atv.no**. The client sells Mini ATVs for kids and youth (ages 3–12) across Norway and Europe. The goal is to rank high in Google for "Mini-ATV" searches and provide a fully functional webshop that syncs with the client's existing **Magento** store at engrosservice.no.

**Client:** Engros Service (Terje)
**Developer:** Abdullah / Brandsmen Agency
**Domain:** mini-atv.no
**Reference/dev site:** https://brandsmenagency.com/engrosservice/
**Existing Magento store:** https://www.engrosservice.no/

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Deployment | Vercel |
| Language | TypeScript |
| Styling | Tailwind CSS |
| State (cart) | Zustand |
| Data fetching | SWR or React Query |
| Payment | Vipps (primary) + Stripe (card fallback) |
| Backend sync | Magento 2 REST API |
| Caching | ISR (Incremental Static Regeneration) — revalidate every 5 min |

---

## Design System

### Target Audience
- **Primary buyers:** Parents purchasing for children aged 3–12
- **Visual tone:** Bright, energetic, fun — like premium toy/outdoor packaging
- **NOT:** Dark/industrial — the current dev site uses black background which is wrong for this audience

### Colors
```
Primary (Orange):   #FF6B00
Secondary (Blue):   #0EA5E9
Accent (Green):     #16A34A
Dark text:          #0F172A
Medium text:        #475569
Light BG:           #F0F9FF
Card BG:            #FFFFFF
Border:             #E2E8F0
Sale red:           #EF4444
```

### Typography
- **Font:** Nunito (Google Fonts) — rounded, friendly, modern
- **Headings:** Nunito 800 (ExtraBold)
- **Body:** Nunito 400/600
- **Norwegian language** throughout (bokmål)

### Age Badges (on product cards)
- `3–6 år` → Green badge
- `7–10 år` → Blue badge
- `10–12 år` → Orange badge

### Border Radius
- Cards: `16px`
- Buttons: `12px`
- Badges: `999px` (pill)

---

## Pages to Build

### 1. Homepage (`/`)
- **Hero** — full-width with `hero-atv` image, orange/blue gradient overlay, big headline, two CTAs
- **Category section** — split into Bensindrevet ATV + Elektrisk ATV with subcategory cards (engine sizes / wattage)
- **Featured products** — "Populære ATV-er" grid (8 products, 4 columns)
- **Brand story** — "Skap Minner i Naturen" with lifestyle image
- **CTA banner** — "Klar for å erobre terrenget?"
- **Footer**

### 2. Product Page (`/product/[slug]`)
- Breadcrumb: Hjem / Kategori / Produktnavn
- **Left column:** Main image + thumbnail gallery below (clickable)
- **Right column:** Product name, price (with crossed-out original if sale), short description (2-3 sentences — engaging, NOT the tech specs), age badge, quantity picker, "Legg i handlekurv" + "Kjøp nå" buttons
- **Tabs below:** Beskrivelse | Video | Tekniske data
- **Related products** — 4 cards below

### 3. Shop/Category page (`/kategori/[category]`)
- Filter sidebar: Electric / Gasoline, engine size, age group
- Product grid

### 4. Cart (`/handlekurv`)
### 5. Checkout (`/kasse`)
### 6. Order Confirmation (`/ordre-bekreftelse`)
### 7. About (`/om-oss`)
### 8. Contact (`/kontakt`)

---

## Categories (from existing site — keep these exactly)

### Bensindrevet ATV
- Opp til 50cc — Barn & Ungdom (ages 3–8)
- 110cc–125cc — Barn & Ungdom (ages 7–12)
- 250cc — Ungdom & Voksen

### Elektrisk ATV
- Opp til 500 Watt — Barn & Ungdom (ages 3–6)
- Opp til 1200 Watt — Barn & Ungdom (ages 6–10)
- Opp til 1500 Watt — Ungdom & Voksen

---

## Known Products (from dev site)

| Product | Price | Sale Price | Type |
|---|---|---|---|
| MANCINI ATV 250 CC MOD R | kr 34 990 | kr 27 990 | Gasoline |
| ATV Predator sort speedometer hengerfeste | kr 16 990 | kr 15 990 | Gasoline |
| ATV Farmer125cc sort speedometer | kr 15 990 | kr 14 990 | Gasoline |
| ATV Farmer125cc rød speedometer hengerfeste | kr 15 990 | kr 14 990 | Gasoline |
| Outback 110cc ATV med revers | kr 14 990 | kr 12 990 | Gasoline |
| Mancini Farmer 110CC revers speedometer | kr 12 990 | — | Gasoline |
| Outback 110cc ATV med revers Orange | kr 14 990 | kr 12 990 | Gasoline |
| Farmer el ATV kardang børsteløs 1500W | kr 14 990 | kr 12 990 | Electric |
| Mini ATV 50cc pink edition two | kr 6 990 | kr 5 990 | Gasoline |
| Renegade el ATV kardang børsteløs 1200W | kr 12 990 | kr 9 990 | Electric |
| Elektrisk mini ATV for barn 1000W Renegade | kr 9 490 | kr 8 290 | Electric |
| Challenge ATV 110CC Black Edition | kr 12 990 | kr 10 990 | Gasoline |
| Mini ATV 50cc Green edition two | kr 6 990 | kr 5 990 | Gasoline |

---

## Sample Product: Mancini Farmer 110CC revers speedometer

**Short description (use this on product page, NOT the tech specs):**
> Mancini Farmer 110CC er en robust og morsom ATV for barn og ungdom fra 7 år. Med automatgir, elektrisk start og justerbar topphastighet er den trygg for nybegynnere og spennende nok for de erfarne. Perfekt for norsk terreng — skog, mark og grus.

**Tech Specs (in the Tekniske data tab):**
- Model: ATV Farmer 110CC speedometer
- Motor: 110CC 4-takt
- Effekt: 7.5 hk
- Start: Elektrisk start
- Tenning: CDI
- Girkasse: Automatisk
- Drivverk: Kjededrift
- Støtdemper foran: Fjær/olje
- Støtdemper bak: Fjær/olje eller dobbel
- Forbremse: Trommelbremse
- Bakbremse: Skivebremse 155mm / 6"
- Dekk foran: 3.5-7
- Dekk bak: 3.5-7
- Mål LxBxH: 1420×880×900 mm
- Setehøyde: 650 mm
- Hjulbase: 925 mm
- Bensintenk: 3 L
- Nettovekt: 92 kg
- Bruttovekt: 107 kg
- Maks. førersvekt: 130 kg
- Maks. hastighet: 6–50 km/h (justerbar)

---

## Asset Files (included in this folder)

All images are saved locally and should be copied into `/public/images/` in the Next.js project.

### Homepage images (`Engros Service_files/`)
| File | Use |
|---|---|
| `Engros-Service-Mini-ATV-01-1.png` | Logo |
| `hero-atv-jrfmPW6S.jpg` | Hero banner background |
| `atv-trail-BedWAeL7.jpg` | Secondary/trail section |
| `adventure-lifestyle-CJgNoD9h.jpg` | Brand story / family lifestyle |
| `product-atv-1-CA-fuCX8.jpg` | Category card: Gas 50cc |
| `atv125cc6-600x450.jpg` | Category card: Gas 110–125cc |
| `product-atv-3-UW4IHtNj.jpg` | Category card: Gas 250cc |
| `product-atv-4-tDPe2Xpr.jpg` | Category card: Electric 500W |
| `farmer_el_atv_1200w1-1-600x450.jpg` | Category card: Electric 1200W |
| `farmer_el_atv_1200w5-600x450.jpg` | Category card: Electric 1500W |
| `oransje_atv_1-600x450.jpg` | Product card: Mancini 250cc |
| `atv_125_4-1-600x450.jpg` | Product card: ATV Predator |
| `atv_125_2-600x450.jpg` | Product card: Farmer125cc sort |
| `oransje_atv3-600x450.jpg` | Product card: Farmer125cc rød |
| `atv_125_5-1-1-600x450.jpg` | Product card: Outback 110cc |
| `atv_125_5_2-600x450.jpg` | Product card: Mancini 110CC |

### Product page images (`Mancini Farmer 110CC revers speedometer – Engros Service_files/`)
| File | Use |
|---|---|
| `69be4d94-59e6-47ce-a783-27f381411df6-600x450.jpeg` | Main product image |
| `b2da43a6-2d4d-40d6-88d0-c846773f937d-600x450.jpeg` | Gallery image 2 |
| `bce4d8f6-79ed-4c71-b790-640178062cf3-600x450.jpeg` | Gallery image 3 |
| `c0d031cc-862f-4918-bf7e-b41d0cd902eb-600x450.jpeg` | Gallery image 4 |
| `daa43ccf-b0cd-4ff4-aa0a-31141f578a7f-1-600x450.jpeg` | Gallery image 5 |
| `df5ad4de-0763-4f44-b77c-28a44ce9fbe7-600x450.jpeg` | Gallery image 6 |
| `mini_atv_rosa1-1-600x450.jpg` | Related: 50cc Pink |
| `el_atv_1200wred1-600x450.jpg` | Related: Electric 1200W Red |
| `el_atv_1000w-600x450.jpg` | Related: Electric 1000W |
| `atv110cc16-600x450.jpg` | Related: 110cc |

---

## Magento Integration Plan

> **Phase 2 — implement after design approval**

### Architecture
```
mini-atv.no (Next.js / Vercel)
        ↕  REST API calls
engrosservice.no (Magento 2)
        ↕
Accounting system (unchanged — gets orders via Magento as normal)
```

### API Endpoints Needed

| Function | Endpoint | Method |
|---|---|---|
| Get product list | `/rest/V1/products?searchCriteria[...]` | GET |
| Get single product | `/rest/V1/products/{sku}` | GET |
| Get stock | `/rest/V1/stockItems/{sku}` | GET |
| Get price | `/rest/V1/products/{sku}` (includes price) | GET |
| Place order | `/rest/V1/orders` | POST |
| Create customer | `/rest/V1/customers` | POST |

### Sync Strategy
- **Products/prices/categories:** ISR with `revalidate: 300` (5 min) — fetched at build/request time
- **Stock levels:** Live check on product page load and before checkout
- **Orders:** POST to Magento on successful payment — triggers accounting system as normal
- **Webhooks:** Set up Magento webhook to call Vercel revalidation endpoint on product update

### Magento Credentials Setup
Client will provide: API token from **System > Integrations** in Magento admin.
Store in Vercel environment variables:
```
MAGENTO_BASE_URL=https://www.engrosservice.no
MAGENTO_API_TOKEN=xxxx
```

### Payment (Vipps)
- Norway's primary payment method
- Use **Vipps ePayment API** (vipps.no/developers)
- Fallback: Stripe for card payments
- On successful payment → POST order to Magento → redirect to confirmation page

---

## Project Folder Structure (Next.js)

```
mini-atv/
├── app/
│   ├── page.tsx                    # Homepage
│   ├── produkt/[slug]/page.tsx     # Product page
│   ├── kategori/[category]/page.tsx
│   ├── handlekurv/page.tsx
│   ├── kasse/page.tsx
│   ├── ordre-bekreftelse/page.tsx
│   ├── om-oss/page.tsx
│   └── kontakt/page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── CategoryGrid.tsx
│   │   └── FeaturedProducts.tsx
│   ├── product/
│   │   ├── ProductGallery.tsx
│   │   ├── ProductInfo.tsx
│   │   ├── ProductTabs.tsx
│   │   └── RelatedProducts.tsx
│   └── ui/
│       ├── ProductCard.tsx
│       ├── AgeBadge.tsx
│       └── Button.tsx
├── lib/
│   ├── magento.ts                  # Magento REST API client
│   └── types.ts                   # TypeScript types
├── store/
│   └── cart.ts                    # Zustand cart store
└── public/
    └── images/                    # Copy all images from _files folders here
```

---

## Content Notes

- **Language:** Norwegian bokmål throughout
- **Currency:** NOK (kr), format: `kr 14 990,00`
- **Brand name:** Use "Engros Service" and "Mini-ATV" — logo file: `Engros-Service-Mini-ATV-01-1.png`
- **Phone placeholder:** 123 45 678 (client to confirm actual number)
- **Payment icons in footer:** Visa, PayPal, Stripe, MasterCard, Vipps
- **Footer links:**
  - Handleguide: Alle produkter, Barn & Ungdom, Sport & Racing, Reservedeler
  - Kundeservice: Kontakt oss, Frakt & Levering, Garanti, Om oss

---

## Design Reference Files (in this folder)

- `index.html` — Homepage design mockup v1 (approved base design — open in browser)
- `index-v2.html` — Homepage variation 2 (see brief below)
- `index-v3.html` — Homepage variation 3 (see brief below)
- `index-v4.html` — Homepage variation 4 (see brief below)
- `product.html` — Product page design mockup (open in browser for client approval)
- `Engros Service.html` — Original WordPress homepage (reference only)
- `Mancini Farmer 110CC revers speedometer – Engros Service.html` — Original product page (reference only)

---

## CURRENT TASK: Create 3 Homepage Design Variations

The approved base design is `index.html`. Create three additional standalone HTML variations — `index-v2.html`, `index-v3.html`, and `index-v4.html` — for client comparison and approval.

**Rules for all variations:**
- Same content, sections, and Norwegian copy as `index.html` (do not change text or product data)
- Same image assets from `Engros Service_files/` (same relative paths)
- Same font: Nunito from Google Fonts
- Fully self-contained single HTML file with all CSS inside `<style>`
- Must work when opened directly in a browser (no build step)
- Kid-friendly, bright design — no dark backgrounds
- All interactive elements (tabs, gallery) must work with vanilla JS only

---

### Variation 2 — `index-v2.html`: Bold & Playful

**Concept:** Bigger, more energetic. Feels like a toy store or kids' magazine ad.

- **Hero:** Full-bleed image with a bold diagonal/skewed orange band across the bottom half. Headline in a very large (100px+), stacked layout. Add a confetti or star pattern overlay on the hero.
- **Colors:** Keep orange (#FF6B00) as primary but use a bright lime green (#84CC16) as the secondary instead of blue. White background throughout.
- **Category cards:** Large rounded cards with a bold colored top border (4px, orange or green). Engine size badge displayed as a big pill at the top-left of the card image.
- **Product grid:** 4 columns. Cards have a subtle colored left-border stripe that matches the age group badge color (green for 3–6, blue for 7–10, orange for 10–12).
- **Brand story section:** Light lime green background (#F7FEE7) instead of dark. Text left, image right (swap the layout).
- **CTA banner:** Diagonal split background — left half orange, right half lime green, white text on both sides.
- **Typography:** Headings slightly larger and more condensed. Use `font-stretch: condensed` on h1/h2 elements.

---

### Variation 3 — `index-v3.html`: Clean & Modern (Premium Feel)

**Concept:** Cleaner, more premium. Like a Scandinavian design brand. Appeals to parents who want quality.

- **Hero:** Split layout — left 55% is a very light blue-grey background (#EFF6FF) with centered text and two CTAs stacked vertically. Right 45% is the hero ATV image as a large rounded rectangle (border-radius 32px), no dark overlay, no gradient.
- **Colors:** Primary deep navy (#0F172A) for headings, secondary sky blue (#0EA5E9), accent soft orange (#FB923C). Background a warm white (#FAFAF9). Card backgrounds very light grey (#F8FAFC).
- **Header:** Slightly taller header (80px). Logo on far left. Nav centered. Cart on far right. Thin 1px border-bottom (no shadow).
- **Category section:** White background. 2-row layout — top row: Bensindrevet ATV (3 cards), bottom row: Elektrisk ATV (3 cards). Cards are wider, image top, minimal text below, no footer band — just age badge floating bottom-right on the image.
- **Product grid:** 4 columns. Cards have NO border, only a box-shadow on hover. Image takes 60% of card height. Price in navy, sale price in a separate red pill badge.
- **Brand story:** Full-width image banner (the adventure-lifestyle image), overlay 40% dark navy, white text centered in the middle — single large quote-style heading: *"Vi tror på at de beste opplevelsene skjer utendørs"* — minimal, impactful.
- **CTA section:** Navy background, centered text, single large white button with orange hover state.
- **Footer:** Two-column: brand info left, four link columns right. Very clean, minimal.

---

### Variation 4 — `index-v4.html`: Fun & Illustrated (Most Kid-Friendly)

**Concept:** The most child-targeted design. Feels like a kids' app or cartoon brand. Parents scroll past it to find products but kids will love it.

- **Hero:** Solid gradient background (orange to deep yellow: `linear-gradient(135deg, #FF6B00, #FFD700)`). No photo in the hero at all — pure color. Headline is in two lines, first line white, second line dark (#0F172A). Below headline: three circular "age group" bubbles side by side (3–6 år, 7–10 år, 10–12 år) as large clickable bubbles with icons.
- **Colors:** Orange (#FF6B00), yellow (#FFD700), sky blue (#38BDF8), green (#4ADE80). Heavy use of rounded shapes.
- **Category section:** Background: soft yellow (#FFFBEB). Category cards use a large emoji icon at the top instead of a photo, then the photo below. E.g., ⛽ for gasoline, ⚡ for electric. Cards have a thick colored border (3px) matching category type.
- **Age filter:** Displayed as three large illustrated "bubble" sections at the top of the product grid — each bubble is a rounded rectangle with age, icon, and a short tagline. Clicking one filters the visible products (simple JS show/hide using data-age attributes).
- **Product cards:** Slightly taller cards. Image fills top 55%. Below image: a large colored band (matches age badge color) with the product name in white bold text. Price below in dark text.
- **Brand story section:** Replace with a "Why kids love it" section — 3 large icon cards in a row (🏆 Morsomt, 🛡️ Trygt, ⚡ Kraftig), each with a bold heading, short text, and a colored circular background behind the icon.
- **CTA banner:** Full-width with the atv-trail image as background, 60% orange overlay, centered bold white text and a single large white button.
- **Footer:** Orange background with white text. Very simple.

---

## Key Design Differences from Current Site

| Current (dark/WordPress) | New (bright/Next.js) |
|---|---|
| Black background | White background |
| Adult/industrial feel | Kid-friendly, bright colors |
| Tech specs as description | Short engaging description |
| Stacked image dump | Proper thumbnail gallery |
| No product tabs | Tabs: Beskrivelse / Video / Tekniske data |
| No age filtering | Age badges (3–6, 7–10, 10–12 år) |
| WordPress/WooCommerce | Next.js + Magento API |
