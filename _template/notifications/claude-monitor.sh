#!/bin/bash

# Claude Terminal Monitor with Notifications
# 
# Watches Claude CLI output and triggers notifications for:
# - Questions (numbered options)
# - Task completion
# - Errors
# - Long-running processes (5+ minutes)
#
# Usage:
#   claude your-command | ./claude-monitor.sh
#   claude-monitor "some claude command"

SOUNDS_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )/sounds"
QUESTION_SOUND="$SOUNDS_DIR/KH_PendingQuestion.mp3"
COMPLETE_SOUND="$SOUNDS_DIR/KH_Complete.mp3"
ERROR_SOUND="$SOUNDS_DIR/KH_ErrorSelect.mp3"

# 5 minutes in seconds
TIME_THRESHOLD=300

START_TIME=$(date +%s)
QUESTION_PLAYED=false
TIME_ALERT_SHOWN=false

# Verify sound files exist
if [ ! -f "$QUESTION_SOUND" ] || [ ! -f "$COMPLETE_SOUND" ] || [ ! -f "$ERROR_SOUND" ]; then
  echo "Error: Sound files not found in $SOUNDS_DIR" >&2
  exit 1
fi

# Function to play sound (non-blocking)
play_sound() {
  afplay "$1" 2>/dev/null &
}

# Monitor output line by line
while IFS= read -r line; do
  # Always pass through the line to terminal
  echo "$line"
  
  # Check for question pattern (numbered options like "1. Option  2. Option")
  if [[ "$line" =~ ^[[:space:]]*[0-9]+\. ]]; then
    if [ "$QUESTION_PLAYED" = false ]; then
      play_sound "$QUESTION_SOUND"
      QUESTION_PLAYED=true
    fi
  fi
  
  # Check for completion patterns
  if [[ "$line" =~ (completed|finished|done|success|✓|✔) ]]; then
    play_sound "$COMPLETE_SOUND"
  fi
  
  # Check for error patterns
  if [[ "$line" =~ (error|failed|exception|warning|✗|✘|Error|Failed) ]]; then
    play_sound "$ERROR_SOUND"
  fi
  
  # Check time elapsed (5+ minutes might indicate hang/error)
  CURRENT_TIME=$(date +%s)
  ELAPSED=$((CURRENT_TIME - START_TIME))
  
  if [ $ELAPSED -gt $TIME_THRESHOLD ] && [ "$TIME_ALERT_SHOWN" = false ]; then
    play_sound "$ERROR_SOUND"
    TIME_ALERT_SHOWN=true
  fi
  
done

# Final check: if process took very long, it might have failed
FINAL_TIME=$(date +%s)
TOTAL_TIME=$((FINAL_TIME - START_TIME))

if [ $TOTAL_TIME -gt $TIME_THRESHOLD ]; then
  # Process took 5+ minutes. If no completion sound was played, assume error
  if [ "$QUESTION_PLAYED" = false ] && [ "$TIME_ALERT_SHOWN" = false ]; then
    play_sound "$ERROR_SOUND"
  fi
fi

exit 0
