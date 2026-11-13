/**
 * FORGE FITNESS - Interactive Canvas Particle System
 * Hot forge embers and cyber-neon ambient grid background
 */
(function() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const particles = [];
  const particleCount = Math.min(window.innerWidth < 768 ? 25 : 55, 60);
  let mouse = { x: width / 2, y: height / 2, radius: 120 };

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  class Ember {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = height + Math.random() * 80;
      this.vx = (Math.random() - 0.5) * 0.8;
      this.vy = -(Math.random() * 1.4 + 0.5);
      this.radius = Math.random() * 2.2 + 0.6;
      this.alpha = Math.random() * 0.7 + 0.2;
      this.fadeRate = Math.random() * 0.003 + 0.001;
      // Gold embers with occasional fiery crimson sparks
      this.isRed = Math.random() > 0.75;
      this.color = this.isRed ? '255, 42, 42' : '229, 169, 60';
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.alpha -= this.fadeRate;

      // React to mouse proximity
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < mouse.radius) {
        const force = (1 - dist / mouse.radius) * 1.5;
        this.x -= (dx / dist) * force;
        this.y -= (dy / dist) * force;
      }

      if (this.alpha <= 0 || this.y < -20 || this.x < -20 || this.x > width + 20) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
      ctx.shadowBlur = this.isRed ? 8 : 6;
      ctx.shadowColor = `rgba(${this.color}, 0.8)`;
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    const p = new Ember();
    p.y = Math.random() * height; // Spread initially
    particles.push(p);
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }

    requestAnimationFrame(animate);
  }

  animate();
})();
