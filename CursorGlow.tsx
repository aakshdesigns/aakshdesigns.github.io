import { useEffect, useRef, useState } from 'react';

/**
 * Premium adaptive cursor:
 * — Dot: mix-blend-mode:difference so it inverts against any bg — always visible
 * — Ring: soft translucent follower with spring lag
 * — VIEW label: expands on [data-cursor="view"] elements
 * — Disabled entirely on coarse-pointer (touch) devices
 */
export default function CursorGlow() {
  const dotRef   = useRef<HTMLDivElement>(null);
  const ringRef  = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    setEnabled(true);

    let mx = window.innerWidth  / 2;
    let my = window.innerHeight / 2;
    let rx = mx, ry = my;
    let raf = 0;

    type CursorState = 'default' | 'link' | 'view' | 'button';
    let state: CursorState = 'default';

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest('[data-cursor="view"]')) {
        state = 'view';
      } else if (t.closest('button, [role="button"]')) {
        state = 'button';
      } else if (t.closest('a')) {
        state = 'link';
      } else {
        state = 'default';
      }
    };

    const loop = () => {
      // spring lag for ring
      const lag = state === 'view' ? 0.08 : 0.13;
      rx += (mx - rx) * lag;
      ry += (my - ry) * lag;

      // dot: always follows exactly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx}px,${my}px)`;
      }

      // ring scale + opacity
      if (ringRef.current) {
        const scale = state === 'view'   ? 2.8
                    : state === 'button' ? 1.5
                    : state === 'link'   ? 1.7
                    : 1;
        ringRef.current.style.transform = `translate(${rx}px,${ry}px) scale(${scale})`;
        ringRef.current.style.opacity = state === 'view' ? '0' : '1';
        ringRef.current.style.borderColor =
          state === 'link' || state === 'button'
            ? 'rgba(245,245,245,0.6)'
            : 'rgba(245,245,245,0.28)';
      }

      // VIEW label
      if (labelRef.current) {
        labelRef.current.style.transform = `translate(${rx}px,${ry}px)`;
        labelRef.current.style.opacity = state === 'view' ? '1' : '0';
        labelRef.current.style.scale   = state === 'view' ? '1' : '0.55';
      }

      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    raf = requestAnimationFrame(loop);

    document.documentElement.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(raf);
      document.documentElement.style.cursor = '';
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Dot — mix-blend-mode:difference makes it always visible on any bg */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-[7px] w-[7px] -translate-x-[3.5px] -translate-y-[3.5px] rounded-full bg-white"
        style={{ willChange: 'transform', mixBlendMode: 'difference' }}
      />
      {/* Ring — lagging follower */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-9 w-9 -translate-x-[18px] -translate-y-[18px] rounded-full border border-[rgba(245,245,245,0.28)] transition-[border-color,opacity] duration-200 ease-out"
        style={{ willChange: 'transform' }}
      />
      {/* VIEW label */}
      <div
        ref={labelRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] flex h-[72px] w-[72px] -translate-x-9 -translate-y-9 items-center justify-center rounded-full bg-[#F5F5F5] opacity-0 transition-[opacity,scale] duration-300 ease-out"
        style={{ willChange: 'transform' }}
      >
        <span className="font-mono text-[0.55rem] font-bold uppercase tracking-[0.22em] text-[#080808]">
          View
        </span>
      </div>
    </>
  );
}
