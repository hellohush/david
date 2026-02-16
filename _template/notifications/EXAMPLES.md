# Notification Sounds — Code Examples

Practical patterns for the three core notifications.

## Pattern 1: Try/Catch Error Handling

Use `error` when exceptions occur:

```javascript
async function processFile(filePath) {
  try {
    const data = await readFile(filePath);
    const result = await transform(data);
    NotificationSounds.play('task-complete');
    return result;
  } catch (error) {
    NotificationSounds.play('error');
    console.error('Failed to process file:', error);
    throw error;
  }
}
```

## Pattern 2: User Decision Points

Use `question-pending` when waiting for input:

```javascript
async function askForApproval(message) {
  console.log('\n⚠️ DECISION NEEDED:\n' + message);
  NotificationSounds.play('question-pending');
  
  // Wait for user response
  const approved = await getUserChoice(['Yes', 'No']);
  return approved;
}

// Usage
if (await askForApproval('Proceed with changes?')) {
  await applyChanges();
  NotificationSounds.play('task-complete');
}
```

## Pattern 3: Async Task Completion

Use `task-complete` when work finishes:

```javascript
async function generateReport(data) {
  console.log('Generating report...');
  
  const analysis = await analyzeData(data);
  const formatted = await formatReport(analysis);
  const saved = await saveFile(formatted);
  
  NotificationSounds.play('task-complete');
  return saved;
}
```

## Pattern 4: Multi-Step Workflow

```javascript
async function designReview(assets) {
  try {
    // Step 1: Initial check
    console.log('Reviewing design assets...');
    const analysis = await analyzeDesign(assets);
    
    // Step 2: Need user feedback
    NotificationSounds.play('question-pending');
    const feedback = await getUserFeedback(
      'Does this match your brand?'
    );
    
    if (!feedback) {
      throw new Error('User rejected design');
    }
    
    // Step 3: Generate report
    const report = generateReport(analysis, feedback);
    NotificationSounds.play('task-complete');
    return report;
    
  } catch (error) {
    console.error('Review failed:', error);
    NotificationSounds.play('error');
    rethrow error;
  }
}
```

## Pattern 5: Web Interface Button

```html
<button onclick="generateWithNotification()">Generate</button>

<script>
  async function generateWithNotification() {
    try {
      const result = await generateContent();
      NotificationSounds.play('task-complete');
      displayResult(result);
    } catch (error) {
      NotificationSounds.play('error');
      showError(error.message);
    }
  }
</script>
```

## Pattern 6: Silent Retry Loop

```javascript
async function retryWithFallback(fn, maxRetries = 3) {
  let lastError;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const result = await fn();
      NotificationSounds.play('task-complete');
      return result;
    } catch (error) {
      lastError = error;
      if (attempt < maxRetries) {
        console.log(`Attempt ${attempt} failed. Retrying...`);
        await new Promise(r => setTimeout(r, 500));
      }
    }
  }
  
  // Final failure
  NotificationSounds.play('error');
  throw lastError;
}
```

## Pattern 7: Conditional Confirmation

```javascript
async function deployChanges(changes) {
  // Only ask for confirmation if major changes
  if (changes.severity === 'high') {
    NotificationSounds.play('question-pending');
    const confirmed = await askUser(
      `Deploy ${changes.count} files? This cannot be undone.`
    );
    
    if (!confirmed) {
      return { cancelled: true };
    }
  }
  
  try {
    await deploy(changes);
    NotificationSounds.play('task-complete');
  } catch (error) {
    NotificationSounds.play('error');
    throw error;
  }
}
```

## Testing in Console

Quickly test sounds in browser console:

```javascript
// Play one sound
NotificationSounds.play('question-pending');
// [wait ~600ms]
NotificationSounds.play('task-complete');
// [wait ~500ms]
NotificationSounds.play('error');

// Check if working
console.log('Available:', NotificationSounds.getAvailableTypes());
// → ['question-pending', 'task-complete', 'error']

// Test mute
NotificationSounds.setMuted(true);
NotificationSounds.play('task-complete');  // No sound
NotificationSounds.setMuted(false);
NotificationSounds.play('task-complete');  // Sound plays
```

---

See [INTEGRATION.md](./INTEGRATION.md) for more guidance.

