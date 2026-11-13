/**
 * FORGE FITNESS - Web Audio API Interactive Sound Engine
 * Procedural synthesis - no external audio files required!
 */
class ForgeAudioEngine {
  constructor() {
    this.ctx = null;
    this.isEnabled = false;
    this.ambientGain = null;
    this.ambientOsc1 = null;
    this.ambientOsc2 = null;
    this.isAmbientPlaying = false;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleSound() {
    this.init();
    this.isEnabled = !this.isEnabled;
    const soundToggleBtn = document.getElementById('sound-toggle-btn');
    const soundWaves = document.getElementById('sound-waves');
    
    if (this.isEnabled) {
      this.playChime();
      this.startAmbient();
      if (soundToggleBtn) soundToggleBtn.classList.add('sound-active');
      if (soundWaves) soundWaves.classList.add('sound-playing');
      this.showToast('Audio Atmosphere Activated', 'Synth pulse and interactive haptics on');
    } else {
      this.stopAmbient();
      if (soundToggleBtn) soundToggleBtn.classList.remove('sound-active');
      if (soundWaves) soundWaves.classList.remove('sound-playing');
      this.showToast('Audio Muted', 'All sound effects paused');
    }
    return this.isEnabled;
  }

  startAmbient() {
    if (!this.ctx || !this.isEnabled || this.isAmbientPlaying) return;
    try {
      this.ambientGain = this.ctx.createGain();
      this.ambientGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      this.ambientGain.gain.exponentialRampToValueAtTime(0.04, this.ctx.currentTime + 3);

      // Low sub-bass warmth (cyber gym hum)
      this.ambientOsc1 = this.ctx.createOscillator();
      this.ambientOsc1.type = 'sine';
      this.ambientOsc1.frequency.setValueAtTime(55, this.ctx.currentTime); // 55Hz (A1)

      // Slow resonant drone
      this.ambientOsc2 = this.ctx.createOscillator();
      this.ambientOsc2.type = 'triangle';
      this.ambientOsc2.frequency.setValueAtTime(110, this.ctx.currentTime); // 110Hz

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(180, this.ctx.currentTime);

      this.ambientOsc1.connect(filter);
      this.ambientOsc2.connect(filter);
      filter.connect(this.ambientGain);
      this.ambientGain.connect(this.ctx.destination);

      this.ambientOsc1.start();
      this.ambientOsc2.start();
      this.isAmbientPlaying = true;
    } catch (e) {
      console.warn('Audio autoplay blocked or failed', e);
    }
  }

  stopAmbient() {
    if (!this.isAmbientPlaying || !this.ambientGain) return;
    try {
      this.ambientGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1);
      setTimeout(() => {
        if (this.ambientOsc1) {
          try { this.ambientOsc1.stop(); } catch(e){}
        }
        if (this.ambientOsc2) {
          try { this.ambientOsc2.stop(); } catch(e){}
        }
        this.isAmbientPlaying = false;
      }, 1000);
    } catch(e) {}
  }

  // Crisp metallic click for buttons
  playClick() {
    if (!this.isEnabled) return;
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1200, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.09, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch (e) {}
  }

  // Heavy hydraulic swoosh when switching gym zones
  playZoneSwitch() {
    if (!this.isEnabled) return;
    this.init();
    try {
      // Noise burst filtered into whoosh
      const bufferSize = this.ctx.sampleRate * 0.25;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.Q.setValueAtTime(3, this.ctx.currentTime);
      filter.frequency.setValueAtTime(300, this.ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(1400, this.ctx.currentTime + 0.12);
      filter.frequency.exponentialRampToValueAtTime(150, this.ctx.currentTime + 0.25);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.25);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      noise.start();
    } catch (e) {}
  }

  // Bell chime / gold ping for confirmations & hotspots
  playChime() {
    if (!this.isEnabled && this.ctx?.state !== 'running') return;
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, this.ctx.currentTime); // A5
      osc.frequency.setValueAtTime(1320, this.ctx.currentTime + 0.08); // E6

      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.5);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.55);
    } catch (e) {}
  }

  // Heavy Iron Barbell Clank (for 1RM & strength zone)
  playIronClank() {
    if (!this.isEnabled) return;
    this.init();
    try {
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc1.type = 'square';
      osc1.frequency.setValueAtTime(380, this.ctx.currentTime);
      osc1.frequency.exponentialRampToValueAtTime(90, this.ctx.currentTime + 0.15);

      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(740, this.ctx.currentTime);
      osc2.frequency.exponentialRampToValueAtTime(180, this.ctx.currentTime + 0.2);

      gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.25);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start();
      osc2.start();
      osc1.stop(this.ctx.currentTime + 0.25);
      osc2.stop(this.ctx.currentTime + 0.25);
    } catch (e) {}
  }

  showToast(title, msg) {
    if (window.showForgeToast) {
      window.showForgeToast(title, msg);
    }
  }
}

window.forgeAudio = new ForgeAudioEngine();
