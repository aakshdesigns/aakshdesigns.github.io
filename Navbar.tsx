import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useMagnetic } from '@/useMagnetic';

const links = [
  { label: 'Work',     href: '#work' },
  { label: 'About',   href: '#about' },
  { label: 'Services',href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const talkRef = useMagnetic<HTMLAnchorElement>(0.22);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ease-out ${
        scrolled
          ? 'top-3 left-4 right-4 sm:left-6 sm:right-6 rounded-xl glass-01-scrolled'
          : 'top-0 inset-x-0 rounded-none'
      } ${!scrolled ? 'bg-transparent border-b border-transparent' : ''}`}
      style={scrolled ? {} : { background: 'transparent' }}
    >
      <nav
        className={`mx-auto max-w-[1600px] px-6 sm:px-10 flex items-center justify-between transition-all duration-500 ease-out ${
          scrolled ? 'h-[52px]' : 'h-16'
        }`}
      >
        {/* Brand */}
        <a
          href="#top"
          className="font-sans text-[#F5F5F5] text-sm font-semibold tracking-[0.12em] uppercase hover:opacity-60 transition-opacity duration-200 link-underline"
          aria-label="Portfolio home"
        >
          Aakash Kamble
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[#888] text-[0.8rem] font-medium tracking-wide hover:text-[#F5F5F5] transition-colors duration-200 link-underline"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: availability + CTA */}
        <div className="hidden md:flex items-center gap-5">
          <span className="flex items-center gap-2 text-[#555] text-[0.65rem] font-mono tracking-widest uppercase">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-40" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
            </span>
            Available
          </span>
          <a
            ref={talkRef}
            href="#contact"
            className="magnetic group relative overflow-hidden inline-flex items-center gap-2 text-[#080808] bg-[#F5F5F5] text-[0.68rem] font-bold tracking-[0.12em] uppercase px-5 py-2.5 transition-colors duration-200 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex h-11 w-11 items-center justify-center text-[#F5F5F5] hover:bg-white/5 rounded transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-navigation"
        aria-hidden={!open}
        className={`md:hidden overflow-hidden transition-all duration-350 ease-out ${
          open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul
          className={`px-6 py-5 space-y-0 border-t border-white/[0.06] ${
            scrolled ? '' : 'bg-[#080808]/95 backdrop-blur-xl'
          }`}
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3.5 text-[#888] text-base font-medium border-b border-white/[0.05] hover:text-[#F5F5F5] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block text-center bg-[#F5F5F5] text-[#080808] text-sm font-bold tracking-wider uppercase py-3 hover:bg-white transition-colors"
            >
              Let&apos;s Talk
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
