export default function Statement() {
  return (
    <section className="bg-ink px-2 py-2 md:px-4 md:py-4">
      <div className="rounded-3xl bg-fog px-8 py-24 text-ink md:px-20 md:py-32">
        <div className="mb-8 font-mono text-[10px] tracking-widest text-ink/50 uppercase">
          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-neon" />
          Our promise
        </div>
        <p className="max-w-6xl text-3xl leading-tight font-medium md:text-5xl">
          AK Enterprises sells and services batteries, inverters, solar
          systems and tyres for Kozhikode. From honest quotes to{' '}
          <span className="relative whitespace-nowrap">
            same-day fitting
            <span className="absolute -bottom-1 left-0 h-1.5 w-full rounded-full bg-neon/70" />
          </span>
          , we keep your vehicle and your home powered — setting the local
          benchmark for trust and turnaround.
        </p>
      </div>
    </section>
  );
}
