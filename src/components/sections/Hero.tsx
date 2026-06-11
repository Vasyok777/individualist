import { Container } from "@/components/ui/Container";

const FEATURES = [
  "[ Максимум практики та дієвих інструментів ]",
  "[ Аудіо-подкасти, які зручно слухати будь-де ]",
  "[ Закрита група у Telegram ]",
  "[ Готові шаблони та покрокові інструкції ]",
];

export function Hero() {
  return (
    <section className="relative md:mb-10">
      <img
        src="/hero.png"
        alt=""
        className="w-full h-[400px] md:h-[577px] object-cover"
      />

      <Container className="max-w-[1346px]">
        <div className="relative z-10 -mt-50 md:-mt-80 bg-white rounded-[16px] md:rounded-[30px] p-6 md:pt-9 md:pr-12.5 md:pb-10 md:pl-15">
          <div className="relative mb-6 md:mb-20">
            <div className="flex flex-row justify-between items-start mb-4 md:hidden">
              <div className="bg-accent rounded-2xl px-5 py-4">
                <p className="text-[15px] font-medium italic leading-tight text-charcoal">
                  5-денний інтенсивний
                  <br />
                  воркшоп
                </p>
              </div>
              <img
                src="/hero-blesk.png"
                alt=""
                aria-hidden
                className="w-16 h-16 object-contain"
              />
            </div>

            <div className="hidden md:flex absolute top-0 right-0 flex-col items-end gap-10">
              <div className="bg-accent rounded-[17px] w-107 pt-6.5 pr-7.75 pb-6.5 pl-12.25">
                <p className="font-bold italic text-charcoal text-[30.588px] leading-[32.325px] tracking-[-1.529px]">
                  5-денний інтенсивний
                  <br />
                  воркшоп
                </p>
              </div>
              <img
                src="/hero-blesk.png"
                alt=""
                aria-hidden
                className="h-[170px] mr-10 object-contain"
              />
            </div>
            <div className="pt-2 md:pt-15">
              <h1 className="text-[32px] md:text-[78.021px] font-bold uppercase leading-[1.05] md:leading-[82.451px] tracking-[-2px] md:tracking-[-3.901px] text-charcoal">
                <span className="relative inline-block">
                  <img
                    src="/hero-vector.svg"
                    alt=""
                    aria-hidden
                    className="absolute inset-x-0 top-1/2 md:scale-[1.4] translate-y-[-35%] w-full z-[-1]"
                  />
                  <span className="relative z-10">ПОКРОКОВИЙ</span>
                </span>
                <br />
                ВИХІД БРЕНДІВ НА
                <br className="hidden md:block" /> МІЖНАРОДНИЙ РИНОК
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-2 md:flex gap-4 md:gap-12.5">
            {FEATURES.map((feature) => (
              <p
                key={feature}
                className="text-[13px] md:text-[23px] font-medium leading-5.5 md:leading-[25.282px] tracking-[-0.65px] md:tracking-[-1.15px] text-muted text-center"
              >
                {feature.endsWith(" ]") ? (
                  <>
                    {feature.slice(0, -2)}
                    {" "}
                    {"]"}
                  </>
                ) : (
                  feature
                )}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
