#!/usr/bin/env node

/**
 * Notification Sounds CLI
 * Play notification sounds from Node.js scripts or command line
 * 
 * Usage:
 *   notify question-pending    # User input needed
 *   notify task-complete       # Task finished
 *   notify error               # Error occurred
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const SCRIPT_DIR = __dirname;
const SOUNDS_DIR = path.join(SCRIPT_DIR, 'sounds');

const SOUNDS = {
  'question-pending': 'KH_PendingQuestion.mp3',
  'task-complete': 'KH_Complete.mp3',
  'error': 'KH_ErrorSelect.mp3'
};

const soundType = process.argv[2];

// Show help if no argument
if (!soundType) {
  console.log('Usage: notify <type>\n');
  console.log('Available types:');
  console.log('  question-pending  - User input needed');
  console.log('  task-complete     - Task finished successfully');
  console.log('  error             - Error or warning occurred');
  process.exit(0);
}

// Check if sound type is valid
if (!SOUNDS[soundType]) {
  console.error(`Error: Unknown notification type '${soundType}'`);
  console.error(`Available types: ${Object.keys(SOUNDS).join(', ')}`);
  process.exit(1);
}

const soundFile = SOUNDS[soundType];
const soundPath = path.join(SOUNDS_DIR, soundFile);

// Check if file exists
if (!fs.existsSync(soundPath)) {
  console.error(`Error: Sound file not found: ${soundPath}`);
  process.exit(1);
}

// Play sound (macOS only)
try {
  // Use afplay on macOS (non-blocking background process)
  execSync(`afplay "${soundPath}" &`, { 
    stdio: 'ignore',
    shell: '/bin/bash'
  });
} catch (error) {
  console.error(`Error playing notification: ${error.message}`);
  process.exit(1);
}

process.exit(0);
