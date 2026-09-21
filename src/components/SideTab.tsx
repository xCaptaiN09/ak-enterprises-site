export default function SideTab() {
  return (
    <div className="fixed top-1/2 right-0 z-40 hidden -translate-y-1/2 md:block">
      <div className="flex flex-col items-center gap-4 bg-black px-2.5 py-5">
        <span className="font-mono text-xs font-bold text-white">AK.</span>
        <span className="vertical-rl font-mono text-[10px] tracking-widest text-white/70 uppercase">
          Chelavoor
        </span>
      </div>
    </div>
  );
}
