# Terminal Notifications

Use notification sounds while working in your local terminal.

## Claude Monitor (Automatic Notifications)

The easiest way to get notifications while using Claude CLI — just pipe your command through the monitor and it automatically triggers sounds for questions, completions, and errors.

### Setup

```bash
# Make scripts executable
chmod +x _template/notifications/claude-monitor.sh
chmod +x _template/notifications/notify.sh

# Add alias to ~/.zshrc
echo "alias claude-monitor='~/.../david/_template/notifications/claude-monitor.sh'" >> ~/.zshrc
source ~/.zshrc
```

### Usage

**Pipe Claude output through the monitor:**
```bash
claude your-command | claude-monitor
```

**Example:**
```bash
claude "analyze these files" | claude-monitor
```

The monitor watches for:
- ✅ **Questions** (numbered options) → plays `question-pending` sound
- ✅ **Completion** (words: finished, done, success) → plays `task-complete` sound
- ✅ **Errors** (words: error, failed, exception) → plays `error` sound
- ✅ **Timeout** (5+ minutes) → plays `error` sound to alert you something might be stuck

### How It Works

As Claude runs, the monitor watches every line of output:
1. Claude asks a question with numbered options → **you hear a notification**
2. Task completes successfully → **you hear a celebration sound**
3. Error occurs or process hangs → **you hear an alert**

No manual triggering needed. Just let it run in the background.

---

## Manual Terminal Commands

If you want to manually trigger sounds for other workflows:

### Option 1: Bash Script

Make the script executable:
```bash
chmod +x _template/notifications/notify.sh
```

Create an alias in your `~/.zshrc` or `~/.bash_profile`:
```bash
alias notify='~/.../david/_template/notifications/notify.sh'
```

Or use with full path:
```bash
./_template/notifications/notify.sh question-pending
./_template/notifications/notify.sh task-complete
./_template/notifications/notify.sh error
```

### Option 2: Node.js CLI

Make executable:
```bash
chmod +x _template/notifications/notify.js
```

Create an alias in your `~/.zshrc`:
```bash
alias notify='node ~/.../david/_template/notifications/notify.js'
```

Or use directly:
```bash
node _template/notifications/notify.js question-pending
node _template/notifications/notify.js task-complete
node _template/notifications/notify.js error
```

## Usage in Terminal

**Play a notification immediately:**
```bash
notify task-complete
notify error
notify question-pending
```

**Use in shell scripts:**
```bash
#!/bin/bash

# Do some work
process_file.sh

# Notify when done
notify task-complete

# On error
if [ $? -ne 0 ]; then
  notify error
fi
```

**Use in Node.js scripts:**
```javascript
const { execSync } = require('child_process');

async function runTask() {
  try {
    await doWork();
    execSync('node _template/notifications/notify.js task-complete', { stdio: 'ignore' });
  } catch (error) {
    execSync('node _template/notifications/notify.js error', { stdio: 'ignore' });
    throw error;
  }
}
```

**Use in Python scripts:**
```python
import subprocess
import os

def play_notification(sound_type):
    script_path = os.path.expanduser('~/.../david/_template/notifications/notify.sh')
    subprocess.Popen([script_path, sound_type], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

# Usage
try:
    do_work()
    play_notification('task-complete')
except Exception as e:
    play_notification('error')
    raise
```

## Set Up Permanent Alias

Add to your `~/.zshrc` (or `~/.bash_profile` for bash):

```bash
# Notification sounds
export DAVID_PATH="/path/to/your/david"
alias notify="$DAVID_PATH/_template/notifications/notify.sh"
```

Then reload:
```bash
source ~/.zshrc
```

Now you can use `notify` from anywhere:
```bash
notify question-pending
notify task-complete
notify error
```

## Sounds

| Command | Sound | When to use |
|---------|-------|-----------|
| `notify question-pending` | KH_PendingQuestion.mp3 | Waiting for user input |
| `notify task-complete` | KH_Complete.mp3 | Task finished successfully |
| `notify error` | KH_ErrorSelect.mp3 | Error or warning occurred |

## Examples

### Simple task notification
```bash
#!/bin/bash
echo "Processing files..."
find . -name "*.txt" -exec wc -l {} +
notify task-complete
```

### Conditional notifications
```bash
#!/bin/bash
echo "Deploying..."
if npm run build && npm run deploy; then
  notify task-complete
  echo "✓ Deployment successful"
else
  notify error
  echo "✗ Deployment failed"
  exit 1
fi
```

### Long-running process
```bash
#!/bin/bash
echo "Starting data analysis (this may take a while)..."
python3 analyze.py

if [ $? -eq 0 ]; then
  notify task-complete
  echo "Analysis complete!"
else
  notify error
  echo "Analysis failed"
  exit 1
fi
```

## Troubleshooting

**Sound won't play:**
- Check file permissions: `ls -l _template/notifications/sounds/`
- Test directly: `afplay _template/notifications/sounds/KH_Complete.mp3`
- Check macOS volume isn't muted

**Command not found:**
- Make script executable: `chmod +x _template/notifications/notify.sh`
- Use full path if alias isn't working: `~/.../david/_template/notifications/notify.sh`

**Script path issues:**
- Use absolute path in aliases/scripts
- Test with: `echo $_template/notifications/notify.sh`
