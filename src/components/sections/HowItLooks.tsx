import Image from "next/image";
import { PREVIEW_CARDS, PRICING } from "@/lib/content";
import { DollarSvg, TelegramSvg } from "@/components/icons";
import { Container, CTAButton, Title } from "@/components/ui";
import { AnimateIn } from "@/components/AnimateIn";

export function HowItLooks() {
  return (
    <section className="py-12 md:py-20 scroll-mt-22">
      <Container>
        <AnimateIn>
          <Title className="text-[#010205] mb-10 md:mb-16">
            ЯК ЦЕ
            <br />
            ВИГЛЯДАЄ:
          </Title>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3.75">
          {PREVIEW_CARDS.map((card, i) => (
            <AnimateIn key={card.num} delay={80 + i * 100} className="border-2 border-black rounded-2xl md:rounded-[20px]">
              <div className="pt-5.5 px-1.75 pb-7.5">
                <div className="relative w-full h-95 md:h-99.25 rounded-2xl md:rounded-[20px] overflow-hidden mb-5">
                  <Image
                    src={`/looks/${i + 1}.jpg`}
                    alt={card.text ? `${card.bold}${card.text}` : card.bold}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="pl-4">
                  <p className="text-ink text-base md:text-[23px] font-medium leading-6 mb-3.75 opacity-40">
                    {card.num}
                  </p>
                  <p className="text-ink text-base md:text-[23px] leading-6">
                    <span className="font-extrabold">{card.bold}</span>
                    {card.text && (
                      <span className="font-medium">{card.text}</span>
                    )}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={100}>
          <div
            id="how-it-looks"
            className="flex items-center gap-4 md:gap-15 py-4 px-4 md:py-5 md:px-6.25 rounded-2xl md:rounded-[20px] bg-charcoal mb-3.75"
          >
            <TelegramSvg />
            <p className="text-white text-lg md:text-3xl leading-tight md:leading-7.75 tracking-[-1.5px]">
              <span className="font-semibold">Платформа:</span>
              <span className="font-medium"> закрита група у Telegram</span>
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={180}>
          <div className="flex items-center gap-4 md:gap-15 py-6 px-4 md:py-11 md:px-6.25 rounded-2xl md:rounded-[20px] border-2 border-black bg-accent">
            <DollarSvg />
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-charcoal text-lg md:text-3xl font-semibold leading-tight md:leading-7.75 tracking-[-1.5px]">
                  {PRICING.label}
                </span>
                <span className="text-charcoal text-3xl md:text-[50px] font-semibold leading-tight md:leading-7.75 tracking-[-2.5px]">
                  {PRICING.amount}
                </span>
              </div>
              <p className="text-charcoal text-lg md:text-3xl font-bold italic leading-tight md:leading-7.75 tracking-[-1.5px]">
                {PRICING.note}
              </p>
            </div>
          </div>
        </AnimateIn>

        <div id="checkout" className="flex justify-center mt-12 md:mt-21.75 scroll-mt-22">
          <AnimateIn delay={100} className="w-full flex justify-center">
            <CTAButton href="#checkout">ОТРИМАТИ ДОСТУП</CTAButton>
          </AnimateIn>
        </div>
      </Container>
    </section>
  );
}
