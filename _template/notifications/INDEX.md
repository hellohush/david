# Notification Sounds System

Simple audio feedback for three key moments:
- **Questions** require user input
- **Tasks** complete successfully
- **Errors** occur that need attention

## Files

| File | Purpose |
|------|---------|
| **notification-sounds.js** | Core module — generates notification tones using Web Audio API |
| **README.md** | Complete documentation, usage guide, API reference |
| **INTEGRATION.md** | How to integrate sounds into different parts of Claude |
| **EXAMPLES.md** | Code patterns for real-world integration |

## Quick Start

### 1. In HTML Templates
```html
<!-- Include the module -->
<script src="../_template/notifications/notification-sounds.js"></script>

<!-- Use it -->
<script>
  NotificationSounds.play('task-complete');       // Success
  NotificationSounds.play('question-pending');    // Need input
  NotificationSounds.play('error');               // Something wrong
  NotificationSounds.play('task-started');        // Optional: task started
</script>
```

### 2. In Node.js / Task Execution
```javascript
const NotificationSounds = require('./_template/notifications/notification-sounds.js');

// Play when task finishes
NotificationSounds.play('task-complete');
```

## Three Core Notifications

| Sound | When | File |
|-------|------|------|
| `question-pending` | User input needed | KH_PendingQuestion.mp3 |
| `task-complete` | Task finished | KH_Complete.mp3 |
| `error` | Error/warning | KH_ErrorSelect.mp3 |

## Design Principles

- **Subtle**: Volumes kept low (0.2–0.3) to enhance without startling
- **Distinct**: Each sound is unique and immediately recognizable
- **Meaningful**: Sound type matches semantic meaning of event
- **Optional**: All sounds can be muted via `NotificationSounds.setMuted(true)`

## Integration Points

### Already Integrated
- ✅ [bing-aitools/message-crafter-mock.html](../../bing-aitools/message-crafter-mock.html) — Sounds for generate, copy, undo

### Ready to Integrate Into
- Task execution (AGENTS.md)
- Skill checking (using-skills/SKILL.md)
- Question prompts (message-crafting/SKILL.md)
- User research synthesis (user-research-synthesis/SKILL.md)
- Any workflow requiring user decisions or status updates

See [INTEGRATION.md](./INTEGRATION.md) for detailed patterns.

## Browser Support

Works in all modern browsers with Web Audio API:
- Chrome 14+
- Firefox 25+
- Safari 6+
- Edge 12+
- Mobile browsers (iOS Safari, Chrome Mobile, etc.)

Gracefully degrades if Audio API unavailable — no errors thrown.

## API Reference

```javascript
// Play a notification
NotificationSounds.play('question-pending');
NotificationSounds.play('task-complete');
NotificationSounds.play('error');

// Get available types
const types = NotificationSounds.getAvailableTypes();
// → ['question-pending', 'task-complete', 'error']

// Mute all notifications
NotificationSounds.setMuted(true);

// Check mute state
const isMuted = NotificationSounds.getMuted();
```

## Example Use Cases

### User Decision Point
```javascript
NotificationSounds.play('question-pending');
const userChoice = await askUser('Proceed with changes?');
```

### Task Complete
```javascript
await executeTask();
NotificationSounds.play('task-complete');
```

### Error Handling
```javascript
try {
  await processFile();
  NotificationSounds.play('task-complete');
} catch (error) {
  NotificationSounds.play('error');
  console.error(error);
}
```

## See Also

- [README.md](./README.md) — Full documentation with all details
- [INTEGRATION.md](./INTEGRATION.md) — How to add sounds to your workflows
- [EXAMPLES.md](./EXAMPLES.md) — Real code patterns and examples

## Notes

- Web Audio context may require user interaction with page to activate in some browsers — module handles this automatically
- Audio is muted by default in some mobile contexts — respects user's OS mute settings
- All tones are generated in-memory (no external files), but can be extended with custom audio files

---

Created Feb 16, 2026. Part of the Claude task execution framework.
