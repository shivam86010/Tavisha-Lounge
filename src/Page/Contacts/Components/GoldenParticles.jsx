// // GoldenParticles.jsx
// import React, { useEffect, useRef } from 'react';

// const GoldenParticles = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     let animationFrameId;

//     const setCanvasSize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     setCanvasSize();
//     window.addEventListener('resize', setCanvasSize);

//     class Particle {
//       constructor() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.size = Math.random() * 3 + 0.5;
//         this.speedX = Math.random() * 0.3 - 0.15;
//         this.speedY = Math.random() * 0.3 - 0.15;
//         this.opacity = Math.random() * 0.4 + 0.1;
//         this.wobble = Math.random() * 2;
//         this.wobbleSpeed = Math.random() * 0.02 + 0.01;
//         this.angle = Math.random() * Math.PI * 2;
//         this.color = Math.random() > 0.7 ? '#F4D03F' : '#D4AF37';
//       }

//       update() {
//         this.angle += this.wobbleSpeed;
//         this.x += this.speedX + Math.cos(this.angle) * this.wobble;
//         this.y += this.speedY + Math.sin(this.angle) * this.wobble;

//         // Boundary check with smooth wrapping
//         if (this.x > canvas.width + 50) this.x = -50;
//         if (this.x < -50) this.x = canvas.width + 50;
//         if (this.y > canvas.height + 50) this.y = -50;
//         if (this.y < -50) this.y = canvas.height + 50;
//       }

//       draw() {
//         ctx.save();
        
//         // Create golden glow effect
//         const gradient = ctx.createRadialGradient(
//           this.x, this.y, 0,
//           this.x, this.y, this.size * 3
//         );
//         gradient.addColorStop(0, this.color);
//         gradient.addColorStop(0.5, `${this.color}80`);
//         gradient.addColorStop(1, 'transparent');

//         ctx.globalAlpha = this.opacity;
//         ctx.fillStyle = gradient;
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
//         ctx.fill();

//         // Core particle
//         ctx.globalAlpha = this.opacity + 0.2;
//         ctx.fillStyle = this.color;
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.fill();
        
//         ctx.restore();
//       }
//     }

//     const particles = [];
//     const particleCount = Math.min(60, Math.floor(window.innerWidth / 20));

//     // Initialize particles
//     for (let i = 0; i < particleCount; i++) {
//       particles.push(new Particle());
//     }

//     const animate = () => {
//       // Clear with fade effect for trails
//       ctx.fillStyle = 'rgba(250, 243, 224, 0.05)';
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       // Draw connection lines
//       particles.forEach((particle, i) => {
//         particles.forEach((otherParticle, j) => {
//           if (i < j) {
//             const dx = particle.x - otherParticle.x;
//             const dy = particle.y - otherParticle.y;
//             const distance = Math.sqrt(dx * dx + dy * dy);
            
//             if (distance < 120) {
//               const opacity = 1 - distance / 120;
//               ctx.strokeStyle = `rgba(212, 175, 55, ${opacity * 0.1})`;
//               ctx.lineWidth = 0.5;
//               ctx.beginPath();
//               ctx.moveTo(particle.x, particle.y);
//               ctx.lineTo(otherParticle.x, otherParticle.y);
//               ctx.stroke();
//             }
//           }
//         });
//       });

//       // Update and draw particles
//       particles.forEach(particle => {
//         particle.update();
//         particle.draw();
//       });

//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       cancelAnimationFrame(animationFrameId);
//       window.removeEventListener('resize', setCanvasSize);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed inset-0 pointer-events-none z-0"
//       style={{ 
//         background: 'transparent',
//         mixBlendMode: 'multiply'
//       }}
//     />
//   );
// };

// export default GoldenParticles;

// ChromaGrid.jsx
import React, { useEffect, useRef } from 'react';

const ChromaGrid = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    class GridPoint {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.originalX = x;
        this.originalY = y;
        this.size = Math.random() * 2 + 0.5;
        this.speed = Math.random() * 0.5 + 0.1;
        this.angle = Math.random() * Math.PI * 2;
        this.distance = Math.random() * 3 + 1;
        this.hue = Math.random() * 60 + 180; // Blue to purple range
        this.pulse = 0;
        this.pulseSpeed = Math.random() * 0.05 + 0.02;
      }

      update(mouse) {
        // Gentle floating motion
        this.angle += this.speed * 0.01;
        this.x = this.originalX + Math.cos(this.angle) * this.distance;
        this.y = this.originalY + Math.sin(this.angle) * this.distance;

        // Mouse interaction
        if (mouse.x && mouse.y) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const force = (100 - distance) / 100;
            this.x += dx * force * 0.1;
            this.y += dy * force * 0.1;
          }
        }

        // Pulsing effect
        this.pulse += this.pulseSpeed;
        const pulseSize = this.size + Math.sin(this.pulse) * 0.5;
        
        return pulseSize;
      }

      draw(ctx, size) {
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, size * 3
        );
        
        gradient.addColorStop(0, `hsla(${this.hue}, 70%, 60%, 0.8)`);
        gradient.addColorStop(0.5, `hsla(${this.hue}, 70%, 50%, 0.3)`);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Core dot
        ctx.fillStyle = `hsla(${this.hue}, 100%, 70%, 0.9)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const grid = [];
    const gridSize = 40;
    const mouse = { x: null, y: null };

    // Initialize grid
    for (let x = gridSize; x < canvas.width; x += gridSize) {
      for (let y = gridSize; y < canvas.height; y += gridSize) {
        grid.push(new GridPoint(x, y));
      }
    }

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const animate = () => {
      // Clear with fade effect
      ctx.fillStyle = 'rgba(15, 23, 42, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.1)';
      ctx.lineWidth = 0.5;

      grid.forEach((point, i) => {
        grid.forEach((otherPoint, j) => {
          if (i < j) {
            const dx = point.x - otherPoint.x;
            const dy = point.y - otherPoint.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < gridSize * 2) {
              const opacity = 1 - distance / (gridSize * 2);
              ctx.strokeStyle = `rgba(139, 92, 246, ${opacity * 0.1})`;
              ctx.beginPath();
              ctx.moveTo(point.x, point.y);
              ctx.lineTo(otherPoint.x, otherPoint.y);
              ctx.stroke();
            }
          }
        });
      });

      // Update and draw points
      grid.forEach(point => {
        const size = point.update(mouse);
        point.draw(ctx, size);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', setCanvasSize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default ChromaGrid;