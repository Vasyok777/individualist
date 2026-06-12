import { Container, CTAButton, Title } from "@/components/ui";
import { AnimateIn } from "@/components/AnimateIn";

export function International() {
  return (
    <section className="py-12 md:pt-15 md:pb-5">
      <Container>
        <AnimateIn>
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10 mb-4 md:mb-12">
            <Title className="text-black shrink-0">
              <span className="relative inline-block">
                <img
                  src="/highlight-line-2.svg"
                  alt=""
                  aria-hidden
                  className="absolute inset-x-0 top-1/2 scale-y-300 rotate-[150] translate-y-[-40%] w-full z-[-1]"
                />
                <span className="relative z-10">[СЬОГОДНІ</span>
              </span>
              <br className="md:hidden" />
              {" "}ВИХІД НА
            </Title>
            <div className="hidden md:block relative flex-1">
              <img
                src="/custom-1.png"
                alt=""
                aria-hidden
                className="w-full h-27.75 object-cover rounded-[15px]"
              />
              <span
                aria-hidden
                className="absolute -bottom-19 left-1/2 -translate-x-1/2 text-[107.567px] font-semibold leading-none tracking-[-3.23px] text-accent"
              >
                *
              </span>
            </div>
          </div>
        </AnimateIn>

        <AnimateIn delay={100}>
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10 mb-8 md:mb-14">
            <img
              src="/custom-2.png"
              alt=""
              className="w-full md:flex-1 h-20 md:h-37.25 object-cover rounded-[10px] md:rounded-[15px]"
            />
            <Title className="text-black shrink-0 text-left md:text-right">
              МІЖНАРОДНИЙ
              <br />
              РИНОК —]
            </Title>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-23.75 mt-6 md:mt-31.25 mb-8 md:mb-25">
          <AnimateIn delay={180}>
            <p className="text-[18px] md:text-[30px] font-medium leading-6.5 md:leading-7.75 tracking-[-0.9px] md:tracking-[-1.5px] text-muted">
              Це про ріст, нові можливості, збільшення прибутку та розвиток бренду
              на міжнародному рівні.
            </p>
          </AnimateIn>
          <AnimateIn delay={260}>
            <p className="text-[16px] md:text-[23px] font-medium leading-6 md:leading-7.25 tracking-[-0.8px] md:tracking-[-1.15px] text-muted">
              це вже не просто амбіція, а{" "}
              <strong className="font-extrabold">
                новий етап розвитку для бізнесів, які прагнуть масштабування,
                більшої впізнаваності та можливості показати свій продукт чи
                послугу ширшій аудиторії.
              </strong>
            </p>
          </AnimateIn>
        </div>

        <AnimateIn delay={320}>
          <div className="flex justify-center">
            <CTAButton href="https://secure.wayforpay.com/button/ba1ca72f2fbf4">ОТРИМАТИ ДОСТУП</CTAButton>
          </div>
        </AnimateIn>
      </Container>
    </section>
  );
}
