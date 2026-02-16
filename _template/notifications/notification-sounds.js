/**
 * Notification Sounds Module
 * 
 * Provides audio feedback for Claude's key system states:
 * - question-pending: User input needed
 * - task-complete: Work finished successfully
 * - error: Problem requiring attention
 * 
 * Loads custom audio files from sounds/ directory.
 * 
 * Usage:
 *   NotificationSounds.play('question-pending');
 *   NotificationSounds.play('task-complete');
 *   NotificationSounds.play('error');
 */

const NotificationSounds = (() => {
  // Sound file mappings
  const soundConfig = {
    'question-pending': {
      file: 'KH_PendingQuestion.mp3',
      description: 'Notification that Claude needs user input'
    },
    'task-complete': {
      file: 'KH_Complete.mp3',
      description: 'Notification that task completed successfully'
    },
    'error': {
      file: 'KH_ErrorSelect.mp3',
      description: 'Notification of error or warning'
    }
  };

  // Cache of loaded audio elements
  const audioCache = {};

  // Get the base path for sounds directory
  function getSoundsPath() {
    // Determine path based on script location
    if (typeof document !== 'undefined') {
      const currentScript = document.currentScript || 
        Array.from(document.scripts).find(s => s.src && s.src.includes('notification-sounds.js'));
      if (currentScript) {
        const scriptPath = currentScript.src.split('/');
        scriptPath.pop(); // Remove script filename
        return scriptPath.join('/') + '/sounds/';
      }
    }
    return './sounds/';
  }

  /**
   * Load an audio file and return an Audio element
   */
  function loadAudioFile(filename) {
    return new Promise((resolve, reject) => {
      const soundPath = getSoundsPath() + filename;
      const audio = new Audio();
      
      audio.addEventListener('canplaythrough', () => {
        resolve(audio);
      }, { once: true });

      audio.addEventListener('error', () => {
        console.error(`Failed to load sound file: ${soundPath}`);
        reject(new Error(`Failed to load: ${soundPath}`));
      }, { once: true });

      audio.src = soundPath;
      audio.preload = 'auto';
    });
  }

  /**
   * Get or create cached audio element for a sound
   */
  async function getAudioElement(notificationType) {
    if (!audioCache[notificationType]) {
      const config = soundConfig[notificationType];
      if (!config) {
        throw new Error(`Unknown notification type: ${notificationType}`);
      }
      
      try {
        audioCache[notificationType] = await loadAudioFile(config.file);
      } catch (error) {
        console.error(`Error loading notification sound: ${error}`);
        throw error;
      }
    }
    
    return audioCache[notificationType];
  }

  /**
   * Play a notification sound by type
   */
  async function play(notificationType) {
    if (isMuted) {
      return;
    }

    const config = soundConfig[notificationType];
    
    if (!config) {
      console.warn(`Unknown notification type: ${notificationType}`);
      console.warn(`Available types: ${Object.keys(soundConfig).join(', ')}`);
      return;
    }

    try {
      const audio = await getAudioElement(notificationType);
      
      // Reset playback
      audio.currentTime = 0;
      
      // Play the sound
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.warn(`Could not play notification sound: ${error}`);
        });
      }
    } catch (error) {
      console.error('Error playing notification:', error);
    }
  }

  /**
   * Get available notification types
   */
  function getAvailableTypes() {
    return Object.keys(soundConfig);
  }

  /**
   * Get description of a notification type
   */
  function getDescription(notificationType) {
    const config = soundConfig[notificationType];
    return config ? config.description : null;
  }

  /**
   * Mute/unmute all notifications
   */
  let isMuted = false;
  
  function setMuted(muted) {
    isMuted = muted;
  }

  function getMuted() {
    return isMuted;
  }

  // Public API
  return {
    play,
    getAvailableTypes,
    getDescription,
    setMuted,
    getMuted
  };
})();

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = NotificationSounds;
}
