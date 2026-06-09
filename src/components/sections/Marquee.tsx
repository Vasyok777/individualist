const REPEAT = 8;

export function Marquee() {
  return (
    <section aria-hidden="true" className="bg-accent overflow-hidden py-4">
      <div className="animate-marquee">
        {Array.from({ length: REPEAT }, (_, i) => (
          <span
            key={i}
            className="flex items-center gap-6 shrink-0 pr-6 font-black uppercase text-black text-lg tracking-widest"
          >
            <span>[СЬОГОДНІ ВИХІД НА]</span>
            <span className="font-normal normal-case tracking-normal opacity-50">
              individualist.
            </span>
            <span>МІЖНАРОДНИЙ РИНОК —</span>
            <span className="font-normal normal-case tracking-normal opacity-50">
              individualist.
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
