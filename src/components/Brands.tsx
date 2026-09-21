const brands = [
  { name: 'Exide', type: 'Batteries' },
  { name: 'Amaron', type: 'Batteries' },
  { name: 'SF Sonic', type: 'Batteries' },
  { name: 'Microtex', type: 'Batteries' },
  { name: 'Luminous', type: 'Inverters' },
  { name: 'V-Guard', type: 'Inverters' },
  { name: 'MRF', type: 'Tyres' },
  { name: 'Apollo', type: 'Tyres' },
];

export default function Brands() {
  return (
    <section id="brands" className="bg-ink px-6 py-28 md:px-10">
      <div className="mx-auto max-w-[1600px]">
        <div className="fade-up mb-14 flex items-end justify-between">
          <h2 className="display text-6xl text-white md:text-8xl">
            Brands we <span className="text-neon">stock.</span>
          </h2>
          <span className="hidden font-mono text-[10px] tracking-widest text-white/40 uppercase md:block">
            Genuine stock only
          </span>
        </div>

        <div>
          {brands.map((b, i) => (
            <div
              key={b.name}
              className="fade-up group grid grid-cols-[60px_1fr_auto] items-center gap-4 border-t border-white/10 py-6 last:border-b md:grid-cols-[100px_1fr_auto]"
            >
              <span className="font-mono text-[10px] text-white/30">0{i + 1}</span>
              <span className="display text-4xl text-white/70 transition-colors group-hover:text-neon md:text-6xl">
                {b.name}
              </span>
              <span className="font-mono text-[10px] tracking-widest text-white/40 uppercase">{b.type}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
