import { useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { useMagnetic } from '@/useMagnetic';

const headlineLines = ['GRAPHIC', 'DESIGNER'];

export default function Hero() {
  const [entered, setEntered] = useState(false);
  const workRef = useMagnetic<HTMLAnchorElement>();
  const talkRef = useMagnetic<HTMLAnchorElement>();

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 180);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-[680px] min-h-screen flex flex-col justify-end bg-[#080808] overflow-hidden"
      aria-label="Hero"
    >
      {/* Very subtle top-right ambient glow */}
      <div
        className="pointer-events-none absolute top-0 right-0 w-[700px] h-[600px] opacity-[0.03]"
        style={{
          background: 'radial-gradient(ellipse at 75% 5%, #ffffff 0%, transparent 65%)',
        }}
      />
      {/* Fine horizontal rule at 40% height — pure editorial detail */}
      <div
        className={`pointer-events-none absolute inset-x-0 h-px bg-[#1a1a1a] transition-opacity duration-[1400ms] ${entered ? 'opacity-100' : 'opacity-0'}`}
        style={{ top: '42%', transitionDelay: '1.1s' }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1600px] w-full px-5 sm:px-10 pb-14 sm:pb-20 pt-32 md:pt-44 lg:pt-48">

        {/* Discipline tag */}
        <div
          className={`transition-all duration-700 ${entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
          style={{ transitionDelay: '0.05s' }}
        >
          <p className="font-mono text-[#383838] text-[0.62rem] tracking-[0.32em] uppercase mb-10">
            Brand Identity&nbsp;&middot;&nbsp;Advertising&nbsp;&middot;&nbsp;Social Media&nbsp;&middot;&nbsp;Visual Design
          </p>
        </div>

        {/* Masked headline — mask-reveal per line */}
        <h1
          className="leading-[0.86] tracking-[-0.035em] text-[#F5F5F5] text-[clamp(4.5rem,14vw,14rem)] font-bold uppercase"
          aria-label="Graphic Designer"
        >
          {headlineLines.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <span
                className={`block transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  entered ? 'translate-y-0' : 'translate-y-[105%]'
                }`}
                style={{ transitionDelay: `${0.08 + i * 0.14}s` }}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>

        {/* Secondary line */}
        <div className="overflow-hidden">
          <p
            className={`text-[#383838] text-[clamp(1rem,2.2vw,1.8rem)] font-light tracking-[-0.01em] mt-1.5 transition-transform duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              entered ? 'translate-y-0' : 'translate-y-[110%]'
            }`}
            style={{ transitionDelay: '0.34s' }}
          >
            &amp;&nbsp;Brand&nbsp;Creator
          </p>
        </div>

        {/* Bottom row: bio + CTAs */}
        <div
          className={`mt-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 transition-all duration-800 ${
            entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '0.52s' }}
        >
          <p className="max-w-[380px] text-[#555] text-sm leading-[1.7] lg:text-[0.95rem]">
            I create bold visual identities, advertising creatives and digital experiences
            designed to make brands stand out.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              ref={workRef}
              href="#work"
              className="magnetic group inline-flex items-center gap-2.5 bg-[#F5F5F5] text-[#080808] text-[0.7rem] font-bold tracking-[0.14em] uppercase px-8 py-[14px] hover:bg-white transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
            >
              View My Work
              <ArrowDown
                size={13}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </a>
            <a
              ref={talkRef}
              href="#contact"
              className="magnetic group inline-flex items-center gap-2.5 border border-[#2a2a2a] text-[#888] text-[0.7rem] font-bold tracking-[0.14em] uppercase px-8 py-[14px] hover:border-[#555] hover:text-[#F5F5F5] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
            >
              Let&apos;s Work Together
              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div
          className={`mt-20 flex items-center gap-5 transition-all duration-700 ${
            entered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '1.0s' }}
        >
          {/* Animated vertical line */}
          <div className="relative h-12 w-px bg-[#1a1a1a] overflow-hidden">
            <div className="absolute inset-0 bg-[#444] animate-scroll-line origin-top" />
          </div>
          <span className="font-mono text-[#333] text-[0.58rem] tracking-[0.35em] uppercase">
            Scroll to explore
          </span>
        </div>
      </div>

      {/* Bottom rule */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-[#111]" />
    </section>
  );
}
