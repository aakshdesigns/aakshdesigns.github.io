import { useRevealContainer } from '@/useReveal';

const allSkills = [
  'Graphic Design',
  'Video Editing',
  'Typography',
  'Color Theory',
  'Branding',
  'Poster Design',
  'Social Media Creatives',
  'Photo Editing',
  'Visual Communication',
  'Teaching',
  'Advanced Excel',
  'MS Office',
];

// Size classes staggered for an editorial feel
const sizeCycle = [
  'text-[2rem] sm:text-[2.5rem] text-[#F5F5F5] font-bold',
  'text-[1.4rem] sm:text-[1.75rem] text-[#555] font-medium',
  'text-[1.1rem] sm:text-[1.3rem] text-[#383838] font-medium',
  'text-[1.6rem] sm:text-[2rem]   text-[#666]   font-medium',
  'text-[0.95rem] sm:text-[1.1rem] text-[#333] font-normal',
];

export default function Skills() {
  const ref = useRevealContainer();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-[#080808] border-t border-[#111] overflow-hidden"
    >
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 py-28 lg:py-36">

        {/* Label */}
        <p className="reveal-item font-mono text-[#333] text-[0.6rem] tracking-[0.35em] uppercase mb-8" style={{ transitionDelay: '0ms' }}>
          What I know
        </p>

        {/* Headline */}
        <h2
          className="reveal-item text-[#F5F5F5] text-[clamp(2rem,5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.025em] max-w-2xl mb-16"
          style={{ transitionDelay: '60ms' }}
        >
          SKILLS BUILT<br />THROUGH PRACTICE.
        </h2>

        {/* Skill cloud */}
        <div className="reveal-item flex flex-wrap items-baseline gap-x-6 gap-y-3 leading-tight" style={{ transitionDelay: '120ms' }}>
          {allSkills.map((skill, i) => (
            <span
              key={skill}
              className={`
                cursor-default select-none font-sans leading-none
                transition-colors duration-300 hover:text-[#F5F5F5]
                ${sizeCycle[i % sizeCycle.length]}
              `}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 border-t border-[#111] pt-14 grid sm:grid-cols-3 gap-10">
          {[
            { label: '1+ Year',  sub: 'Teaching experience' },
            { label: 'Diploma',  sub: 'Graphic Design' },
            { label: '12 Skills', sub: 'Across design & production' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="reveal-item"
              style={{ transitionDelay: `${200 + i * 80}ms` }}
            >
              <p className="font-sans text-[clamp(2.5rem,5vw,4rem)] font-bold text-[#F5F5F5] leading-none tracking-tight">
                {stat.label}
              </p>
              <p className="mt-3 font-mono text-[0.58rem] uppercase tracking-[0.25em] text-[#383838]">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
