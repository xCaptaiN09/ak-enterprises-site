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

const CLOSE_HOUR: Record<number, number> = { 0: 13, 1: 20, 2: 20, 3: 20, 4: 20, 5: 20, 6: 20 };

function shopStatus() {
  const ist = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
  const close = CLOSE_HOUR[ist.getDay()];
  const h = ist.getHours() + ist.getMinutes() / 60;
  const open = h >= 9 && h < close;
  const closeText = close === 13 ? '1:00 PM' : '8:00 PM';
  const label = open ? `Open now · closes ${closeText}` : h < 9 ? 'Closed · opens 9:00 AM' : 'Closed · opens 9:00 AM tomorrow';
  return { open, label };
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
  const { open, label } = shopStatus();

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

            <div className="mt-10 lg:mt-0">
              <motion.p
                {...fadeUp(0.65)}
                className="w-full text-[clamp(15px,1.3vw,18px)] leading-6 text-white/80 sm:w-[300px]"
              >
                Premium batteries, inverters, solar systems and tyres — sold, fitted and serviced under one roof in Chelavoor, Kozhikode.
              </motion.p>
            </div>
          </div>

          <motion.div {...fadeRight(0.4)} className="flex lg:flex-col lg:justify-end lg:pl-10 xl:pl-16">
            <div className="w-full max-w-[410px] rounded-[24px] border border-white/10 bg-coal p-8">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-60 ${open ? 'bg-neon' : 'bg-white/40'}`} />
                  <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${open ? 'bg-neon' : 'bg-white/40'}`} />
                </span>
                <span className="font-mono text-[11px] tracking-widest text-white/70 uppercase">{label}</span>
              </div>

              <h2 className="mt-6 text-[28px] leading-[32px] text-white">AK Enterprises, Chelavoor</h2>
              <p className="mt-4 text-[15px] leading-6 text-white/60">
                East Moozhikkal, PO Chelavoor, Kozhikode, Kerala 673571
              </p>

              <div className="mt-6 space-y-2 border-t border-white/10 pt-6 font-mono text-[11px] tracking-widest text-white/50 uppercase">
                <div className="flex justify-between">
                  <span>Mon - Sat</span>
                  <span className="text-white/80">9:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-white/80">9:00 - 13:00</span>
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                <motion.a
                  href="tel:+918714790106"
                  whileHover={{ scale: 1.03, backgroundColor: '#f0f0f0' }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className="flex h-12 flex-1 items-center justify-center rounded-[10px] bg-white text-base leading-6 font-semibold text-black"
                >
                  Call Now
                </motion.a>
                <motion.a
                  href="https://wa.me/918714790106"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className="flex h-12 flex-1 items-center justify-center rounded-[10px] border border-white/20 text-base leading-6 font-semibold text-white"
                >
                  WhatsApp
                </motion.a>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Chelavoor+Kozhikode+Kerala+673571"
                target="_blank"
                rel="noreferrer"
                className="mt-4 block text-center font-mono text-[11px] tracking-widest text-white/50 uppercase transition-colors hover:text-neon"
              >
                Get directions ↗
              </a>
            </div>
          </motion.div>
        </div>
      </main>
    </section>
  );
}
