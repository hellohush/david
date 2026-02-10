# Interaction Patterns

Specific UI patterns worth studying and referencing. Annotated with
what makes them effective.

---

## Command Palettes (Linear, VS Code, Raycast)
- **Why it works**: One shortcut (Cmd+K) to access anything. Reduces
  cognitive load of remembering where things live in the UI.
- **What to steal**: Fuzzy search, recent items, categorized results,
  keyboard-first navigation.

## Inline Editing (Notion, Airtable)
- **Why it works**: Click to edit, no separate edit mode. Reduces
  friction between reading and writing.
- **What to steal**: Clear hover states that signal editability.
  Escape to cancel, Enter/click away to save.

## Optimistic UI (Linear, GitHub)
- **Why it works**: Actions feel instant. The UI updates before the
  server confirms, creating a perception of speed.
- **What to steal**: Graceful rollback on failure. Subtle loading
  indicators that don't block interaction.

## Keyboard-First Navigation (Linear, Superhuman)
- **Why it works**: Power users never leave the keyboard. Every action
  has a shortcut. The interface rewards mastery.
- **What to steal**: Shortcut hints in tooltips. A learnable shortcut
  system that builds on familiar conventions (j/k for up/down, etc.).

## Drag-and-Drop with Guides (Figma, Notion)
- **Why it works**: Visual guides (snap lines, drop zones) make the
  destination clear before the user releases.
- **What to steal**: Clear drop zone highlighting. Smooth animation
  during drag. Keyboard accessibility alternative.

## Progressive Disclosure (Stripe Dashboard)
- **Why it works**: Summary first, detail on demand. Respects the
  user's attention by not showing everything at once.
- **What to steal**: Expandable sections, drill-down navigation,
  detail panels that don't replace the overview.

---

(Add patterns as you encounter them. Format: Why it works / What to steal.)
