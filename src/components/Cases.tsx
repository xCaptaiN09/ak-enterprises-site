const cases = [
  { idx: '01', title: 'Battery sales & fitting', img: '/img/work-battery.webp' },
  { idx: '02', title: 'Inverter backup systems', img: '/img/work-inverter.webp' },
  { idx: '03', title: 'Rooftop solar installs', img: '/img/work-solar.webp' },
  { idx: '04', title: 'Tyres & air filling', img: '/img/work-tyre.webp' },
];

export default function Cases() {
  return (
    <section id="work" className="bg-ink px-4 py-4">
      <div className="mx-auto w-full max-w-[1600px] px-2 pt-16 pb-8 md:px-4">
        <h2 className="display text-6xl text-white md:text-8xl">
          Our <span className="text-neon neon">work.</span>
        </h2>
      </div>

      <div className="mx-auto grid w-full max-w-[1600px] gap-4 px-2 pb-16 md:grid-cols-2 md:px-4">
        {cases.map((c) => (
          <article key={c.idx} className="fade-up group">
            <div className="overflow-hidden rounded-xl border border-white/5 bg-coal">
              <div
                className="aspect-[16/10] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${c.img}')` }}
              />
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[10px] text-white/40">/ {c.idx}</span>
                <span className="text-sm font-medium tracking-wide text-white uppercase">{c.title}</span>
              </div>
              <a
                href="#contact"
                className="flex-1 rounded-md border border-white/10 bg-white/5 py-3 text-center font-mono text-[10px] tracking-widest text-white/50 uppercase transition-colors hover:border-neon/60 hover:text-white"
              >
                Show details
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
