import { useEffect, useRef } from 'react';

/**
 * Subtle magnetic hover effect — the element gently pulls toward the
 * cursor while hovered, then springs back to rest on mouse leave.
 * Disabled on coarse-pointer (touch) devices and when the user prefers
 * reduced motion.
 */
export function useMagnetic<T extends HTMLElement = HTMLButtonElement>(strength = 0.28) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };

    const onLeave = () => {
      el.style.transform = 'translate(0px, 0px)';
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [strength]);

  return ref;
}
