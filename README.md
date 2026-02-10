# david

Product design agent environment. Template-based system for spawning
per-project AI agent instances with isolated context.

## Structure

- `_template/` — The blueprint. Never used directly. New projects copy from here.
- Each other top-level folder is a project-specific agent environment.

## Usage

```bash
new-agent-env <project-name>    # Create a new project environment
cc <project-name>               # Launch Claude Code with that project's agent
```
