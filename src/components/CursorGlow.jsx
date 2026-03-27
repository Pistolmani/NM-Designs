import React, { useEffect, useRef } from 'react';

const CursorGlow = () => {
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);
  const glowRef = useRef(null);

  const lerp = (a, b, t) => a + (b - a) * t;

  useEffect(() => {
    const isDesktop = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isDesktop || prefersReducedMotion) return;

    const animate = () => {
      currentRef.current.x = lerp(currentRef.current.x, targetRef.current.x, 0.065);
      currentRef.current.y = lerp(currentRef.current.y, targetRef.current.y, 0.065);

      if (glowRef.current) {
        glowRef.current.style.setProperty('--glow-x', `${currentRef.current.x}px`);
        glowRef.current.style.setProperty('--glow-y', `${currentRef.current.y}px`);
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event) => {
      targetRef.current.x = event.clientX;
      targetRef.current.y = event.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    if (glowRef.current) {
      glowRef.current.style.opacity = '1';
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />;
};

export default CursorGlow;
