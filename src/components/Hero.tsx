import { useState } from 'react';
import { motion } from 'framer-motion';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: EASE, delay },
});

const fadeDown = (delay: number) => ({
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: EASE, delay },
});

const fadeRight = (delay: number) => ({
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: EASE, delay },
});

const NAV = [
  { label: 'Shop', href: '#shop' },
  { label: 'Work', href: '#work' },
  { label: 'Products', href: '#products' },
  { label: 'Brands', href: '#brands' },
  { label: 'Contact', href: '#contact' },
];

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

function monthData(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  return {
    label: `${MONTH_NAMES[month]} ${year}`,
    blanks: new Date(year, month, 1).getDay(),
    days: new Date(year, month + 1, 0).getDate(),
  };
}

function fmt(d: Date) {
  return d.toLocaleDateString('en-IN', { month: 'short', day: 'numeric' });
}

function CalendarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#515C62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#515C62"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function MonthGrid({ date, selected, onPick }: { date: Date; selected: Date; onPick: (d: Date) => void }) {
  const { label, blanks, days } = monthData(date);
  return (
    <div>
      <div className="mb-3 text-center text-[13px] leading-5 tracking-wide text-white/60">{label}</div>
      <div className="grid grid-cols-7 gap-y-1">
        {WEEKDAYS.map((w, i) => (
          <span key={i} className="text-center text-[11px] leading-5 text-white/30">{w}</span>
        ))}
        {Array.from({ length: blanks }).map((_, i) => (
          <span key={`b${i}`} />
        ))}
        {Array.from({ length: days }).map((_, i) => {
          const day = new Date(date.getFullYear(), date.getMonth(), i + 1);
          const isSel = day.toDateString() === selected.toDateString();
          return (
            <button
              key={i}
              type="button"
              onClick={() => onPick(day)}
              className={`h-7 rounded-lg text-[13px] leading-5 transition-colors ${
                isSel ? 'bg-white font-semibold text-[#34405c]' : 'text-white/80 hover:bg-white/10'
              }`}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function DatePill({
  value,
  open,
  onToggle,
  onPick,
  months,
}: {
  value: Date;
  open: boolean;
  onToggle: () => void;
  onPick: (d: Date) => void;
  months: Date[];
}) {
  return (
    <div className="relative flex-1">
      <motion.button
        type="button"
        onClick={onToggle}
        whileHover={{ backgroundColor: 'rgba(0,0,0,0.5)', scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
        className={`flex w-full items-center gap-1.5 rounded-[10px] bg-black/35 p-4 ${open ? 'ring-1 ring-white/20' : ''}`}
      >
        <CalendarIcon />
        <span className="flex-1 text-left text-base leading-6 text-white">{fmt(value)}</span>
        <Chevron open={open} />
      </motion.button>
      {open && (
        <div className="absolute inset-x-0 top-[calc(100%+8px)] z-50 space-y-5 overflow-hidden rounded-2xl bg-[rgba(30,38,60,0.97)] p-4 backdrop-blur-[16px]">
          {months.map((m, i) => (
            <MonthGrid key={i} date={m} selected={value} onPick={onPick} />
          ))}
        </div>
      )}
    </div>
  );
}

function Logo() {
  return (
    <svg width="142" height="50" viewBox="0 0 142 50" fill="none">
      <defs>
        <linearGradient id="ak-grad" x1="0" y1="0" x2="142" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <circle cx="17" cy="22" r="14" fill="#5eead4" />
      <path d="M19.5 13 11 24h5.5L14 31l8.5-11H17l2.5-7Z" fill="#0b0b0c" />
      <text x="38" y="28" fill="#ffffff" fontFamily="PP Mori, Inter, sans-serif" fontWeight="600" fontSize="17">
        AK Enterprises
      </text>
      <rect x="38" y="36" width="96" height="2" rx="1" fill="url(#ak-grad)" opacity="0.6" />
    </svg>
  );
}

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openPill, setOpenPill] = useState<'drop' | 'pick' | null>(null);
  const today = new Date();
  const tomorrow = new Date(today.getTime() + 86400000);
  const [drop, setDrop] = useState<Date>(today);
  const [pick, setPick] = useState<Date>(tomorrow);
  const months = [new Date(today.getFullYear(), today.getMonth(), 1), new Date(today.getFullYear(), today.getMonth() + 1, 1)];

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden font-sans font-normal">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        playsInline
        src={`${import.meta.env.BASE_URL}video/hero.mp4`}
      />

      <motion.header
        {...fadeDown(0.1)}
        className="relative z-20 flex items-center justify-between px-4 pt-[30px] md:px-8 md:pt-[45px] lg:px-[65px] lg:pt-[60px]"
      >
        <a href="#home" aria-label="AK Enterprises home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-11 md:flex">
          {NAV.map((n) => (
            <motion.a
              key={n.label}
              href={n.href}
              whileHover={{ opacity: 0.6 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.15 }}
              className="text-base leading-6 text-white"
            >
              {n.label}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <motion.a
            href="tel:+918714790106"
            whileHover={{ scale: 1.04, backgroundColor: '#f0f0f0' }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="hidden rounded-[10px] bg-white px-8 py-3 text-base leading-6 font-semibold text-black md:block"
          >
            Call Now
          </motion.a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="text-white md:hidden"
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>

        {menuOpen && (
          <motion.div
            {...fadeDown(0.05)}
            className="absolute inset-x-0 top-full z-50 mx-4 mt-2 flex flex-col gap-4 rounded-2xl bg-[#2a3349] p-6 shadow-xl"
          >
            {NAV.map((n) => (
              <a key={n.label} href={n.href} onClick={() => setMenuOpen(false)} className="text-base leading-6 text-white">
                {n.label}
              </a>
            ))}
            <a href="tel:+918714790106" className="rounded-[10px] bg-white px-8 py-3 text-center text-base leading-6 font-semibold text-black">
              Call Now
            </a>
          </motion.div>
        )}
      </motion.header>

      <main className="relative z-10 flex min-h-[calc(100vh-110px)] flex-col px-4 pt-6 pb-10 md:px-8 md:pt-10 md:pb-14 lg:px-[65px] lg:pt-16 lg:pb-[60px]">
        <div className="flex flex-1 flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-0">
          <div className="flex flex-1 flex-col justify-between">
            <h1 className="text-[clamp(52px,9vw,128px)] leading-[0.82] tracking-tight text-white font-normal">
              <motion.span className="block" {...fadeUp(0.2)}>Batteries,</motion.span>
              <motion.span className="block text-white/50" {...fadeUp(0.35)}>Inverters,</motion.span>
              <motion.span className="block" {...fadeUp(0.5)}>Solar + Tyres</motion.span>
            </h1>

            <div className="mt-10 flex flex-col items-start gap-8 sm:flex-row lg:mt-0 lg:gap-0">
              <motion.p
                {...fadeUp(0.65)}
                className="w-full text-[clamp(15px,1.3vw,18px)] leading-6 text-white/80 sm:w-[300px]"
              >
                Premium batteries, inverters, solar systems and tyres — sold, fitted and serviced under one roof in Chelavoor, Kozhikode.
              </motion.p>

              <motion.div {...fadeUp(0.75)} className="flex flex-col gap-2 sm:ml-8 lg:ml-[140px]">
                <div className="flex items-center gap-1">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="#5eead4">
                    <path d="M12 2l2.9 6.26 6.6.57-5 4.36 1.5 6.45L12 16.9l-5.99 3.74 1.5-6.45-5-4.36 6.6-.57L12 2z" />
                  </svg>
                  <span className="text-[36px] leading-[34px] text-white">4.8</span>
                  <span className="text-[20px] leading-6 text-white"> from 1,800+ reviews</span>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div {...fadeRight(0.4)} className="flex lg:flex-col lg:justify-end lg:pl-10 xl:pl-16">
            <div className="relative flex w-full max-w-[410px] flex-col gap-[30px] rounded-[35px] p-[30px]">
              <div className="pointer-events-none absolute inset-0 rounded-[35px] backdrop-blur-[12.5px]" />
              <div className="pointer-events-none absolute inset-0 rounded-[35px] bg-black/25 mix-blend-soft-light" />

              <div className="relative flex flex-col gap-[30px]">
                <div className="relative flex items-start justify-between gap-4">
                  <h2 className="w-[280px] text-[32px] leading-[36px] text-white font-normal">
                    Free Battery<br />Health Check-Up
                  </h2>
                  <button
                    type="button"
                    aria-label="Edit booking"
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-black/35"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#BDC6C7" strokeOpacity="0.4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                    </svg>
                  </button>
                </div>

                <div className="flex gap-2.5">
                  <DatePill
                    value={drop}
                    open={openPill === 'drop'}
                    onToggle={() => setOpenPill(openPill === 'drop' ? null : 'drop')}
                    onPick={(d) => { setDrop(d); setOpenPill(null); }}
                    months={months}
                  />
                  <DatePill
                    value={pick}
                    open={openPill === 'pick'}
                    onToggle={() => setOpenPill(openPill === 'pick' ? null : 'pick')}
                    onPick={(d) => { setPick(d); setOpenPill(null); }}
                    months={months}
                  />
                </div>

                <div className="relative h-[73px] overflow-hidden rounded-[10px] bg-black/35">
                  <span className="absolute top-4 left-4 text-[14px] leading-4 text-[#bdc6c7] opacity-40">Walk-in</span>
                  <span className="absolute top-[34px] left-4 text-base leading-6 text-white">Mon-Sat 9-8</span>
                  <span className="absolute top-4 right-4 text-[14px] leading-4 text-[#bdc6c7] opacity-40">Sunday</span>
                  <span className="absolute top-[34px] right-4 text-base leading-6 text-white">9-1 only</span>
                  <span className="absolute top-1/2 left-1/2 h-11 w-px -translate-x-1/2 -translate-y-1/2 bg-[#515C62] opacity-40" />
                </div>

                <div className="flex flex-col gap-6">
                  <div className="flex items-end justify-between whitespace-nowrap">
                    <span>
                      <span className="text-[32px] leading-[28px] text-white">₹0</span>
                      <span className="text-[20px] text-[#515c62]"> /check-up</span>
                    </span>
                    <span className="text-[14px] leading-4 text-white">2 & 4 wheelers</span>
                  </div>
                  <motion.a
                    href="https://wa.me/918714790106?text=I%20want%20to%20book%20a%20free%20battery%20health%20check-up"
                    whileHover={{ scale: 1.03, backgroundColor: '#f0f0f0' }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="flex h-12 w-full items-center justify-center rounded-[10px] bg-white text-base leading-6 font-semibold text-black"
                  >
                    Book Slot
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </section>
  );
}
