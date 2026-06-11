import { ArrowIcon } from "@/components/icons";
import { Container, Title } from "@/components/ui";
import { AnimateIn } from "@/components/AnimateIn";

export function WhoWeAre() {
  return (
    <section id="who-we-are" className="pb-10 md:pb-15 scroll-mt-22">
      <Container>
        <div className="border-[3px] border-[#F6FF4B] rounded-2xl md:rounded-[20px] p-6 md:pt-7 md:px-10.25 md:pb-13 grid grid-cols-1 md:grid-cols-[0.4fr_0.6fr] gap-6 md:gap-16 mb-10 md:mb-35">
          <AnimateIn className="flex flex-row md:flex-col items-center gap-5 md:gap-0">
            <img
              src="/who_we.png"
              alt=""
              aria-hidden
              className="w-20 h-20 md:w-34 md:h-33.25 object-contain shrink-0 md:mb-8.25"
            />
            <Title className="text-black">ХТО МИ</Title>
          </AnimateIn>
          <div className="flex flex-col gap-4 md:gap-6 md:pt-6">
            <AnimateIn delay={100}>
              <p className="text-[17px] md:text-[23px] font-medium leading-6 md:leading-7.25 tracking-[-0.85px] md:tracking-[-1.15px] text-muted">
                <strong className="font-extrabold">Individualist Agency</strong>{" "}
                — маркетингова міжнародна агенція.{" "}
                <strong className="font-extrabold">
                  Наш основний ринок, це Сполучені Штати Америки
                </strong>
                . Ми активно реалізуємо проєкти у{" "}
                <strong className="font-extrabold">
                  Польщі, Франції та Об&apos;єднаних Арабських Еміратах.
                </strong>
              </p>
            </AnimateIn>
            <AnimateIn delay={180}>
              <p className="text-[17px] md:text-[23px] font-extrabold leading-6 md:leading-7.25 tracking-[-0.85px] md:tracking-[-1.15px] text-muted">
                Міжнародний напрямок, це основа нашої роботи та досвіду.
              </p>
            </AnimateIn>
            <AnimateIn delay={260}>
              <p className="text-[17px] md:text-[23px] font-medium leading-6 md:leading-7.25 tracking-[-0.85px] md:tracking-[-1.15px] text-muted">
                Саме тому ми добре розуміємо особливості аудиторії, поведінку
                споживачів та підхід до розвитку бізнесів на різних ринках.
              </p>
            </AnimateIn>
          </div>
        </div>

        <AnimateIn>
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <div className="flex-1">
              <p className="text-[20px] md:text-[30px] font-semibold leading-6.5 md:leading-7.25 tracking-[-1px] md:tracking-[-1.5px] text-muted mb-4 md:mb-6 max-w-155">
                У 2026 році агенція у Великій Британії стала переможцем London
                Design Awards у категорії
              </p>
              <div className="relative inline-block">
                <img
                  src="/highlight-award.svg"
                  alt=""
                  aria-hidden
                  className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-[60%] md:w-full"
                />
                <p className="relative z-10 text-[20px] md:text-[30px] font-bold uppercase leading-6.5 md:leading-7.25 tracking-[-1.1px] md:tracking-[-1.5px] text-black">
                  COMMUNICATION DESIGN:
                  <br />
                  PRODUCT & SERVICE BRANDING
                </p>
              </div>
            </div>
            <div className="flex flex-row md:block items-center gap-4 shrink-0">
              <div className="relative w-1/2 md:w-auto shrink-0">
                <img
                  src="/award.png"
                  alt="London Design Awards Gold Winner"
                  className="w-full max-h-55 md:max-h-none object-cover md:w-72 rounded-[20px]"
                />
                <button className="absolute -right-3 top-1/2 -translate-y-1/2 w-6.5 h-6.5 rounded-full bg-accent flex items-center justify-center">
                  <ArrowIcon className="w-2 h-1.75 shrink-0" />
                </button>
              </div>
              <p className="w-1/2 md:hidden text-[12px] italic leading-5 tracking-[-0.5px] text-muted">
                <strong className="font-semibold">London Design Awards</strong>
                <span className="font-medium"> — це престижна міжнародна премія, яка відзначає найкращі досягнення у сфері дизайну, брендингу та комунікацій.</span>
              </p>
            </div>
            <div className="hidden md:block md:w-55 shrink-0">
              <p className="text-[15px] italic leading-4.25 tracking-[-0.75px] text-muted">
                <strong className="font-semibold">London Design Awards</strong>
                <span className="font-medium"> — це престижна міжнародна премія, яка відзначає найкращі досягнення у сфері дизайну, брендингу та комунікацій.</span>
              </p>
            </div>
          </div>
        </AnimateIn>
      </Container>
    </section>
  );
}
