import { ArrowUpRight } from 'lucide-react';
import { services } from '@/data';
import { useRevealContainer } from '@/useReveal';
import { useMagnetic } from '@/useMagnetic';

export default function Services() {
  const ref = useRevealContainer();
  const ctaRef = useMagnetic<HTMLAnchorElement>();

  return (
    <section
      id="services"
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-[#060606] border-t border-[#111]"
    >
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 py-28 lg:py-36">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="reveal-item" style={{ transitionDelay: '0ms' }}>
            <p className="font-mono text-[#333] text-[0.6rem] tracking-[0.35em] uppercase mb-8">
              Services
            </p>
            <h2 className="text-[#F5F5F5] text-[clamp(2rem,5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.025em]">
              WHAT I DO
            </h2>
          </div>
          <p className="reveal-item max-w-sm text-[#555] text-sm leading-[1.8]" style={{ transitionDelay: '80ms' }}>
            From brand identities to social media graphics — I work across the full visual spectrum.
          </p>
        </div>

        {/* Service rows */}
        <ol className="border-t border-[#111]">
          {services.map((service, i) => (
            <li
              key={service.title}
              className="reveal-item group flex items-center justify-between gap-6 border-b border-[#111] py-6 px-2 hover:bg-[#0d0d0d] transition-colors duration-200 cursor-default"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="flex items-start gap-6 min-w-0">
                <span className="font-mono text-[#2a2a2a] text-[0.58rem] shrink-0 w-8 pt-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0">
                  <h3 className="text-[#888] text-base sm:text-lg font-medium tracking-wide group-hover:text-[#F5F5F5] transition-colors duration-200 truncate">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-[#333] text-[0.78rem] leading-relaxed group-hover:text-[#555] transition-colors duration-200 truncate">
                    {service.description}
                  </p>
                </div>
              </div>
              <span className="flex-shrink-0 text-[#2a2a2a] group-hover:text-[#555] transition-colors duration-200">
                <ArrowUpRight size={15} />
              </span>
            </li>
          ))}
        </ol>

        {/* CTA */}
        <div className="mt-14 reveal-item" style={{ transitionDelay: `${services.length * 40 + 40}ms` }}>
          <a
            ref={ctaRef}
            href="#contact"
            className="magnetic group inline-flex items-center gap-3 bg-[#F5F5F5] text-[#080808] text-[0.7rem] font-bold tracking-[0.14em] uppercase px-8 py-[14px] hover:bg-white transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
          >
            Start a Project
            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

      </div>
    </section>
  );
}
