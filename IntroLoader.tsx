import { useEffect, useRef, useState } from 'react';

/**
 * Premium intro loader that plays once on first load.
 * Shows the brand monogram with a real progress readout tied to
 * document load state, then fades smoothly to reveal the page.
 */
export default function IntroLoader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (document.documentElement.hasAttribute('data-intro-played')) {
      setHidden(true);
      return;
    }

    let target = 0.06;
    const isLoaded = () => document.readyState === 'complete';

    const tick = () => {
      target = Math.min(isLoaded() ? 1 : 0.92, target + (1 - target) * 0.045 + 0.004);
      setProgress(target);
      if (target < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    rafRef.current = requestAnimationFrame(tick);

    const onLoad = () => {
      target = 1;
      setProgress(1);
    };
    window.addEventListener('load', onLoad);

    const finish = setTimeout(() => {
      setProgress(1);
      setDone(true);
      document.documentElement.setAttribute('data-intro-played', 'true');
      setTimeout(() => setHidden(true), 700);
    }, 1500);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('load', onLoad);
      clearTimeout(finish);
    };
  }, []);

  if (hidden) return null;

  const pct = Math.round(progress * 100);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#080808] transition-opacity duration-700 ease-out ${
        done ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      role="status"
      aria-label={`Loading, ${pct} percent`}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="flex h-20 w-20 items-center justify-center border border-[#333] text-[#F5F5F5] font-sans text-4xl font-bold animate-fade-in">
          A
        </div>
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-[#888] animate-fade-in">
          Aakash Kamble
        </p>
      </div>

      {/* Progress readout */}
      <div className="absolute bottom-14 flex flex-col items-center gap-3 w-40">
        <div className="h-px w-full bg-[#1a1a1a] overflow-hidden">
          <div
            className="h-full bg-[#F5F5F5]"
            style={{ width: `${pct}%`, transition: 'width 120ms linear' }}
          />
        </div>
        <span className="font-mono text-[0.6rem] tracking-[0.25em] text-[#444] tabular-nums">
          {String(pct).padStart(3, '0')}%
        </span>
      </div>
    </div>
  );
}
