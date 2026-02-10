# UX Writing

## Voice Hierarchy

When writing any user-facing copy, prioritize in this order:
1. **Clarity** — Can the user understand?
2. **Brevity** — Can you say it in fewer words?
3. **Tone** — Does it match the emotional context?
4. **Personality** — Can you add character without losing the above?

## Button Copy

### Do
- Say what happens: "Create account", "Save changes", "Send invite"
- Use action verbs: "Download", "Export", "Share"
- Be specific: "Delete project" not just "Delete"

### Don't
- "Submit" — say what's being submitted
- "OK" — say what the user is agreeing to
- "Click here" — the action should be self-evident
- "Yes" / "No" in confirmations — repeat the action instead

## Error Messages

Structure: **What happened** → **Why** → **What to do next**

### Do
- "We couldn't save your changes. The file is too large (max 10MB). Try compressing the image or choosing a smaller file."
- "That email is already registered. Sign in instead, or use a different email."

### Don't
- "Error 500" — meaningless to users
- "Oops! Something went wrong" — dismissive, uninformative
- "Invalid input" — what's invalid? what should they do?
- "Are you sure?" — sure about what? restate the action

## Empty States

An empty state is an opportunity, not a dead end.
- Say what belongs here
- Show how to get started
- Consider showing an example or illustration

Example: "No projects yet. Create your first project to get started."

## Confirmations

Confirm the action, not that something was "successful."
- Not: "Success!" → "Your changes are saved."
- Not: "Email sent successfully" → "Confirmation sent to hannah@example.com"

## Notifications

- Lead with what changed, not who did it
- Include enough context to decide whether to act
- "New comment on 'Homepage redesign'" not "John left a comment"

## Word List — Use / Avoid

| Use | Avoid |
|-----|-------|
| sign in | log in |
| sign out | log out |
| email | e-mail |
| set up (verb) | setup (as verb) |
| OK | Okay |
| select | check (for checkboxes) |
| enter | type in |
| remove | delete (when reversible) |
| delete | remove (when permanent) |
| we couldn't | failed to |
| try again | retry |

(Customize per project — add to project voice guide.)

## Tone by Context

| Context | Tone |
|---------|------|
| Onboarding | Encouraging, clear, patient |
| Error | Calm, specific, helpful |
| Success | Brief, confirming, warm |
| Empty state | Inviting, directional |
| Destructive action | Serious, specific, reversibility-aware |
| Loading | Reassuring, brief |

## Common Patterns

- **Placeholders**: End with ellipsis. Show format examples: "e.g., hannah@example.com"
- **Labels**: Be specific. "Save API key" not "Continue"
- **Tooltips**: Last resort. Prefer inline explanation.
- **Microcopy**: The small text that reduces anxiety. "We'll never share your email."
