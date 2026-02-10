# Component Patterns

Reusable patterns worth knowing when evaluating or designing components.

## Composition Principles

- **Single responsibility**: Each component does one thing well.
- **Props for variation, not new components**: A `Button` with a `variant`
  prop, not `PrimaryButton` and `SecondaryButton`.
- **Children for content, props for behavior**: Pass content as children,
  control behavior with props.
- **Compound components**: Related components that work together
  (e.g., `<Tabs>`, `<TabList>`, `<Tab>`, `<TabPanel>`).

## Common Patterns

### Disclosure (Accordion, Collapsible)
- Controlled and uncontrolled variants
- Accessible: `aria-expanded`, `aria-controls`
- Animate height (not `display: none` toggle)

### Modal / Dialog
- Focus trap: tab stays inside the modal
- Return focus to trigger on close
- Close on Escape, optional close on backdrop click
- `aria-modal="true"`, `role="dialog"`

### Dropdown / Menu
- Opens on click (not hover for menus with actions)
- Keyboard: Arrow keys navigate, Enter selects, Escape closes
- Position: auto-flip when near viewport edges
- `role="menu"`, `role="menuitem"`

### Toast / Notification
- Auto-dismiss with generous timeout (5-8 seconds)
- Dismissible manually
- `aria-live="polite"` for non-urgent, `aria-live="assertive"` for critical
- Stack from bottom or top, don't obscure primary content

### Form Field
- Label, input, helper text, error message — always in that order
- Error replaces helper text, doesn't stack
- Validation on blur or submit, not on keystroke

## Design System Decisions

Questions to answer when building a component library:
- **Token-based or hardcoded?** Tokens for anything that might change (colors, spacing, type).
- **Responsive strategy?** Container queries vs. media queries vs. prop-based.
- **Dark mode approach?** CSS custom properties with theme switching.
- **Animation strategy?** CSS transitions for simple, JS for complex. Always respect `prefers-reduced-motion`.
