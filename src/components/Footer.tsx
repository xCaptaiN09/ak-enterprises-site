const rows = [
  { label: 'Phone', value: '+91 87147 90106', href: 'tel:+918714790106' },
  { label: 'WhatsApp', value: '+91 87147 90106', href: 'https://wa.me/918714790106' },
  { label: 'Address', value: 'East Moozhikkal, PO Chelavoor, Kozhikode, Kerala 673571', href: 'https://maps.app.goo.gl/1MYtbcAKfvJYjDq27' },
  { label: 'Hours', value: 'Mon-Sat 9:00-20:00 / Sun 10:00-20:00', href: '#contact' },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink px-6 pt-28 pb-10 md:px-10">
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="grid gap-4 md:grid-cols-[200px_1fr]">
          <div className="font-mono text-[10px] tracking-widest text-white/40 uppercase">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-neon" />
            Contact
          </div>
          <div>
            {rows.map((r) => (
              <div key={r.label} className="grid grid-cols-[110px_1fr] items-baseline gap-4 border-b border-white/10 py-5 first:border-t">
                <span className="font-mono text-[10px] tracking-widest text-white/40 uppercase">{r.label}</span>
                <a href={r.href} target={r.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="text-lg text-white transition-colors hover:text-neon md:text-xl">
                  {r.value}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 flex items-end justify-between gap-10">
          <h2 className="display text-[16vw] text-white/85 md:text-[11rem]">/ Contact</h2>
          <img src={`${import.meta.env.BASE_URL}img/logo-white.svg`} alt="AK Enterprises" className="mb-6 h-32 w-auto md:h-44" />
        </div>

        <div className="mt-16 flex flex-col gap-3 font-mono text-[10px] tracking-widest text-white/35 uppercase md:flex-row md:items-center md:justify-between">
          <span>AK Enterprises — Chelavoor</span>
          <span>© 2026 All rights reserved</span>
          <span>11.25°N 75.78°E</span>
        </div>
      </div>
    </footer>
  );
}
