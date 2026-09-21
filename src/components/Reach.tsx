const CX = 320;
const CY = 240;
const R = 220;

type Dot = { x: number; y: number; k: number };

function buildDots(): Dot[] {
  const out: Dot[] = [];
  for (let y = 6; y <= 474; y += 12) {
    for (let x = 6; x <= 634; x += 12) {
      const d = Math.hypot(x - CX, y - CY);
      if (d <= R) out.push({ x, y, k: d <= 70 ? 2 : d <= 140 ? 1 : 0 });
    }
  }
  return out;
}

const DOTS = buildDots();

const FILL = ['rgba(11,12,12,0.16)', 'rgba(11,12,12,0.35)', '#5eead4'];

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
          <svg viewBox="0 0 640 480" className="h-auto w-full" role="img" aria-label="Service radius around Chelavoor">
            {[70, 140, 220].map((r) => (
              <circle key={r} cx={CX} cy={CY} r={r} fill="none" stroke="rgba(11,12,12,0.08)" strokeWidth="1" />
            ))}
            {DOTS.map((d, i) => (
              <circle key={i} cx={d.x} cy={d.y} r="2.4" fill={FILL[d.k]} />
            ))}
            <circle cx={CX} cy={CY} r="14" fill="#5eead4" opacity="0.25" />
            <circle cx={CX} cy={CY} r="6" fill="#5eead4" />
          </svg>
          <div className="mt-4 flex justify-between font-mono text-[10px] tracking-widest text-ink/40 uppercase">
            <span>Chelavoor · 11.25°N 75.78°E</span>
            <span>15 km service radius</span>
          </div>
        </div>
      </div>
    </section>
  );
}
