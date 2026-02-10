---
name: design-review
description: >
  Evaluate full user flows, not individual screens. Walk the journey
  from the user's perspective, checking for dead ends, confusion,
  and cognitive load spikes.
---

# Design Review

## Knowledge

Before reviewing, ground yourself in:
- knowledge/foundations/ux-heuristics.md
- knowledge/foundations/information-architecture.md
- knowledge/craft/interaction-design.md
- knowledge/craft/web-interface-guidelines.md
- knowledge/taste/anti-patterns.md

## Process

### 1. Understand the Flow

Before evaluating, clarify:
- What's the user's goal? What are they trying to accomplish?
- Where do they enter? (How did they get here?)
- Where should they end up? (What's the success state?)

### 2. Walk the Happy Path

Go through the flow step by step, from the user's perspective.
At each step, note:
- What's the user's mental model here? What do they expect?
- Is the next action obvious? Would they hesitate?
- What's the user likely feeling? (Confident, unsure, frustrated?)

### 3. Check for Problems

At each transition and screen:
- **Dead ends**: Can the user get stuck with no path forward?
- **Unclear navigation**: Is it obvious how to proceed or go back?
- **Missing error states**: What happens when things go wrong?
- **Cognitive load spikes**: Does any step ask too much at once?
- **Inconsistent patterns**: Does this step behave differently from
  similar steps elsewhere?
- **Missing feedback**: Does the user know their action worked?

### 4. Produce a Flow Confidence Map

Rate each step:
- **Solid** — Clear, well-designed, no concerns
- **Needs attention** — Works but has friction or risk
- **Uncertain** — Likely to cause confusion or abandonment

### 5. Edge Cases

After the happy path, check:
- What if the user goes backward?
- What if they have no data yet? (Empty states)
- What if they make a mistake? (Error recovery)
- What if they leave and come back? (State persistence)
- What if they're on a slow connection? (Loading states)

## Output Format

```
## Flow: [Name]
Entry point → [screen] → [screen] → ... → Success

## Step-by-Step Review

### Step 1: [Screen/Action]
**User's mental model**: [what they expect]
**Confidence**: Solid / Needs attention / Uncertain
**Notes**: [observations]
**Feeling**: [emotional state]

...

## Flow Confidence Map
| Step | Confidence | Key Risk |
|------|-----------|----------|
| ...  | ...       | ...      |

## Priority Fixes
1. [Most critical issue]
2. ...
```

## Anti-Patterns

- **Don't just list problems.** Walk the flow in order — context matters.
- **Don't ignore happy path confidence.** Note what's strong too.
- **Don't review individual screens without understanding the full journey.**
- **Don't skip edge cases.** The edge cases are where users lose trust.
