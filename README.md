# Pa11y WCAG Violation Demo Site

This is an intentionally inaccessible static website for Pa11y, Pa11y CI, axe, and HTML CodeSniffer demonstrations.

It is **not** a legal WCAG conformance benchmark and it does **not** contain “every possible WCAG violation.” WCAG failures are contextual: some depend on media accuracy, reading order, task flow, timing, user input, authentication design, language changes, and assistive technology behavior. Automated tools can only detect a subset.

## What is included

- `index.html` — start page and local instructions.
- `pages/all-in-one.html` — one URL with many common automated failures.
- `pages/01-document-language.html` — missing language/title, viewport, duplicate IDs, document-level issues.
- `pages/02-text-images-media.html` — missing alt text, icon links, iframe/SVG/canvas/media examples.
- `pages/03-forms.html` — missing labels, bad fieldsets, invalid autocomplete, inaccessible error patterns.
- `pages/04-keyboard-navigation.html` — empty links, positive tabindex, focus suppression, mouse-only controls.
- `pages/05-structure-tables.html` — heading jumps, empty headings, bad lists, extra landmarks, table issues.
- `pages/06-aria-widgets.html` — invalid ARIA roles/states, broken references, hidden focusable elements.
- `pages/07-visual-cognitive.html` — low contrast, disabled zoom, tiny targets, moving content, reflow traps.
- `pages/08-status-authentication.html` — status/authentication/cognitive examples that often need manual review.
- `pages/good-reference.html` — a small mostly accessible comparison page.
- `.pa11yci` — Pa11y CI config for scanning every page with both `axe` and `htmlcs`.
- `coverage.md` — a practical map of example categories to likely WCAG success criteria.

## Run locally

Install dependencies:

```bash
npm install
```

Start the local static server:

```bash
npm run serve
```

If you prefer not to use `http-server`, use Python’s built-in server:

```bash
npm run serve:python
```

In another terminal, scan all pages:

```bash
npm run test:all
```

Scan the all-in-one page only:

```bash
npm run test:one
```

Compare runners:

```bash
npm run test:htmlcs
npm run test:axe
```

Run directly without npm scripts:

```bash
npx pa11y http://localhost:8080/pages/all-in-one.html \
  --runner axe \
  --runner htmlcs \
  --standard WCAG2AAA \
  --include-warnings \
  --include-notices
```

## Notes for demos

1. Run with `--runner axe --runner htmlcs` to show that different engines report different issues.
2. Run with and without `--include-warnings --include-notices` to explain result severity.
3. Use the manual-heavy page to show that automated accessibility testing is necessary but incomplete.
4. Keep this fixture private or clearly labeled; it is deliberately hostile to users with disabilities.

## Extending the fixture

Add new pages under `pages/`, add them to `.pa11yci` and `sitemap.xml`, and document expected rule categories in `coverage.md`.
