import { useCallback, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects, ALL_CATEGORIES, type Project, type Category } from '@/data';
import { useRevealContainer } from '@/useReveal';

interface WorkProps {
  onOpenProject: (project: Project) => void;
}

// Cover image that fades in smoothly once decoded, instead of popping in.
function ProjectImage({ src, alt, eager, priority }: { src: string; alt: string; eager?: boolean; priority?: boolean }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      ref={(node) => {
        if (node && priority) node.setAttribute('fetchpriority', 'high');
      }}
      onLoad={() => setLoaded(true)}
      className={`pointer-events-none absolute inset-0 w-full h-full object-contain transition-[opacity,transform] duration-700 ease-out group-hover:scale-[1.04] ${
        loaded ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ background: '#111' }}
    />
  );
}

// Reusable glass info overlay rendered on top of every card on hover
function CardOverlay({ title, subtitle, category, year, tags, size }: {
  title: string;
  subtitle: string;
  category: string;
  year: number;
  tags: string[];
  size: 'lg' | 'sm';
}) {
  return (
    <>
      {/* Darkening overlay */}
      <div className="absolute inset-0 bg-[#080808]/0 group-hover:bg-[#080808]/50 transition-all duration-500 ease-out" />
      {/* Glass info strip — slides up */}
      <div
        className="absolute inset-x-0 bottom-0 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          background: 'linear-gradient(to top, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.6) 60%, transparent 100%)',
        }}
      >
        <div className={`flex items-end justify-between ${size === 'lg' ? 'p-6' : 'p-4'}`}>
          <div className="min-w-0">
            <p className={`text-[#F5F5F5] font-bold leading-tight truncate ${size === 'lg' ? 'text-base' : 'text-sm'}`}>
              {title}
            </p>
            {size === 'lg' && (
              <p className="text-[#aaa] text-xs font-mono tracking-wider mt-1 truncate">
                {subtitle}
              </p>
            )}
            <p className="flex items-center gap-2 text-[#666] text-[0.58rem] font-mono tracking-[0.2em] uppercase mt-1.5">
              <span>{category}</span>
              <span className="text-[#3a3a3a]" aria-hidden="true">&middot;</span>
              <span className="tabular-nums">{year}</span>
            </p>
            {size === 'lg' && tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2.5">
                {tags.slice(0, 3).map((t) => (
                  <span key={t} className="glass-03 text-[0.55rem] font-mono tracking-[0.15em] uppercase text-[#888] px-2 py-0.5 rounded-sm">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
          <span className="flex-shrink-0 flex items-center justify-center w-9 h-9 border border-[#444] text-[#F5F5F5] ml-4 transition-all duration-300 group-hover:border-[#888] group-hover:scale-110">
            <ArrowUpRight size={14} />
          </span>
        </div>
      </div>
    </>
  );
}

export default function Work({ onOpenProject }: WorkProps) {
  const [activeFilter, setActiveFilter] = useState<Category | 'All'>('All');
  const ref = useRevealContainer(0.05);

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const handleOpen = useCallback((p: Project) => {
    onOpenProject(p);
  }, [onOpenProject]);

  const cardBase =
    'group relative overflow-hidden cursor-none bg-[#111] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.01] hover:shadow-[0_24px_48px_rgba(0,0,0,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40';

  return (
    <section id="work" ref={ref as React.RefObject<HTMLElement>} className="bg-[#080808]">

      {/* ── Section header ── */}
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 pt-24 pb-16 border-b border-[#111]">
        <p className="font-mono text-[#333] text-[0.6rem] tracking-[0.35em] uppercase mb-8">
          Selected Work
        </p>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2 className="text-[#F5F5F5] text-[clamp(2.5rem,7vw,6.5rem)] font-bold uppercase leading-[0.88] tracking-[-0.03em]">
            SELECTED<br />WORK
          </h2>
          <p className="max-w-sm text-[#555] text-sm leading-relaxed lg:text-base">
            A selection of branding, advertising and visual design projects.
          </p>
        </div>
      </div>

      {/* ── Featured Branding ── */}
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 pt-16 pb-8">
        <p className="font-mono text-[#333] text-[0.58rem] tracking-[0.3em] uppercase mb-8">
          01&nbsp;&mdash;&nbsp;Featured Branding
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {projects.filter((p) => p.featured && p.category === 'Branding').map((project, i) => (
            <div
              key={project.id}
              data-cursor="view"
              className={`${cardBase} cursor-pointer sm:cursor-none reveal-item`}
              style={{ aspectRatio: '4/3', transitionDelay: `${i * 60}ms` }}
              onClick={() => handleOpen(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOpen(project);
                }
              }}
              aria-label={`View ${project.title} — ${project.subtitle}`}
            >
              <ProjectImage
                src={project.coverImage}
                alt={`${project.title} — ${project.subtitle}`}
                eager
                priority
              />
              <CardOverlay
                title={project.title}
                subtitle={project.subtitle}
                category={project.category}
                year={project.year}
                tags={project.tags}
                size="lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── Featured Advertising ── */}
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 pt-8 pb-8">
        <p className="font-mono text-[#333] text-[0.58rem] tracking-[0.3em] uppercase mb-8">
          02&nbsp;&mdash;&nbsp;Featured Advertising
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {projects.filter((p) => p.featured && p.category !== 'Branding').map((project, i) => (
            <div
              key={project.id}
              data-cursor="view"
              className={`${cardBase} cursor-pointer sm:cursor-none reveal-item`}
              style={{ aspectRatio: '3/4', transitionDelay: `${(i % 3) * 60}ms` }}
              onClick={() => handleOpen(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOpen(project);
                }
              }}
              aria-label={`View ${project.title} — ${project.subtitle}`}
            >
              <ProjectImage
                src={project.coverImage}
                alt={`${project.title} — ${project.subtitle}`}
                eager
              />
              <CardOverlay
                title={project.title}
                subtitle={project.subtitle}
                category={project.category}
                year={project.year}
                tags={project.tags}
                size="sm"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── ALL WORK ── */}
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 pt-16 pb-24 border-t border-[#111] mt-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <h2 className="text-[#F5F5F5] text-[clamp(2rem,5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.03em]">
            ALL<br />WORK
          </h2>
        </div>

        {/* Filter tabs — glass-03 */}
        <div className="flex flex-wrap gap-2 mb-10">
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`font-mono text-[0.58rem] tracking-[0.2em] uppercase px-4 py-3 rounded-sm border transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 ${
                activeFilter === cat
                  ? 'bg-[#F5F5F5] text-[#080808] border-[#F5F5F5]'
                  : 'glass-03 text-[#666] hover:text-[#F5F5F5] hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid — key on filter so the entrance animation replays per filter change */}
        <div
          key={activeFilter}
          className="columns-1 sm:columns-2 lg:columns-3"
          style={{ columnGap: '12px' }}
        >
          {filtered.map((project, i) => {
            const isLandscape = project.aspectRatio === 'landscape';
            const isSquare    = project.aspectRatio === 'square';
            return (
              <div
                key={project.id}
                data-cursor="view"
                className={`${cardBase} break-inside-avoid mb-3 opacity-0 animate-fade-up`}
                style={{
                  aspectRatio: isLandscape ? '16/9' : isSquare ? '1/1' : '3/4',
                  animationDelay: `${(i % 6) * 60}ms`,
                }}
                onClick={() => handleOpen(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOpen(project);
                }
              }}
                aria-label={`View ${project.title}`}
              >
                <ProjectImage
                  src={project.coverImage}
                  alt={`${project.title} — ${project.subtitle}`}
                />
                <CardOverlay
                  title={project.title}
                  subtitle={project.subtitle}
                  category={project.category}
                  year={project.year}
                  tags={project.tags}
                  size="sm"
                />
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="text-[#333] font-mono text-xs tracking-widest uppercase text-center py-20">
            No projects in this category
          </p>
        )}
      </div>
    </section>
  );
}
