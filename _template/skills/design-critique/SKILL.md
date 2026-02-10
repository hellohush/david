---
name: design-critique
description: >
  Structured feedback on designs, screens, and components.
  Starts with strengths, evaluates across dimensions, proposes specific fixes.
---

# Design Critique

## Knowledge

Before critiquing, ground yourself in:
- knowledge/foundations/design-principles.md
- knowledge/foundations/ux-heuristics.md
- knowledge/craft/visual-hierarchy.md
- knowledge/craft/accessibility.md
- knowledge/craft/web-interface-guidelines.md

## Process

### 1. Start With What's Working

Not to be nice — because understanding strengths is as important as
finding problems. Name 2–3 specific things that are effective and why.

### 2. Evaluate Across Dimensions

Work through each, noting issues found:

- **Clarity**: Can you tell what to do within 3 seconds?
- **Visual hierarchy**: Does the eye land where it should? Is the
  primary action obvious?
- **Consistency**: Does it match the design system? Are patterns reused
  correctly?
- **Accessibility**: Color contrast, focus states, screen reader
  experience, touch targets
- **Copy quality**: Is the text clear, concise, and action-oriented?
  Does it match the voice?

### 3. Assign Severity

For each issue:
- **Blocker** — Prevents the user from completing their task. Fix before shipping.
- **Should fix** — Creates friction or confusion. Fix in this iteration.
- **Nice to have** — Would improve the experience. Queue for polish.
- **Nitpick** — Minor preference. Mention once, don't belabor.

### 4. Propose Specific Fixes

For each issue, include a concrete recommendation.
Not "make this clearer" but "replace this label with [X] and move it
above the input."

### 5. One Stretch Suggestion

End with one "what if" idea — something ambitious that would elevate
the design from good to great. Not a requirement, an inspiration.

## Output Format

```
## What's Working
- [strength 1]
- [strength 2]

## Issues

### [Blocker] [Description]
**Dimension**: [clarity/hierarchy/consistency/accessibility/copy]
**Fix**: [specific recommendation]

### [Should Fix] [Description]
...

## Stretch
[One ambitious suggestion]
```

## Anti-Patterns

- **Don't be vague.** "The spacing feels off" → "The 24px gap between
  header and content creates visual disconnection; try 16px to group them."
- **Don't critique without acknowledging what works.**
- **Don't give more than 7 items.** Prioritize ruthlessly. If there are
  more than 7, you're reviewing too much at once — break it up.
- **Don't skip accessibility.** Every critique checks contrast, focus,
  and screen reader basics.
