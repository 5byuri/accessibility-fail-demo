# Coverage map

This is a practical map of the demo pages to WCAG-style problem areas. The mapping is intentionally approximate because Pa11y output depends on runner (`htmlcs` vs `axe`), runner versions, browser behavior, viewport, and scan configuration.

| Page | Example category | Likely WCAG area | Detection expectation |
|---|---|---|---|
| `all-in-one.html` | Mixed common failures | Many A/AA/AAA areas | Many automated findings |
| `01-document-language.html` | Missing `lang`, missing title | 3.1.1, 2.4.2 | Automated |
| `01-document-language.html` | Disabled zoom in viewport | 1.4.4 / mobile zoom practices | Automated in axe |
| `01-document-language.html` | Duplicate IDs / broken ARIA references | 4.1.2, compatibility | Automated |
| `01-document-language.html` | Empty heading / heading jump | 1.3.1, 2.4.6 | Automated or warning |
| `02-text-images-media.html` | Image missing `alt` | 1.1.1 | Automated |
| `02-text-images-media.html` | Informational image with empty `alt` | 1.1.1 | Manual judgment may be needed |
| `02-text-images-media.html` | Empty image-only link | 2.4.4, 4.1.2 | Automated |
| `02-text-images-media.html` | `input type=image` with no alt | 1.1.1, 4.1.2 | Automated |
| `02-text-images-media.html` | Iframe without title | 2.4.1 / 4.1.2 | Automated |
| `02-text-images-media.html` | SVG/canvas without text alternative | 1.1.1 | Automated or partial |
| `02-text-images-media.html` | Video/audio without captions/transcripts | 1.2.1-1.2.5 | Usually manual |
| `03-forms.html` | Unlabelled inputs/selects/textareas | 1.3.1, 3.3.2, 4.1.2 | Automated |
| `03-forms.html` | Fieldset without legend | 1.3.1, 3.3.2 | Automated or warning |
| `03-forms.html` | Required indicated by color only | 1.4.1, 3.3.2 | Usually manual/partial |
| `03-forms.html` | Invalid `autocomplete` token | 1.3.5 | Automated in axe |
| `03-forms.html` | Errors not programmatically associated | 3.3.1, 3.3.3 | Manual/partial |
| `04-keyboard-navigation.html` | Empty links | 2.4.4, 4.1.2 | Automated |
| `04-keyboard-navigation.html` | Positive tabindex | 2.4.3 | Automated |
| `04-keyboard-navigation.html` | Removed focus indicator | 2.4.7, 2.4.11, 2.4.13 | Manual/partial |
| `04-keyboard-navigation.html` | Mouse-only fake controls | 2.1.1, 2.1.3 | Manual/partial |
| `04-keyboard-navigation.html` | Dragging without keyboard alternative | 2.5.7 | Manual/partial |
| `05-structure-tables.html` | Heading order and empty headings | 1.3.1, 2.4.6 | Automated/warning |
| `05-structure-tables.html` | Invalid list children | 1.3.1 | Automated |
| `05-structure-tables.html` | Multiple/nested main landmarks | 1.3.1, 2.4.1 | Automated |
| `05-structure-tables.html` | Data table header issues | 1.3.1 | Automated/partial |
| `06-aria-widgets.html` | Invalid ARIA roles/states/properties | 4.1.2 | Automated |
| `06-aria-widgets.html` | Missing required ARIA state | 4.1.2 | Automated |
| `06-aria-widgets.html` | Broken `aria-labelledby` / `aria-describedby` | 4.1.2 | Automated |
| `06-aria-widgets.html` | `aria-hidden` focusable content | 4.1.2 / keyboard exposure | Automated |
| `06-aria-widgets.html` | Unnamed dialog / role image | 4.1.2, 1.1.1 | Automated |
| `07-visual-cognitive.html` | Low contrast | 1.4.3, 1.4.6 | Automated |
| `07-visual-cognitive.html` | Disabled zoom | 1.4.4 / mobile practices | Automated in axe |
| `07-visual-cognitive.html` | Tiny targets | 2.5.8 | Automated/partial depending on runner version |
| `07-visual-cognitive.html` | Moving content without pause | 2.2.2 | Usually manual |
| `07-visual-cognitive.html` | Reflow and text spacing traps | 1.4.10, 1.4.12 | Manual/partial |
| `07-visual-cognitive.html` | Hover-only content | 1.4.13 | Manual/partial |
| `08-status-authentication.html` | Status update not announced | 4.1.3 | Manual/partial |
| `08-status-authentication.html` | Timeout without user control | 2.2.1 | Manual |
| `08-status-authentication.html` | Redundant entry | 3.3.7 | Manual |
| `08-status-authentication.html` | Cognitive-function authentication puzzle | 3.3.8, 3.3.9 | Manual |
| `08-status-authentication.html` | Language change not marked | 3.1.2 | Manual/partial |
| `08-status-authentication.html` | Ambiguous repeated “read more” links | 2.4.4, 2.4.9 | Manual/partial |

## What is not possible to guarantee

- “Every WCAG violation” is not a finite artifact. WCAG success criteria can be failed in countless content-specific ways.
- Some success criteria are not meaningfully testable by static scanning, such as caption accuracy, sequence meaning, consistency of help, focus order usefulness, authentication burden, and whether alternative text is actually equivalent.
- Automated tools differ. A page may trigger an axe rule but not an HTML CodeSniffer rule, or vice versa.
