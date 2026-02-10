# Accessibility

Not a checklist to pass — a lens to design through. Accessibility
improvements make products better for everyone.

## Foundations

- **Semantic HTML first.** Use `<button>`, `<a>`, `<label>`, `<table>`,
  `<nav>`, `<main>`, `<header>` before reaching for ARIA.
- **Keyboard navigable.** Every interactive element must be reachable
  and operable with keyboard alone.
- **Screen reader tested.** Navigate with VoiceOver (Mac: Cmd+F5) or
  NVDA (Windows). Does it make sense?
- **Color is not the only indicator.** Always pair color with text,
  icons, or patterns.

## WCAG Essentials

### Perceivable
- Text contrast ratio: 4.5:1 minimum (3:1 for large text)
- Consider APCA for more perceptually accurate contrast
- Images have alt text (descriptive, not "image of...")
- Video has captions; audio has transcripts
- Content is readable at 200% zoom

### Operable
- All functionality available via keyboard
- No keyboard traps — users can always tab away
- Focus order follows logical reading order
- Focus indicators are visible (never `outline: none` without replacement)
- Touch targets: minimum 44px on mobile, 24px on desktop
- Animations respect `prefers-reduced-motion`

### Understandable
- Page language is set (`<html lang="en">`)
- Forms have labels, validation is clear, errors explain what to fix
- Navigation is consistent across pages
- No unexpected context changes (auto-submitting, auto-redirecting)

### Robust
- Valid HTML
- ARIA used correctly (roles, states, properties)
- Works across browsers and assistive technologies

## Common Patterns

- **Skip links**: "Skip to content" link as first focusable element
- **Focus management**: Move focus to new content (modals, alerts, route changes)
- **Live regions**: `aria-live="polite"` for dynamic updates (toasts, validation)
- **Accessible names**: Every interactive element has a name. Use `aria-label`
  only when visible text isn't possible.
- **Heading hierarchy**: `h1` → `h2` → `h3`. Don't skip levels.

## Testing Checklist

- [ ] Tab through the entire page — can you reach and operate everything?
- [ ] Check with screen reader — does the content order make sense?
- [ ] Check color contrast — use browser dev tools or axe
- [ ] Zoom to 200% — does the layout still work?
- [ ] Test with `prefers-reduced-motion` enabled
- [ ] Check all images for meaningful alt text
- [ ] Verify form labels and error messages
