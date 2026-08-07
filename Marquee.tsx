const items = [
  'Graphic Design',
  'Video Editing',
  'Branding',
  'Typography',
  'Posters',
  'Social Media',
  'Photo Editing',
  'Visual Communication',
];

const Dot = () => (
  <span className="mx-10 inline-block h-1.5 w-1.5 rounded-full bg-[#333] align-middle shrink-0" aria-hidden="true" />
);

export default function Marquee() {
  // Triplicate so the infinite loop never shows a gap
  const row = [...items, ...items, ...items];

  return (
    <section
      className="border-y border-[#1a1a1a] bg-[#080808] py-5 overflow-hidden select-none"
      aria-label="Skills marquee"
    >
      <div className="flex w-max animate-marquee items-center" aria-hidden="true">
        {row.map((item, i) => (
          <span key={i} className="inline-flex items-center whitespace-nowrap">
            <span className="font-sans text-xl font-medium tracking-tight text-[#444]">
              {item}
            </span>
            <Dot />
          </span>
        ))}
      </div>
    </section>
  );
}
