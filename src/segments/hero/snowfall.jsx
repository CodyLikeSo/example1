import React, { useEffect } from 'react';

const Snowfall = () => {
  useEffect(() => {
    const canvas = document.getElementById('snowfall');
    const ctx = canvas.getContext('2d');
    const particles = [];
    const numParticles = 150;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

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
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.fillStyle = '#9CA3AF';
        ctx.fillRect(particle.x, particle.y, 4, 4);
      });

      requestAnimationFrame(updateParticles);
    };

    updateParticles();
  }, []);

  return (
    <canvas
      id="snowfall"
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
    ></canvas>
  );
};

export default Snowfall;
