# Leo Club of Millaniya — website

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4

**Design concept: *Village Weave*.** A rural club in the Kalutara district. The
system borrows from handloom: **woven bands** separate sections in place of
rules, panels carry **asymmetric corner radii** (nothing handmade is
symmetrical), and the palette is dye colours — terracotta, ochre and deep green
on undyed cream.

Photography is the loudest element on the page, because the work is about people
and the people are the point.

One of eleven independently designed club sites in Leo District 306 D2. It
shares no design code with the others; only `lib/` is common.

---

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run typecheck
npm run lint
```

Node 20.9+ required.

---

## Where things live

| Path | What it is |
|---|---|
| `app/` | Routes, layout, metadata, sitemap, robots |
| `app/globals.css` | **The entire design system** — palette, weave, corners, motion |
| `components/` | Components bespoke to this club |
| `content/` | All club content. Normal edits touch only this |
| `lib/` | Domain types, utilities, hooks. Identical across all eleven clubs |

---

## The design system

Tokens live in the `@theme` block at the top of `app/globals.css`, named by
**role** rather than hue.

| Token | Value | Used for |
|---|---|---|
| `--color-page` | `#faf5ec` | Undyed cream ground |
| `--color-panel` | `#f2e9d9` | Story panels, alternate bands |
| `--color-ink` | `#2b2118` | Text |
| `--color-accent` | `#b4553a` | Terracotta — links, buttons, all interaction |
| `--color-warm` | `#d69a3c` | Ochre. A backing tone. **Never body text** |
| `--color-inverse` | `#2f4a32` | Deep green — figures band and footer |

Type: Bitter (slab serif headings) + Nunito Sans (body), self-hosted via
`next/font`. Bitter's soft terminals read as warm and printed rather than
corporate.

### Signature classes

- `.weave` — the handloom stripe that separates sections. Rendered entirely in
  CSS gradients, so it costs nothing to load and never pixelates. Wrapped by
  `components/Weave.tsx`, which marks it `aria-hidden` as decoration.
- `.organic` / `.organic-alt` — the asymmetric corner radii, mirrored. **Alternate
  them down a list** — that is what stops a row of photographs reading as a grid
  of identical tiles. `Photo` takes an `alt` prop for exactly this.
- `.wrap`, `.measure`, `.band`, `.reveal`.

### The story panel

`components/StoryPanel.tsx` overlaps the text panel onto the lower corner of the
photograph, and alternates sides down the page. The overlap is deliberate: in a
village club the people and the work are not separable, so the copy does not get
its own tidy column beside the photograph — it sits on top of it.

---

## Editing content

### Add a project

Append to `content/projects.ts`:

```ts
{
  id: 'well-repair',
  slug: 'well-repair',
  title: 'Well Repair',
  summary: 'One sentence for listings.',
  story: ['Paragraph one.', 'Paragraph two.'],
  category: 'community-service',
  year: '2025/26',
  date: '2026-02-14',
  location: 'Millaniya',
  featured: true,                 // shows on the home page
  heroImage: { src: '/images/projects/well-repair.jpg',
               alt: 'Describe what is happening', width: 1600, height: 1200 },
  impact: [{ id: 'households', value: 46, label: 'Households' }],
}
```

### Add a board member

Append to `content/board.ts`. Ordering is automatic from `rank`.

### Add images

Use real `width`/`height` — those two fields stop the page jumping as images
load. `.jpg`/`.webp` only; **HEIC does not render in browsers.**

---

## Standards this site holds to

- One `<h1>` per page; per-route `<title>`, description, canonical and OG tags.
- Every image through `next/image` inside an aspect-ratio box, with `alt`.
- Keyboard-operable menu: `aria-expanded`/`aria-controls`, Escape closes and
  returns focus, visible focus ring, skip-to-content link.
- `prefers-reduced-motion` respected; all content readable with JavaScript off.
- `typedRoutes` on — a link to a route that does not exist **fails the build**.
- `images.remotePatterns` deliberately empty.
- The membership form composes a real pre-filled email.

---

## Deploying

Every route prerenders. Set `siteUrl` in `content/club.ts`, then
`npm run build && npm start`.

## Outstanding content

Everything marked `TODO(content)` needs real values. Images in `public/images/`
are generated solid-colour placeholders. The site renders correctly while these
are incomplete.

One copy note: the Handloom Market project states weaver income rose 68% and
that the club contributed no money. Both are specific claims made on the club's
behalf — verify before launch.
