# Divcom Nursery & Primary School — Website

Built with Next.js 16, React 19 and Tailwind CSS 4.

## Run it locally

```bash
npm install      # first time only
npm run dev      # then open http://localhost:3000
```

Production build: `npm run build && npm start`

## Editing content

All text lives in **`lib/content.ts`**: contact details, class levels, subjects,
staff, testimonials, news, term dates, FAQs and more. Anything marked
`PLACEHOLDER` is sample text to replace with real information.

- **Email:** set `school.email` once the official address is ready. It then appears in the footer and on the Contact page.
- **Social media:** replace the `"#"` links in `school.social`.
- **Motto / mission / vision:** `school.motto`, `mission`, `vision`.
- **About page timeline and history:** `app/about/page.tsx`.

## Adding photos

1. Put image files in `public/images/` (for example `public/images/hero.jpg`).
2. In `lib/content.ts`, add `src` to the matching photo, e.g.
   `hero: { src: "/images/hero.jpg", alt: "Smiling Divcom pupils" }`.

Any photo without a `src` shows a branded pink/blue placeholder labelled with
what belongs there. Gallery photos are added to the `gallery` list.

## Logo

The crest in `components/Logo.tsx` and `app/icon.svg` is a placeholder. Swap it
for the official logo when available.

## Enquiry forms

There's no school email or server yet, so the admission and contact forms open
WhatsApp with the parent's details pre-filled, addressed to +234 708 668 7105.
They can later be connected to an email service instead.
