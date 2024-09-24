import React, { useEffect, useRef } from 'react';

const ParticleEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const numParticles = Math.min(1000, Math.floor(canvas.width * canvas.height / 10000));
    const particles = new Array(numParticles);

    const interactionArea = {
      x: canvas.width * 0.2,
      y: canvas.height * 0.2,
      width: canvas.width * 0.6,
      height: canvas.height * 0.6,
    };

    const mouse = { x: undefined, y: undefined };

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    class Particle {
      constructor() {
        this.size = 2;
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.dy = Math.random() * 0.01 + 0.1;
        this.vx = 0;
        this.vy = this.dy;
        this.repulsionSpeed = Math.random() * 1.5 + 0.1;
      }

      draw() {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
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

        this.vx *= 0.95;
        this.vy = this.vy * 0.95 + this.dy * 0.05;

        this.x += this.vx;
        this.y += this.vy;

        if (this.y - this.size > canvas.height) {
          this.reset();
        }

        this.draw();
      }
    }

    const initParticles = () => {
      for (let i = 0; i < numParticles; i++) {
        particles[i] = new Particle();
      }
    };

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
