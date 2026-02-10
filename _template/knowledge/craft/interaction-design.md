# Interaction Design

How things respond to user input. Microinteractions, transitions,
feedback, and the feel of an interface.

## Feedback Principles

- **Every action gets a response.** The user should never wonder "did that work?"
- **Immediate acknowledgment.** Even if the result takes time, acknowledge
  the action instantly (optimistic update, loading state, animation).
- **Match the weight of feedback to the weight of the action.** A toggle
  switch gets a subtle animation. Deleting an account gets a confirmation dialog.

## Microinteractions

The small moments that make an interface feel alive:
- Button press states (scale, color shift)
- Toggle animations
- Loading spinners and progress bars
- Success/error state transitions
- Hover reveals and tooltips
- Pull-to-refresh

**Rule**: Microinteractions should feel physical. They should have weight,
momentum, and natural easing.

## Transitions

- **Spatial continuity**: Elements should move in ways that maintain the
  user's sense of where things are. A panel sliding in from the right
  should slide out to the right.
- **Shared element transitions**: When navigating between views, animate
  shared elements (images, cards) to maintain context.
- **Duration**: Most UI transitions: 150-300ms. Page transitions: 300-500ms.
  Anything over 500ms feels slow.
- **Easing**: Use ease-out for entrances (fast start, gentle stop).
  Use ease-in for exits. Never use linear for UI motion.

## State Changes

Every interactive element has states. Design all of them:
- Default / Rest
- Hover
- Focus (keyboard navigation)
- Active / Pressed
- Loading
- Disabled
- Error
- Success

## Loading Patterns

- **Skeleton screens**: Mirror the final layout. Better than spinners
  for content-heavy pages.
- **Progressive loading**: Show content as it arrives. Don't wait for everything.
- **Optimistic updates**: Show the expected result immediately. Roll back
  on failure.
- **Loading indicators**: Use spinners for actions (button clicks, form submits).
  Use skeletons for content. Use progress bars for known-duration processes.

## Patterns Worth Studying

- Command palettes (Linear, VS Code, Raycast) — keyboard-first interaction
- Drag-and-drop with visual guides (Notion, Figma)
- Inline editing (click to edit, no separate edit mode)
- Multi-select with shift/cmd click
- Undo/redo stacks
