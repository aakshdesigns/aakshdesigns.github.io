import { useRevealContainer } from '@/useReveal';

const steps = [
  {
    n: '01',
    title: 'Understand',
    body: 'Learn the goal, audience and visual direction. I ask the right questions before picking up a pen or opening a file.',
  },
  {
    n: '02',
    title: 'Explore',
    body: 'Research, sketch and experiment with visual ideas. This is where possibilities open up before they get refined.',
  },
  {
    n: '03',
    title: 'Design',
    body: 'Develop typography, imagery, layout and motion. Sketches become systems, and systems become visuals.',
  },
  {
    n: '04',
    title: 'Refine & Deliver',
    body: 'Polish the final work and prepare the required assets — print-ready, screen-ready, or ready to post.',
  },
];

export default function Process() {
  const ref = useRevealContainer();

  return (
    <section
      id="process"
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-[#060606] border-t border-[#111]"
    >
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 py-28 lg:py-36">

        {/* Label */}
        <p className="reveal-item font-mono text-[#333] text-[0.6rem] tracking-[0.35em] uppercase mb-8" style={{ transitionDelay: '0ms' }}>
          Process
        </p>

        {/* Headline */}
        <h2
          className="reveal-item text-[#F5F5F5] text-[clamp(2rem,5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.025em] max-w-2xl mb-20"
          style={{ transitionDelay: '60ms' }}
        >
          FROM BRIEF<br />TO FINAL DELIVERY.
        </h2>

        {/* Steps grid */}
        <ol className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#111]">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className="reveal-item group border-b border-r border-[#111] p-8 sm:p-10 transition-colors duration-300 hover:bg-[#0a0a0a]"
              style={{ transitionDelay: `${120 + i * 70}ms` }}
            >
              {/* Step number */}
              <span className="block font-mono text-[#222] text-5xl font-light leading-none transition-colors duration-300 group-hover:text-[#383838]">
                {s.n}
              </span>
              {/* Animated accent line */}
              <span className="block mt-6 h-px w-0 bg-[#444] transition-all duration-500 ease-out group-hover:w-10" />
              <h3 className="mt-6 text-[#F5F5F5] text-base font-semibold tracking-wide uppercase">{s.title}</h3>
              <p className="mt-3 text-[#555] text-sm leading-[1.75]">{s.body}</p>
            </li>
          ))}
        </ol>

      </div>
    </section>
  );
}
