const stats = [
  { value: '8', unit: '+', title: '8+ Years Operating.', desc: 'Serving Chelavoor and east Kozhikode since 2018.' },
  { value: '10K', unit: '+', title: '10K+ Customers Served.', desc: 'Batteries fitted, tyres changed, backups installed.' },
  { value: '8', unit: '+', title: '8+ Brands Stocked.', desc: 'Only genuine stock with manufacturer warranty.' },
];

export default function Stats() {
  return (
    <section className="bg-ink px-2 py-2 md:px-4 md:py-4">
      <div className="grid gap-4 md:grid-cols-2">
        {stats.map((s, i) => (
          <div key={s.title} className="fade-up relative min-h-[45vh] overflow-hidden rounded-3xl bg-coal p-10">
            <div className="absolute top-8 right-10 font-sans text-8xl font-extralight text-white/90 md:text-9xl">
              {s.value}
              <span className="align-top text-4xl font-extralight text-white/50">{s.unit}</span>
            </div>
            <div className="absolute bottom-10 left-10 max-w-xs">
              <div className="text-xl font-medium text-white">{s.title}</div>
              <p className="mt-3 font-mono text-[11px] leading-relaxed tracking-wider text-white/45 uppercase">{s.desc}</p>
            </div>
            <div className="absolute top-10 left-10 font-mono text-[10px] tracking-widest text-white/30">0{i + 1}</div>
          </div>
        ))}

        <div className="fade-up dotgrid relative min-h-[45vh] overflow-hidden rounded-3xl bg-coal p-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="relative block h-3 w-3 rounded-full bg-neon">
              <span className="absolute inset-0 animate-ping rounded-full bg-neon opacity-60" />
            </span>
          </div>
          <div className="absolute bottom-10 left-10">
            <div className="text-xl font-medium text-white">East Moozhikkal, Chelavoor.</div>
            <p className="mt-3 font-mono text-[11px] tracking-wider text-white/45 uppercase">
              PO Chelavoor, Kozhikode, Kerala 673571
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
