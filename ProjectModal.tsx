import { useEffect, useRef } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data';

interface Props {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);

  // Lock scroll, focus the dialog, and restore the previous page state on close.
  useEffect(() => {
    const previousActive = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key !== 'Tab') return;

      const dialog = document.querySelector<HTMLElement>('[role="dialog"]');
      if (!dialog) return;
      const focusable = Array.from(dialog.querySelectorAll<HTMLElement>(
        'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )).filter((element) => !element.hasAttribute('disabled'));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
      previousActive?.focus();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      {/* Backdrop — glass-02 level darkness + blur */}
      <div
        className="absolute inset-0 bg-[#020202]/85 backdrop-blur-[10px]"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel — animate-modal-in */}
      <div
        className="relative w-full sm:max-w-5xl max-h-[96dvh] overflow-y-auto flex flex-col sm:flex-row animate-modal-in"
        style={{
          background: 'rgba(11,11,11,0.95)',
          border: '1px solid rgba(255,255,255,0.07)',
          boxShadow: '0 2px 0 0 rgba(255,255,255,0.04) inset, 0 32px 80px rgba(0,0,0,0.9)',
          backdropFilter: 'blur(24px)',
        }}
      >
        {/* Close — glass-03 */}
        <button
          ref={closeRef}
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center glass-03 rounded-sm text-[#888] hover:text-[#F5F5F5] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
          aria-label="Close"
        >
          <X size={15} />
        </button>

        {/* Image */}
        <div className="sm:w-[54%] shrink-0 bg-[#0d0d0d] flex items-center justify-center min-h-[260px] sm:min-h-[500px] border-b sm:border-b-0 sm:border-r border-white/[0.05]">
          <img
            src={project.coverImage}
            alt={project.title}
            decoding="async"
            className="w-full object-contain"
            style={{ background: '#0d0d0d', maxHeight: '72vh' }}
          />
        </div>

        {/* Info */}
        <div className="flex flex-col justify-between p-8 sm:p-10 flex-1 min-w-0">
          <div>
            {/* Category tag */}
            <p className="font-mono text-[#383838] text-[0.56rem] tracking-[0.32em] uppercase mb-5">
              {project.category}
            </p>

            {/* Title */}
            <h2 id="project-modal-title" className="text-[#F5F5F5] text-2xl sm:text-[1.75rem] font-bold uppercase tracking-tight leading-[1.05]">
              {project.title}
            </h2>
            <p className="text-[#666] text-sm mt-1.5 mb-8 font-light">{project.subtitle}</p>

            {/* Description */}
            <p className="text-[#888] text-sm leading-[1.8] border-t border-white/[0.05] pt-6">
              {project.description}
            </p>

            {/* Tags — glass-03 */}
            <div className="flex flex-wrap gap-2 mt-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="glass-03 text-[#666] font-mono text-[0.56rem] tracking-[0.18em] uppercase px-3 py-1.5 rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Footer CTA */}
          <div className="mt-10 pt-6 border-t border-white/[0.05]">
            <a
              href="#contact"
              onClick={onClose}
              className="group inline-flex items-center gap-2.5 text-[#F5F5F5] text-[0.7rem] font-bold tracking-[0.16em] uppercase hover:opacity-60 transition-opacity duration-200"
            >
              Start a Similar Project
              <ArrowUpRight
                size={12}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
