# Notification Sounds — Integration Guide

Uses custom audio files (KH_PendingQuestion.mp3, KH_Complete.mp3, KH_ErrorSelect.mp3) stored in the `sounds/` directory.

## Quick Start

1. **Include the module** in your HTML/template:
   ```html
   <script src="../_template/notifications/notification-sounds.js"></script>
   ```

2. **Use in code:**
   ```javascript
   NotificationSounds.play('question-pending');  // Need user input
   NotificationSounds.play('task-complete');     // Work finished
   NotificationSounds.play('error');             // Problem occurred
   ```

## Where to Add Sounds

### 1. Error Handling

```javascript
try {
  await executeTask();
  NotificationSounds.play('task-complete');
} catch (error) {
  NotificationSounds.play('error');
  console.error(error);
}
```

### 2. User Input Required

```javascript
// When waiting for user decision
console.log('Awaiting your decision...');
NotificationSounds.play('question-pending');

const response = await getUserInput(question);
```

### 3. Task Completion

```javascript
// When work finishes
const result = await longRunningTask();
const report = generateReport(result);
NotificationSounds.play('task-complete');
return report;
```
