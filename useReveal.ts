import { useEffect, useRef, useState } from 'react';

/**
 * Single-element reveal — adds `is-visible` to the element itself.
 * Legacy export kept for backward compat.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );
    observer.observe(el);

    const checkInitial = () => {
      const rect = el.getBoundingClientRect();
      if (rect.bottom > window.innerHeight * -0.1 && rect.top < window.innerHeight) {
        setVisible(true);
        observer.unobserve(el);
      }
    };
    requestAnimationFrame(checkInitial);

    const fallback = setTimeout(() => { setVisible(true); }, 2500);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return { ref, visible };
}

/**
 * Container-based reveal — observes every `.reveal-item` child inside
 * the returned ref element and adds `is-visible` when each enters view.
 * Works with the CSS `.reveal-item` / `.reveal-item.is-visible` in index.css.
 */
export function useRevealContainer(threshold = 0.1) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = Array.from(el.querySelectorAll<HTMLElement>('.reveal-item'));
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
