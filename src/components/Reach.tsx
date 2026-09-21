type Pt = [number, number];

const LAND: Pt[][] = [
  [[-168, 66], [-140, 70], [-120, 72], [-90, 72], [-70, 62], [-55, 50], [-65, 45], [-75, 35], [-80, 25], [-85, 12], [-78, 8], [-95, 18], [-105, 20], [-115, 30], [-125, 40], [-135, 55], [-150, 60]],
  [[-45, 60], [-20, 70], [-20, 82], [-40, 84], [-55, 75]],
  [[-78, 8], [-60, 10], [-50, 0], [-35, -8], [-40, -20], [-55, -30], [-65, -45], [-70, -54], [-75, -45], [-72, -30], [-70, -15], [-78, -5]],
  [[-10, 36], [-5, 48], [0, 52], [5, 58], [10, 63], [20, 70], [30, 70], [30, 60], [30, 45], [25, 36], [15, 38], [5, 36]],
  [[-17, 15], [-10, 25], [0, 32], [10, 34], [20, 32], [32, 30], [43, 12], [51, 10], [40, -5], [35, -20], [30, -30], [20, -35], [15, -28], [12, -15], [8, 0], [-5, 5], [-12, 8]],
  [[30, 60], [45, 68], [60, 72], [80, 74], [100, 72], [120, 70], [140, 66], [160, 68], [180, 66], [180, 62], [160, 55], [150, 45], [140, 40], [130, 35], [122, 30], [110, 20], [105, 10], [100, 5], [98, 10], [95, 15], [90, 22], [85, 20], [80, 8], [72, 18], [68, 24], [60, 25], [58, 20], [55, 17], [45, 12], [43, 12], [35, 28], [35, 32], [30, 45]],
  [[130, 32], [135, 35], [140, 40], [142, 44], [140, 45], [135, 36], [130, 33]],
  [[95, 5], [105, -5], [115, -8], [125, -9], [135, -5], [140, -8], [132, -2], [120, 0], [110, 2], [100, 4]],
  [[115, -22], [125, -15], [135, -12], [142, -11], [147, -18], [153, -25], [150, -35], [140, -38], [130, -32], [120, -34], [114, -28]],
];

const INDIA: Pt[] = [
  [68, 24], [72, 20], [73, 15], [76, 8], [80, 8], [82, 12], [85, 18], [88, 22], [92, 22], [90, 25], [85, 27], [80, 30], [75, 32], [72, 28],
];

function inside(lon: number, lat: number, poly: Pt[]): boolean {
  let ok = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i];
    const [xj, yj] = poly[j];
    if (yi > lat !== yj > lat && lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) ok = !ok;
  }
  return ok;
}

const DOTS: { x: number; y: number; k: 0 | 1 }[] = [];
for (let lat = 72; lat >= -56; lat -= 4) {
  for (let lon = -180; lon <= 180; lon += 4) {
    const x = (lon + 180) * 2.5;
    const y = (90 - lat) * 2.5;
    if (inside(lon, lat, INDIA)) DOTS.push({ x, y, k: 1 });
    else if (LAND.some((p) => inside(lon, lat, p))) DOTS.push({ x, y, k: 0 });
  }
}

const MX = (75.78 + 180) * 2.5;
const MY = (90 - 11.25) * 2.5;

export default function Reach() {
  return (
    <section className="bg-paper px-6 py-28 text-ink md:px-10">
      <div className="mx-auto grid w-full max-w-[1600px] items-center gap-16 lg:grid-cols-2">
        <div className="fade-up">
          <div className="mb-6 font-mono text-[10px] tracking-widest uppercase">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-neon" />
            Our reach
          </div>
          <h2 className="text-5xl font-medium md:text-7xl">
            Kozhikode's <span className="text-ink/40">power shop.</span>
          </h2>
          <p className="mt-6 max-w-md text-xl leading-snug md:text-2xl">
            Serving <span className="text-ink/45">10+ villages</span> around
            Chelavoor, <span>within 15 km</span> of the shop.
          </p>
          <blockquote className="mt-10 border-l-2 border-neon pl-6 text-lg text-ink/70 md:text-xl">
            "Trust is the only warranty that never expires."
            <footer className="mt-3 font-mono text-[10px] tracking-widest text-ink/40 uppercase">
              — Shop motto, since 2018
            </footer>
          </blockquote>
          <a
            href="https://maps.app.goo.gl/1MYtbcAKfvJYjDq27"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-block rounded-full bg-white px-6 py-3 text-sm text-ink/60 shadow-sm transition-colors hover:text-ink"
          >
            Get directions
          </a>
        </div>

        <div className="fade-up">
          <svg viewBox="0 0 900 450" className="h-auto w-full" role="img" aria-label="World map with India highlighted">
            {DOTS.map((d, i) => (
              <circle key={i} cx={d.x} cy={d.y} r="2.4" fill={d.k === 1 ? '#5eead4' : 'rgba(11,12,12,0.18)'} />
            ))}
            <circle cx={MX} cy={MY} r="12" fill="#5eead4" opacity="0.25" />
            <circle cx={MX} cy={MY} r="5" fill="#5eead4" />
          </svg>
          <div className="mt-4 flex justify-between font-mono text-[10px] tracking-widest text-ink/40 uppercase">
            <span>Chelavoor · 11.25°N 75.78°E</span>
            <span>HQ · Kozhikode, India</span>
          </div>
        </div>
      </div>
    </section>
  );
}
