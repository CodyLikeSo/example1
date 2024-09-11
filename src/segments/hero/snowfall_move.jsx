import React, { useEffect } from 'react';

const Snowfall = () => {
  useEffect(() => {
    const canvas = document.getElementById('snowfall');
    const ctx = canvas.getContext('2d');
    const particles = [];
    const numParticles = 2500;
    let mouseX = -1000;
    let mouseY = -1000;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
      });
    }

    const updateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 300;
        const force = Math.max((maxDistance - distance) / maxDistance, 0);

        if (distance < maxDistance) {
          particle.speedX += (dx / distance) * force * 0.05;
          particle.speedY += (dy / distance) * force * 0.05;
        }

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;

        ctx.fillStyle = '#9CA3AF';
        ctx.fillRect(particle.x, particle.y, 3, 3);
      });

      requestAnimationFrame(updateParticles);
    };

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = event.clientX - rect.left;
      mouseY = event.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);
    updateParticles();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      id="snowfall"
      className="fixed inset-0 w-full h-full pointer-events-none"
    ></canvas>
  );
};

export default Snowfall;
