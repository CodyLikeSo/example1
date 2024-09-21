import React, { useEffect, useRef } from 'react';

const ParticleEffectStatic = () => {
  const canvasRef = useRef(null);
  const particles = [];
  const numParticles = 8000;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      constructor(x, y, dy, size) {
        this.x = x;
        this.y = y;
        this.dy = dy;
        this.size = size;
        this.vx = 0;
        this.vy = dy;
      }

      draw() {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
        ctx.fillRect(this.x, this.y, this.size, this.size);
      }

      update() {
        // Apply velocity decay
        this.vx *= 0.95;
        this.vy = this.vy * 0.95 + this.dy * 0.05;

        this.x += this.vx;
        this.y += this.vy;

        // Reset particle to top if it goes out of bounds
        if (this.y - this.size > canvas.height) {
          this.y = -this.size;
          this.x = Math.random() * canvas.width;
        }

        this.draw();
      }
    }

    const initParticles = () => {
      for (let i = 0; i < numParticles; i++) {
        const size = 2;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const dy = Math.random() * 0.05 + 0; // Speed of falling
        particles.push(new Particle(x, y, dy, size));
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => particle.update());
    };

    initParticles();
    animate();
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full" />;
};

export default ParticleEffectStatic;
