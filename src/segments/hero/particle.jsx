import React, { useEffect, useRef } from 'react';

const ParticleEffect = () => {
  const canvasRef = useRef(null);
  const particles = [];
  const numParticles = 350;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Define the interaction area
    const interactionArea = {
      x: canvas.width * 0.2,
      y: canvas.height * 0.2,
      width: canvas.width * 0.6,
      height: canvas.height * 0.6,
    };

    class Particle {
      constructor(x, y, dy, size) {
        this.x = x;
        this.y = y;
        this.dy = dy;
        this.size = size;
        this.vx = 0;
        this.vy = dy;
        this.repulsionSpeed = Math.random() * 1.5 + 0.5; // Random speed factor between 0.5 and 2
      }

      draw() {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.fillRect(this.x, this.y, this.size, this.size);
      }

      update(mappedMouse) {
        const distX = this.x - mappedMouse.x;
        const distY = this.y - mappedMouse.y;
        const distance = Math.sqrt(distX * distX + distY * distY);

        if (distance < 120) {
          this.vx = (distX / distance) * this.repulsionSpeed;
          this.vy = (distY / distance) * this.repulsionSpeed;
        }

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
        const size = 4;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const dy = Math.random() * 0.2 + 0.1; // Speed of falling
        particles.push(new Particle(x, y, dy, size));
      }
    };

    const mouse = {
      x: undefined,
      y: undefined,
    };

    const handleMouseMove = (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const mapMousePosition = () => {
      if (
        mouse.x >= interactionArea.x &&
        mouse.x <= interactionArea.x + interactionArea.width &&
        mouse.y >= interactionArea.y &&
        mouse.y <= interactionArea.y + interactionArea.height
      ) {
        const relativeX = (mouse.x - interactionArea.x) / interactionArea.width;
        const relativeY = (mouse.y - interactionArea.y) / interactionArea.height;

        return {
          x: relativeX * canvas.width,
          y: relativeY * canvas.height,
        };
      }
      return { x: mouse.x, y: mouse.y };
    };

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mappedMouse = mapMousePosition();
      particles.forEach((particle) => particle.update(mappedMouse));
    };

    initParticles();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full" />;
};

export default ParticleEffect;
