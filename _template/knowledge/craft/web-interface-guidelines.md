# Web Interface Guidelines

Distilled from Vercel's Web Interface Guidelines. A checklist for building
and reviewing frontend interfaces.

Source: https://vercel.com/design/guidelines

---

## Interactions

- All flows are keyboard-operable and follow WAI-ARIA authoring patterns
- Every focusable element has a visible focus ring; prefer `:focus-visible`
- Implement focus traps; move/return focus per WAI-ARIA patterns
- Hit targets: expand anything under 24px to minimum 24px (44px on mobile)
- Input font size >= 16px on mobile to prevent iOS Safari auto-zoom
- Never disable browser zoom
- Inputs must not lose focus or value after hydration
- Never disable paste on inputs or textareas
- Show loading indicator on buttons while keeping original label visible
- Loading states: 150-300ms show-delay, 300-500ms minimum visible time
- Encode filters, tabs, pagination in URL for sharing and back/forward
- Optimistic updates: update UI immediately, reconcile with server, provide undo on failure
- Destructive actions: require explicit confirmation or provide undo
- Set `touch-action: manipulation` on interactive controls
- No dead zones: if part of a control looks interactive, make the entire region interactive
- Use `<a>` or `<Link>` for navigation (enables Cmd+click, middle-click)
- Use polite `aria-live` regions for toasts and inline validation

## Animations

- Provide reduced-motion variant for `prefers-reduced-motion` users
- Prefer CSS > Web Animations API > JS libraries
- Use `transform` and `opacity`; avoid `width`, `height`, `top`, `left`
- Only animate to clarify cause/effect or add deliberate delight
- Choose easing based on what changes (size, distance, trigger)
- Animations must be interruptible by user input
- Animate in response to user actions; avoid autoplay
- Never use `transition: all` — list intended properties explicitly

## Layout

- Optical alignment: adjust by +/-1px when visual perception outweighs geometry
- Every element aligns intentionally to grid, baseline, edge, or optical center
- Test across mobile, laptop, and ultra-wide viewports
- Account for notches/insets using CSS `env()` safe-area variables
- Only render necessary scrollbars
- Prefer flexbox/grid/intrinsic layout over JS measurement

## Content

- Prefer inline explanations; use tooltips only as last resort
- Skeletons mirror final content exactly to avoid layout shift
- Page `<title>` reflects current context
- Every screen provides a next step or recovery path — no dead ends
- Design empty, sparse, dense, and error states explicitly
- Use curly quotes (" ") not straight quotes (" ")
- Use `font-variant-numeric: tabular-nums` for numerical comparisons
- Never rely on color alone; include text labels for status
- Provide text labels for icons; accessible names must always exist
- Use native semantic elements before ARIA attributes
- Use hierarchical `<h1-h6>` with "Skip to content" link
- Format dates, times, numbers per user locale

## Forms

- Enter submits single-input forms; Cmd/Ctrl+Enter submits textareas
- Every control has an associated `<label>`
- Keep submit button enabled until submission starts; disable during request with spinner
- Allow any input in numeric fields; show validation feedback instead of blocking
- Don't disable submit on incomplete forms; let submission surface errors
- Display errors next to affected fields; on submit, focus first error
- Set `autocomplete` and meaningful `name` attributes
- Disable spellcheck for emails, codes, usernames
- End placeholders with ellipsis; show example patterns
- Warn before navigation when data could be lost

## Performance

- Test iOS Low Power Mode and macOS Safari specifically
- Minimize re-renders using React DevTools or React Scan
- Test with CPU and network throttling enabled
- Batch DOM reads/writes; avoid unnecessary reflows
- POST/PATCH/DELETE should complete within 500ms
- Prefer uncontrolled inputs; optimize controlled input loops
- Virtualize large lists or use `content-visibility: auto`
- Preload above-the-fold images; lazy-load the rest
- Set explicit image dimensions to prevent CLS
- Preconnect to asset/CDN domains
- Preload critical fonts; subset with `unicode-range`

## Design

- Layer shadows: mimic ambient and direct light with 2+ shadow layers
- Combine borders and shadows; semi-transparent borders improve edge clarity
- Nested radii: child radius <= parent radius; curves align concentrically
- On non-neutral backgrounds, tint borders/shadows/text toward same hue
- Use color-blind-friendly palettes in charts and data viz
- Prefer APCA over WCAG 2 for contrast assessment
- `:hover`, `:active`, `:focus` states use higher contrast than rest state
- Set `<meta name="theme-color">` to match page background
- Set `color-scheme: dark` on `<html>` in dark themes

## Copywriting

- Use active voice and imperative actions
- Title Case for headings and buttons (Chicago style)
- Use `&` instead of "and" in interface copy
- Frame as what users do, not what they need
- Address users as "you"; avoid first person
- Use digits for counts ("8 deployments"), not spelled out
- Positive framing: tell users how to fix, not just what went wrong
- Use specific labels ("Save API Key") instead of vague ("Continue")
