# PADELTECH — ספר הפעלה לקורסר

## הכנה (פעם אחת)
1. העתיקו את התיקייה `.cursor/rules/` לשורש הריפו (שני קבצי `.mdc`: עיצוב ושפה).
2. פתחו ענף: `git checkout -b design-system`
3. בקורסר: Agent mode, מודל חזק, והפעלה של שלב אחד בכל פעם. אחרי כל שלב:
   `npm run typecheck && npm run build`, מבט בדפדפן (`/he` + `/en`, דסקטופ + מובייל), ואז commit.
4. בתחילת כל פרומפט כתבו `@padeltech-design.mdc` ו/או `@padeltech-voice.mdc`, כדי שהכללים ייטענו בוודאות.

> שימו לב: הריפו רץ על Next.js 16. ה־`AGENTS.md` מחייב לקרוא את התיעוד ב־`node_modules/next/dist/docs/` לפני כתיבת קוד — אל תתנו לקורסר לדלג על זה.

---

## שלב 0 — תשתית (לפני עיצוב)
```
Read AGENTS.md and the relevant Next.js 16 docs in node_modules/next/dist/docs/ first.
Then fix these pre-launch issues, one commit each:
1. Self-host the font: install @fontsource-variable/heebo, import it in app/layout.tsx, remove next/font/google,
   and set --font-sans to "Heebo Variable", ui-sans-serif, system-ui, sans-serif.
2. metadataBase in app/layout.tsx is hardcoded to http://127.0.0.1:4321. Read it from NEXT_PUBLIC_SITE_URL
   (fallback to localhost in dev) and add the variable to .env.example.
3. app/layout.tsx references /favicon.png but only public/favicon.svg exists. Point icons to the SVG.
4. Migrate middleware.ts to the new "proxy" convention per the Next 16 deprecation notice.
5. Fix `npm run lint` (eslint-plugin-react crashes on ESLint 10 with getFilename). Pin compatible versions.
Do not change any visual design or copy in this step.
```
**ידני:** להעלות את `public/brand/` לריפו (או ל־CDN). כרגע התמונות, הלוגו והווידאו לא נמצאים ב־GitHub, ולכן פריסה מהריפו תיראה שבורה. לווידאו כבד (`hero.mp4`) עדיף Git LFS או אחסון חיצוני.

---

## שלב 1 — טוקנים
```
@padeltech-design.mdc
Rewrite the :root and .dark blocks in app/globals.css exactly per the Tokens section of the rule.
Rename --navy → --ink, --cream → --paper across the codebase (including @theme inline: --color-ink, --color-paper,
--color-lime, --color-stone). Delete the navy dark palette. Keep shadcn semantic names working.
Then grep the repo for any remaining hex colours outside globals.css and replace them with tokens.
Show me the grep result at the end (should be empty).
```

## שלב 2 — טיפוגרפיה
```
@padeltech-design.mdc
Add the type-* utilities from the rule to app/globals.css (@layer utilities).
Then replace EVERY arbitrary text-[…] and tracking-[…] class in components/ and app/ with the matching type-* utility
(small uppercase tracked labels → type-eyebrow; section titles → type-h2; hero → type-display; body → type-body/lead).
Remove `uppercase` and wide tracking from anything that renders Hebrew.
List every file you changed and the mapping you used.
```

## שלב 3 — קומפוננטות בסיס
```
@padeltech-design.mdc
Create components/brand/: Section, Container, SectionHeader, SimBadge, SpecStat — per the Components section.
Extend components/ui/button.tsx with variants default / accent / outline / link and the sizes in the rule (radius 0).
Refactor every components/home-*.tsx and app/[locale]/*/page.tsx to use Section + Container + SectionHeader
instead of their own padding/heading markup. Visual result should be consistent spacing on every section.
Replace every ad-hoc "הדמיה" label with <SimBadge/>.
Replace physical direction classes (ml/mr/pl/pr/left/right/text-left/text-right) with logical ones.
```

## שלב 4 — תמונות ומצב כהה
```
@padeltech-design.mdc
1. Make sure every image uses next/image with sizes, locale alt text, and a bg-ink placeholder wrapper,
   so a missing file shows a clean charcoal block, not a broken-image icon.
2. Charcoal sections should use className="dark" on <Section tone="dark"> and inherit tokens — remove hardcoded
   bg-[…]/text-[…] from those sections.
3. Check contrast: no lime text on paper anywhere; at most one lime element per viewport.
```

## שלב 5 — שפה ותוכן
```
@padeltech-voice.mdc
Rewrite lib/copy.ts (both he and en) to follow the voice rule:
- apply the Glossary, CTA vocabulary and Navigation labels exactly;
- hero, and each homepage block, per the Message map;
- remove WPT references (FIP only); remove internal planning language;
- full natural sentences in body text, Hebrew typography (״ ׳ ־ –), plural "אתם" throughout;
- English = rewritten meaning, sentence case, no ALL CAPS strings.
Keep all existing keys the components use (add new keys if needed, delete unused ones only after checking usage).
Output a before/after table of every Hebrew string you changed so I can review it.
```
**ידני:** לעבור על הטבלה ולתקן ניסוחים לפני commit. זה הטקסט של המותג, ולא כדאי לאשר אותו אוטומטית.

## שלב 6 — מבנה דף הבית
```
@padeltech-voice.mdc @padeltech-design.mdc
Restructure app/[locale]/page.tsx to the 10-block Message map in the voice rule.
Re-use the existing but currently unused components (HomePlay, HomeWellness, HomeGroups, HomeSignup, region-picker)
instead of writing new ones. Interest cards and region picker should scroll to the signup form with the choice preselected.
Move the full FIP spec section (HomeStandard) to /partners; on the homepage keep only 3–4 player-facing benefits.
The primary CTA everywhere ("שמרו לי מקום") scrolls to / opens the signup.
```

## שלב 7 — כנות בהזמנה
```
@padeltech-voice.mdc
Until NEXT_PUBLIC_BOOKING_URL is set, /book must not simulate a checkout: remove the payment step UI,
show "How it will work" (the 4 steps) + the signup form. When the env var exists, the booking CTAs link to it
and their label switches to "הזמינו מגרש / Book a court" via one copy key.
Update every "הזמינו מגרש" CTA to use this switch.
```

## שלב 8 — פרטיות וטפסים
```
@padeltech-voice.mdc
Add /[locale]/privacy (he + en) — a clear plain-language privacy page: what we collect in the forms,
why, where it is stored, how long, how to ask for deletion, contact email placeholder {{PRIVACY_EMAIL}}.
Link it from the footer and from every consent checkbox. Consent checkboxes default to unchecked.
Rewrite form labels, errors and success messages per the Forms & microcopy section.
```
**ידני:** שהעורך דין או היועץ שלכם יעבור על עמוד הפרטיות. בנוסף, להחליף את האחסון מ־`data/inquiries.json` לאחסון עמיד (למשל Supabase, Google Sheets או Airtable) לפני שהאתר עולה ל־Vercel.

## שלב 9 — בדיקה סופית
```
@padeltech-design.mdc @padeltech-voice.mdc
Audit the whole site against both rules and report violations as a checklist (file:line → rule → fix),
then fix them. Also check: keyboard navigation and focus rings, 44px hit areas, <html lang/dir> per locale,
reduced-motion, no horizontal scroll at 360px, Lighthouse accessibility ≥ 95 on /he.
```

---

## צ'קליסט לבדיקה בעין אחרי כל שלב
- [ ] `/he` ו־`/en` נראים אותו דבר חוץ מהכיוון
- [ ] אין ריווח אותיות מוגזם בעברית ואין אותיות רישיות בכותרות קטנות בעברית
- [ ] לכל היותר אלמנט ליים אחד על המסך
- [ ] אין פינות מעוגלות ואין צלליות
- [ ] אין הבטחה להזמנה, למחיר או למיקום שלא אושרו
- [ ] כל קריאה לפעולה מובילה לטופס או לעמוד שעובדים
