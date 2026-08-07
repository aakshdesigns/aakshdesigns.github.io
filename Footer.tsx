import { ArrowUp } from 'lucide-react';

const socials = [
  { label: 'Instagram', href: '#' },
  { label: 'Behance',   href: '#' },
  { label: 'LinkedIn',  href: '#' },
];

const navLinks = [
  { label: 'Work',     href: '#work' },
  { label: 'About',   href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process',  href: '#process' },
  { label: 'Contact',  href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#111] bg-[#050505]">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 pt-16 pb-12">
        <div className="grid sm:grid-cols-3 gap-12 sm:gap-8">

          {/* Brand */}
          <div>
            <a
              href="#top"
              className="inline-block font-sans text-[#F5F5F5] text-sm font-semibold tracking-[0.14em] uppercase hover:opacity-50 transition-opacity duration-200"
              aria-label="Portfolio home"
            >
              Aakash Kamble
            </a>
            <p className="mt-5 max-w-xs text-[0.82rem] text-[#444] leading-[1.8]">
              Graphic designer, video editor and computer teacher. Exploring ideas through type,
              image and motion.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-mono text-[0.58rem] uppercase tracking-[0.25em] text-[#2d2d2d] mb-6">
              Navigation
            </p>
            <ul className="space-y-3.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[0.82rem] text-[#444] hover:text-[#F5F5F5] transition-colors duration-200 link-underline"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + back to top */}
          <div className="flex flex-col justify-between gap-10">
            <div>
              <p className="font-mono text-[0.58rem] uppercase tracking-[0.25em] text-[#2d2d2d] mb-6">
                Find me on
              </p>
              <ul className="space-y-3.5">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      className="text-[0.82rem] text-[#444] hover:text-[#F5F5F5] transition-colors duration-200 link-underline"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Back to top */}
            <a
              href="#top"
              className="group self-start sm:self-end inline-flex items-center gap-2.5 text-[0.7rem] font-mono tracking-[0.15em] uppercase text-[#333] hover:text-[#F5F5F5] transition-colors duration-200"
              aria-label="Back to top"
            >
              Back to top
              <span className="flex h-7 w-7 items-center justify-center glass-03 rounded-sm transition-all duration-200 group-hover:bg-[#F5F5F5] group-hover:text-[#080808]">
                <ArrowUp size={13} />
              </span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-[#0e0e0e] flex flex-col sm:flex-row justify-between gap-3 text-[0.68rem] text-[#2a2a2a] font-mono">
          <span>&copy; {new Date().getFullYear()} Aakash Kamble. All rights reserved.</span>
          <span>Designed &amp; built with care.</span>
        </div>
      </div>
    </footer>
  );
}
