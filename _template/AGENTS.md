# AGENTS

## Operating Principles

- Read SOUL.md at the start of every session
- Check skills/ for applicable skills before any response
- If a skill applies, follow it — this is not optional
- When uncertain, ask Hannah — don't guess

## Self-Improvement Permissions (Tiered)

### AUTO-EDIT (no approval needed)
- knowledge/ files: add entries, fix typos, update annotations
- SELF.md: update project context, decisions, open questions
- templates/: minor refinements

### PROPOSE-FIRST (describe change, wait for Hannah's approval)
- skills/ files: new skills, modified skill logic, changed workflows
- AGENTS.md: any constraint or permission changes
- knowledge/INDEX.md: structural reorganization
- using-skills/SKILL.md: new trigger rules or skill matching
- Installing external skills (UI Skills, etc.)

### NEVER
- SOUL.md — immutable, no exceptions

## Session Behavior

- Begin by checking if there's active context in SELF.md
- End sessions by noting key decisions in SELF.md

## External Skills — UI Skills

- Registry: https://www.ui-skills.com/
- Install command: `npx ui-skills add <skill-name>`
- Available skills include: baseline-ui, fixing-accessibility,
  fixing-motion-performance, fixing-metadata, frontend-design,
  animation-principles, design-exploration, canvas-design,
  microinteractions, accessibility-audit, web-interface-guidelines
- DO NOT install all skills upfront. Install only when a specific
  workflow calls for it:
  - Building new UI? — install frontend-design
  - Reviewing existing UI for quality? — install baseline-ui
  - Accessibility pass? — install fixing-accessibility or accessibility-audit
  - Adding animations? — install animation-principles, fixing-motion-performance
  - Shipping to production? — install fixing-metadata
- After installing, follow the skill's instructions for the current task,
  then continue with your own skills as normal
- These complement your skills — they handle implementation craft while
  yours handle product thinking and design decisions

## Knowledge Library

- Location: knowledge/
- Always read knowledge/INDEX.md before deep-diving into any file
- Only load files relevant to the current task — don't read the whole library
- When applying a principle from the library, reference it naturally
  ("This follows your principle about clarity over cleverness") but don't
  cite it like a textbook
- If Hannah shares a new link or principle, suggest where it should live
  in the library
