const tags = ['Batteries', 'Inverters', 'Solar', 'Tyres', 'Air Filling', 'Engine Oil'];

const services = [
  { name: 'Battery health check', tag: 'In-store' },
  { name: 'Battery replacement & fitting', tag: 'Same day' },
  { name: 'Tyre air filling', tag: 'In-store' },
  { name: 'Vehicle electrical check-up', tag: 'In-store' },
  { name: 'Inverter installation', tag: 'On-site' },
  { name: 'Solar site survey', tag: 'On-site' },
];

const rows = [
  { label: 'Track', cells: [['08+', '/years open'], ['10K+', '/customers'], ['08', '/brands']] },
  { label: 'Since', cells: [['2018', '/opened'], ['673571', '/pincode'], ['24/7', '/support']] },
];

export default function About() {
  return (
    <section id="shop" className="bg-paper px-6 py-28 text-ink md:px-10">
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="grid gap-10 md:grid-cols-[220px_1fr_1fr]">
          <div className="font-mono text-[10px] tracking-widest uppercase">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-neon" />
            Intro
          </div>
          <h2 className="display text-7xl md:text-8xl">/ Shop</h2>
          <div>
            <p className="max-w-md text-base leading-relaxed text-ink/80">
              AK Enterprises is a family-run battery and tyre shop in
              Chelavoor, Kozhikode. We sell, fit and service everything that
              stores or carries power — from bike batteries to rooftop solar.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span key={t} className="rounded-full border border-ink/20 px-3 py-1 font-mono text-[10px] tracking-wider uppercase">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20">
          {rows.map((r) => (
            <div key={r.label} className="grid gap-6 border-t border-ink/15 py-7 md:grid-cols-[220px_repeat(3,1fr)]">
              <div className="font-mono text-[10px] tracking-widest uppercase">
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-neon" />
                {r.label}
              </div>
              {r.cells.map(([v, s]) => (
                <div key={s} className="flex items-baseline gap-2">
                  <span className="display text-4xl">{v}</span>
                  <span className="font-mono text-[10px] tracking-widest text-ink/40 uppercase">{s}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-16">
          {services.map((s, i) => (
            <div
              key={s.name}
              className="fade-up grid grid-cols-[40px_1fr_auto] items-center gap-4 border-t border-ink/15 py-5 last:border-b md:grid-cols-[80px_1fr_auto]"
            >
              <span className="font-mono text-[10px] text-ink/40">0{i + 1}</span>
              <span className="text-lg font-medium md:text-xl">{s.name}</span>
              <span className="font-mono text-[10px] tracking-widest text-ink/50 uppercase">{s.tag}</span>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a href="#work" className="font-mono text-[10px] tracking-widest uppercase hover:text-ink/60">
            Read more ↗
          </a>
        </div>
      </div>
    </section>
  );
}
