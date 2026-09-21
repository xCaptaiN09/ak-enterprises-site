const products = [
  { name: 'Car Batteries', cat: 'Battery', img: '/img/prod-car-battery.webp' },
  { name: 'Bike Batteries', cat: 'Battery', img: '/img/prod-bike-battery.webp' },
  { name: 'Inverters & UPS', cat: 'Backup', img: '/img/prod-inverter.webp' },
  { name: 'Solar Kits', cat: 'Solar', img: '/img/prod-solar.webp' },
  { name: 'Tyres', cat: 'Tyre', img: '/img/prod-tyre.webp' },
  { name: 'Engine Oil', cat: 'Service', img: '/img/prod-oil.webp' },
];

export default function Products() {
  return (
    <section id="products" className="bg-fog py-28 text-ink">
      <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10">
        <div className="flex items-end justify-between">
          <h2 className="text-5xl font-medium md:text-7xl">
            Our <span className="text-ink/40">products</span>
          </h2>
          <a
            href="#contact"
            className="hidden rounded-full bg-white px-6 py-3 text-sm text-ink/60 shadow-sm transition-colors hover:text-ink md:block"
          >
            Ask for a quote
          </a>
        </div>
      </div>

      <div className="no-scrollbar mx-auto mt-14 flex w-full max-w-[1600px] snap-x gap-6 overflow-x-auto px-6 md:px-10">
        {products.map((p) => (
          <div
            key={p.name}
            className="group relative aspect-[3/4] min-w-[280px] snap-start overflow-hidden rounded-2xl bg-coal md:min-w-[400px]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${p.img}')` }}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent p-6 pt-16">
              <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-white/80 uppercase">
                <span className="h-2 w-2 rounded-full bg-neon" />
                {p.cat}
              </div>
              <div className="mt-2 text-2xl font-medium text-white">{p.name}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
