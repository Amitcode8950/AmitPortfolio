import { useEffect } from 'react';

const useTilt = (ref, settings = {}) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const defaultSettings = {
      max: 15,
      perspective: 1000,
      scale: 1.05,
      speed: 400,
      ...settings
    };

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -defaultSettings.max;
      const rotateY = ((x - centerX) / centerX) * defaultSettings.max;

      el.style.transform = `perspective(${defaultSettings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${defaultSettings.scale}, ${defaultSettings.scale}, ${defaultSettings.scale})`;
    };

    const handleMouseLeave = () => {
      el.style.transform = `perspective(${defaultSettings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    };

    el.style.transition = `transform ${defaultSettings.speed}ms ease`;
    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [ref, settings]);
};

export default useTilt;
