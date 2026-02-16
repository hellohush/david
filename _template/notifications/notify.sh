#!/bin/bash

# Notification Sounds CLI
# Play notification sounds from the terminal
# 
# Usage:
#   notify question-pending    # User input needed
#   notify task-complete       # Task finished
#   notify error               # Error occurred

# Get the script's directory to find sounds
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
SOUNDS_DIR="$SCRIPT_DIR/sounds"

# Sound file mappings
declare -A SOUNDS=(
  ["question-pending"]="KH_PendingQuestion.mp3"
  ["task-complete"]="KH_Complete.mp3"
  ["error"]="KH_ErrorSelect.mp3"
)

# Check if sound type is provided
if [ -z "$1" ]; then
  echo "Usage: notify <type>"
  echo ""
  echo "Available types:"
  echo "  question-pending  - User input needed"
  echo "  task-complete     - Task finished successfully"
  echo "  error             - Error or warning occurred"
  exit 1
fi

SOUND_TYPE="$1"

# Check if sound type exists
if [ -z "${SOUNDS[$SOUND_TYPE]}" ]; then
  echo "Error: Unknown notification type '$SOUND_TYPE'"
  echo "Available types: ${!SOUNDS[@]}"
  exit 1
fi

SOUND_FILE="${SOUNDS[$SOUND_TYPE]}"
SOUND_PATH="$SOUNDS_DIR/$SOUND_FILE"

# Check if sound file exists
if [ ! -f "$SOUND_PATH" ]; then
  echo "Error: Sound file not found: $SOUND_PATH"
  exit 1
fi

# Play the sound
afplay "$SOUND_PATH" 2>/dev/null &

# Optional: Return success silently for scripting
exit 0
