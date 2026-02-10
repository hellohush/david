---
name: using-skills
description: >
  Load at session start. Establishes how to find and apply skills.
  Every response must check for applicable skills first.
---

# Using Skills

Before ANY response — including clarifying questions — check if
a skill applies.

## Skill Matching

- "Let's brainstorm..." / "What if we..." / "How should we approach..." → product-brainstorming
- "Review this design..." / "What do you think of..." / "Critique this..." → design-critique
- "Write the copy for..." / "What should this button say..." / "Error message for..." → ux-copy-writing
- "Help me write a message to..." / "How should I tell the client..." / "Draft an email..." → message-crafting
- "Walk through this flow..." / "Check this user journey..." → design-review
- "Here are the interview notes..." / "What patterns do you see..." → user-research-synthesis
- After completing any task → self-improvement (brief friction check)

## Rules

1. If a skill matches, load it BEFORE responding. Not after. Not optionally.
2. Follow the skill's process exactly — every step, every checklist item.
3. If no skill matches, respond normally but stay in character (SOUL.md).
4. If multiple skills could match, ask which angle Hannah wants.
5. Never announce "loading a skill" — just follow its process naturally.

## External Skill Triggers

When the task involves building or refining frontend code, check if a
UI Skills package would help before starting implementation:

- "Build this component/page..." → consider installing frontend-design
- "Clean up this UI..." → consider installing baseline-ui
- "Check accessibility..." → consider installing fixing-accessibility
- "Add animation/transitions..." → consider installing animation-principles

Announce: "Installing [ui-skill] for this implementation step."
The external skill handles the craft; your own skills handle the
product thinking that wraps around it.
