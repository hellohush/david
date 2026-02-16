# Notification Sounds

Provides audio feedback for Claude's key system states. Uses custom audio files stored in the `sounds/` directory.

## Available Notifications

### `question-pending`
**When:** User input is needed during execution  
**Sound:** KH_PendingQuestion.mp3  
**Use case:** Alert user that a decision or response is required

### `task-complete`
**When:** Task has finished executing successfully  
**Sound:** KH_Complete.mp3  
**Use case:** Confirm that work is done

### `error`
**When:** Error occurs or warning is issued  
**Sound:** KH_ErrorSelect.mp3  
**Use case:** Alert user to problem requiring attention

## Usage

### In HTML Files

```html
<!-- Include the module -->
<script src="../notifications/notification-sounds.js"></script>

<!-- Use in your code -->
<script>
  // User needs to make a decision
  NotificationSounds.play('question-pending');
  
  // Task completed successfully
  NotificationSounds.play('task-complete');
  
  // An error occurred
  NotificationSounds.play('error');
  
  // Check available types
  const types = NotificationSounds.getAvailableTypes();
  console.log(types); // ['question-pending', 'task-complete', 'error']
  
  // Mute all sounds
  NotificationSounds.setMuted(true);
</script>
```

### In Node.js / Task Execution

```javascript
const NotificationSounds = require('./notifications/notification-sounds.js');

// When user input is needed
console.log('Waiting for your decision...');
NotificationSounds.play('question-pending');

// When a task completes
console.log('Task completed!');
NotificationSounds.play('task-complete');

// On error
console.error('Something went wrong');
NotificationSounds.play('error');
```

### Integration Points

#### When user input is required
```javascript
NotificationSounds.play('question-pending');
const userResponse = await getUserInput(question);
```

#### When a task completes successfully
```javascript
const result = await executeTask();
NotificationSounds.play('task-complete');
```

#### When an error occurs
```javascript
if (error) {
  NotificationSounds.play('error');
  console.error(error);
}
```

## Muting & User Preferences

All notifications can be globally muted:

```javascript
// Disable in user preferences
if (userSettings.muteNotifications) {
  NotificationSounds.setMuted(true);
}
```

Or add a UI control:

```html
<label>
  <input type="checkbox" id="mute-notifications" />
  Mute notification sounds
</label>

<script>
  document.getElementById('mute-notifications').addEventListener('change', (e) => {
    NotificationSounds.setMuted(e.target.checked);
  });
</script>
```

## Browser Support

Uses Web Audio API (supported in all modern browsers):
- Chrome 14+
- Firefox 25+
- Safari 6+
- Edge 12+

Gracefully degrades if Web Audio API is unavailable.

## Extending with Custom Sounds

To use custom audio files instead of generated tones:

1. Place `.mp3` or `.wav` files in `sounds/` directory
2. Modify `notification-sounds.js` to use `AudioBuffer` instead of `OscillatorNode`
3. The module API remains the same

Example custom sound registration:

```javascript
// In notification-sounds.js
async function loadCustomSound(name, filePath) {
  const response = await fetch(filePath);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  // Store and use audioBuffer in play()
}
```

## Sound Design Principles

- **Subtle:** Volumes set low (0.2–0.3) to avoid startling
- **Non-intrusive:** Durations under 0.6s to minimize interruption
- **Distinct:** Each sound has unique characteristics (tone vs. chord vs. pulse)
- **Meaningful:** Sound type matches the semantic meaning of the event

## Accessibility

- All sounds are optional and can be muted
- Visual indicators should accompany audio cues
- Text descriptions provided for each notification type
