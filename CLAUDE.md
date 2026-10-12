@AGENTS.md

# Divcom Nursery & Primary School website

Marketing site for a nursery & primary school at 75 Efunlaruja Street, Ori-Okuta, Ikorodu, Lagos (founded 2011). Brand colours: pink and blue. Design benchmark: top British/American school sites (Eton, Sidwell Friends) — editorial serif headings, generous whitespace, stat callouts, testimonials, news cards.

## Owner's decisions
- Classes: Nursery 1–2, KG, Basic 1–5. All subjects incl. French and Music. Mention after-school care; don't list school hours or curriculum type.
- Never show fees — use "contact us for enquiries".
- Content is hardcoded for now (`lib/content.ts`); items marked PLACEHOLDER are sample data the owner will replace.
- Photos are placeholders until the owner supplies real ones (set `src` on the photo slot; files go in `public/images/`).
- Official email not ready yet (`school.email` is empty, so it's hidden). Social links are "#".
- Forms submit via WhatsApp (+2347086687105) since there's no email/backend yet.
- Hosting: going up as a shareable preview (GitHub + Vercel planned) while unfinished. `PREVIEW_MODE` in `lib/content.ts` blocks search engines (robots.txt + noindex) and shows the "Preview" strip; set it to `false` at launch. Domain still deferred.

## Notes
- `cacheComponents` is on: don't call `new Date()` in server render paths; use a `"use cache"` helper like `lib/years.ts`.
- `lib/content.ts` is imported by client components, so keep server-only code out of it.
- Custom utilities (`btn`, `eyebrow`, `container-x`, etc.) are defined with `@utility` in `app/globals.css`.
