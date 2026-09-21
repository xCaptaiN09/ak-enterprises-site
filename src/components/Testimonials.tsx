export default function Testimonials() {
  return (
    <section className="bg-fog px-6 py-28 text-ink md:px-10">
      <div className="mx-auto grid w-full max-w-[1600px] gap-14 md:grid-cols-2">
        <h2 className="text-5xl font-medium md:text-7xl">Testimonials</h2>
        <div>
          <p className="text-2xl leading-snug md:text-3xl">
            “They checked my battery for free, told me it only needed
            cleaning, and refused to sell me a new one. That is why I send
            everyone I know to this shop.”
          </p>
          <div className="mt-10 font-mono text-[11px] tracking-widest text-ink/50 uppercase">
            Regular customer
            <br />
            Chelavoor, Kozhikode
          </div>
          <a
            href="#contact"
            className="mt-10 inline-block rounded-md bg-ink px-6 py-3 font-mono text-[11px] tracking-widest text-white uppercase transition-transform hover:-translate-y-0.5"
          >
            See why
          </a>
        </div>
      </div>
    </section>
  );
}
