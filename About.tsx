import { skills, tools } from '@/data';
import { useRevealContainer } from '@/useReveal';

export default function About() {
  const ref = useRevealContainer();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-[#080808] border-t border-[#111]"
    >
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 py-28 lg:py-36">

        {/* Label */}
        <p className="reveal-item font-mono text-[#333] text-[0.6rem] tracking-[0.35em] uppercase mb-14" style={{ transitionDelay: '0ms' }}>
          About
        </p>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-start">

          {/* Left — headline */}
          <div className="reveal-item" style={{ transitionDelay: '60ms' }}>
            <h2 className="text-[#F5F5F5] text-[clamp(2rem,4.5vw,4rem)] font-bold uppercase leading-[0.92] tracking-[-0.025em]">
              DESIGNING IDEAS<br />INTO VISUAL<br />EXPERIENCES.
            </h2>
          </div>

          {/* Right — bio */}
          <div className="reveal-item" style={{ transitionDelay: '130ms' }}>
            <p className="text-[#666] text-base leading-[1.8] max-w-xl">
              {"I'm a graphic designer and brand creator, building visual identities engineered to command attention. My practice spans brand identity, logo design, advertising, social media and visual design — every mark, layout and campaign shaped by clear strategy, precise typography and an uncompromising eye for detail. The result isn't just work that looks refined. It's design built to perform."}
            </p>
          </div>
        </div>

        {/* Specialisations grid */}
        <div className="mt-24 border-t border-[#111] pt-16 reveal-item" style={{ transitionDelay: '180ms' }}>
          <p className="font-mono text-[#333] text-[0.6rem] tracking-[0.35em] uppercase mb-10">
            Specialisations
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="border-t border-l border-[#111] px-5 py-6 group hover:bg-[#0d0d0d] transition-colors duration-300"
                style={{ borderRight: i === skills.length - 1 ? '1px solid #111' : undefined }}
              >
                <p className="text-[#555] text-xs font-medium leading-relaxed group-hover:text-[#F5F5F5] transition-colors duration-300">
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="mt-16 border-t border-[#111] pt-14 reveal-item" style={{ transitionDelay: '240ms' }}>
          <p className="font-mono text-[#333] text-[0.6rem] tracking-[0.35em] uppercase mb-8">
            Tools I Work With
          </p>
          <div className="flex flex-wrap gap-2.5">
            {tools.map((tool, i) => (
              <span
                key={i}
                className="glass-03 text-[#666] font-mono text-[0.62rem] tracking-[0.15em] uppercase px-5 py-2.5 rounded-sm hover:text-[#F5F5F5] transition-colors duration-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
