import { useEffect, useRef, useState } from 'react';

interface Meteor {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  delay: number;
}

const MeteorParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const meteorsRef = useRef<Meteor[]>([]);
  const animationRef = useRef<number>();
  const lastFrameTimeRef = useRef<number>(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Mobile optimizations
    const meteorCount = isMobile ? 8 : 20; // Fewer meteors on mobile
    const targetFPS = isMobile ? 30 : 60; // Lower framerate on mobile
    const frameInterval = 1000 / targetFPS;
    const enableGlow = !isMobile; // Disable glow effect on mobile

    const resizeCanvas = () => {
      // Use lower resolution on mobile for better performance
      const dpr = isMobile ? 1 : Math.min(window.devicePixelRatio, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    function createMeteor(width: number, height: number): Meteor {
      return {
        x: Math.random() * width * 1.5,
        y: -Math.random() * height * 0.5,
        length: isMobile ? Math.random() * 50 + 30 : Math.random() * 80 + 40,
        speed: isMobile ? Math.random() * 6 + 3 : Math.random() * 8 + 4,
        opacity: Math.random() * 0.6 + 0.4,
        delay: Math.random() * 3000,
      };
    }

    // Initialize meteors
    meteorsRef.current = Array.from({ length: meteorCount }, () => 
      createMeteor(window.innerWidth, window.innerHeight)
    );

    let startTime = Date.now();

    const animate = (currentTime: number) => {
      if (!ctx || !canvas) return;

      // Frame rate limiting for mobile
      const deltaTime = currentTime - lastFrameTimeRef.current;
      if (deltaTime < frameInterval) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastFrameTimeRef.current = currentTime - (deltaTime % frameInterval);
      
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      
      const elapsed = Date.now() - startTime;

      meteorsRef.current.forEach((meteor, index) => {
        // Skip if still in delay
        if (elapsed < meteor.delay) return;

        // Update position - falling diagonally
        const speedMultiplier = isMobile ? 1.2 : 1; // Slightly faster on mobile to compensate for lower FPS
        meteor.x -= meteor.speed * 0.7 * speedMultiplier;
        meteor.y += meteor.speed * speedMultiplier;

        // Simplified drawing for mobile (no gradient trail)
        if (isMobile) {
          // Simple line trail
          ctx.beginPath();
          ctx.moveTo(meteor.x + meteor.length * 0.5, meteor.y - meteor.length * 0.8);
          ctx.lineTo(meteor.x, meteor.y);
          ctx.strokeStyle = `rgba(200, 220, 255, ${meteor.opacity * 0.7})`;
          ctx.lineWidth = 1.5;
          ctx.lineCap = 'round';
          ctx.stroke();

          // Simple bright head
          ctx.beginPath();
          ctx.arc(meteor.x, meteor.y, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${meteor.opacity})`;
          ctx.fill();
        } else {
          // Full quality drawing for desktop
          const gradient = ctx.createLinearGradient(
            meteor.x + meteor.length * 0.7,
            meteor.y - meteor.length,
            meteor.x,
            meteor.y
          );
          
          gradient.addColorStop(0, `rgba(255, 255, 255, 0)`);
          gradient.addColorStop(0.3, `rgba(180, 200, 255, ${meteor.opacity * 0.3})`);
          gradient.addColorStop(0.7, `rgba(200, 220, 255, ${meteor.opacity * 0.7})`);
          gradient.addColorStop(1, `rgba(255, 255, 255, ${meteor.opacity})`);

          ctx.beginPath();
          ctx.moveTo(meteor.x + meteor.length * 0.7, meteor.y - meteor.length);
          ctx.lineTo(meteor.x, meteor.y);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2;
          ctx.lineCap = 'round';
          ctx.stroke();

          // Draw bright head
          ctx.beginPath();
          ctx.arc(meteor.x, meteor.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${meteor.opacity})`;
          ctx.fill();

          // Add glow effect (desktop only)
          if (enableGlow) {
            ctx.beginPath();
            ctx.arc(meteor.x, meteor.y, 4, 0, Math.PI * 2);
            const glowGradient = ctx.createRadialGradient(
              meteor.x, meteor.y, 0,
              meteor.x, meteor.y, 8
            );
            glowGradient.addColorStop(0, `rgba(180, 200, 255, ${meteor.opacity * 0.5})`);
            glowGradient.addColorStop(1, 'rgba(180, 200, 255, 0)');
            ctx.fillStyle = glowGradient;
            ctx.fill();
          }
        }

        // Reset meteor if it goes off screen
        if (meteor.y > window.innerHeight + 100 || meteor.x < -100) {
          meteorsRef.current[index] = createMeteor(window.innerWidth, window.innerHeight);
          meteorsRef.current[index].delay = 0;
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isMobile]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[1] pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default MeteorParticles;
