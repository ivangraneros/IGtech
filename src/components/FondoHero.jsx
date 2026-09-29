import React, { useEffect, useRef } from 'react';

function FondoHero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Configuración de la grilla de puntos
    const spacing = 20; // Distancia entre puntos
    let mouse = { x: -1000, y: -1000, radius: 120 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Dibujar y animar los puntos
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let x = spacing; x < width; x += spacing) {
        for (let y = spacing; y < height; y += spacing) {
          let dx = mouse.x - x;
          let dy = mouse.y - y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          let pointX = x;
          let pointY = y;
          let size = 0.8;

          if (distance < mouse.radius) {
            let force = (1 - distance / mouse.radius);
            let angle = Math.atan2(dy, dx);
            pointX -= Math.cos(angle) * force * 15;
            pointY -= Math.sin(angle) * force * 15;
            size = 0.8 + force * 1.5; 
          }

          ctx.fillStyle = 'rgba(6, 182, 212, 0.4)';
          ctx.beginPath();
          ctx.arc(pointX, pointY, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="dot-shader-canvas"
    />
  );
}

export default FondoHero