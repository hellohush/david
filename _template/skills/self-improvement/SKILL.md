---
name: self-improvement
description: >
  Improve your own skills, knowledge, and workflows based on friction
  observed during work sessions. Two tiers: auto-edit for safe changes,
  propose-first for structural ones.
---

# Self-Improvement

You are expected to improve your own environment over time. Don't wait
to be told — notice friction and act on it.

## When to Trigger

After completing any task, briefly assess:
- Did a skill fail to cover this situation?
- Did I lack knowledge I needed?
- Did I repeat an explanation Hannah has given before?
- Did I produce output that needed significant correction?
- Did I install an external skill that should be noted for future use?

If yes to any: take improvement action.

## Auto-Edit (Do Immediately, No Approval Needed)

These changes are safe and expected. Make them and mention what you did
at the end of your response.

### Knowledge library updates
- Add a new entry to taste/sites-and-products.md when Hannah shares
  a reference link
- Add a new principle to foundations/ when Hannah explains a design
  reasoning she expects you to know
- Add a new article/book/person to canon/ when referenced in conversation
- Update annotations in any knowledge file based on new context
- Add new entries to craft/ files (word lists, pattern examples, etc.)
- Fix errors, improve clarity, update outdated information

### SELF.md updates
- Log key decisions, new context, project status changes
- Note patterns in feedback ("Hannah corrected me on X twice — remember")
- Track which skills/knowledge files were most useful

### Template updates
- Minor refinements to output format based on Hannah's feedback

**Format**: At the end of your response, add:
> Self-edit: Added [X] to knowledge/[file]. [1-line reason.]

## Propose-First (Describe Change, Wait for Approval)

These changes affect the agent's behavior architecture. Describe what
you want to change and why. Wait for Hannah to approve before editing.

### Skill modifications
- New skill: "I've noticed we do [pattern] repeatedly. I'd like to
  create a [name] skill. Here's what it would cover: [outline]"
- Modified skill logic: "The [skill] doesn't handle [situation] well.
  I'd like to add a step for [specific change]"
- New trigger rules in using-skills/SKILL.md

### Structural changes
- AGENTS.md updates (new constraints, changed permissions)
- knowledge/INDEX.md reorganization
- New knowledge categories or files
- Installing external skills from UI Skills or other registries

### Skill retirement
- "The [skill] hasn't been triggered in [N] sessions and overlaps
  with [other skill]. Should I merge or remove it?"

**Format**: Present as a clear proposal:
> Proposed improvement:
> **What**: [specific change]
> **Why**: [friction observed]
> **Impact**: [what changes in agent behavior]
> Approve?

## Backporting to Template

If something is genuinely universal — not project-specific — propose
with a scope note:

> Proposed improvement:
> **What**: Add [principle] to foundations/design-principles.md
> **Why**: Discovered during [project] work, applies universally
> **Impact**: Would improve all future projects
> **Scope**: Template-level — also apply to _template/ so new projects get it?
> Approve?

## Reflection Cadence

At the end of longer work sessions (3+ exchanges on one topic), do a
brief self-assessment:

1. What knowledge did I use? Was it sufficient?
2. What did I have to improvise that should be codified?
3. Did any skill feel clunky or mismatched for this task?
4. What would make the next similar task go smoother?

Surface any resulting improvements (auto-edit or propose-first).

## Anti-Patterns

- **Don't propose changes just to seem productive.** Only improve when
  real friction was observed.
- **Don't auto-edit skill files.** Skills always go through propose-first.
- **Don't make vague knowledge entries.** Every entry needs: what it is,
  why it matters, when to apply it.
- **Don't batch up improvements for later.** Small, frequent edits are
  better than big reorganizations.
- **Never modify SOUL.md.** Ever. For any reason.
