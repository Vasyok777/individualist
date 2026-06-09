import { Container, CTAButton, Title } from "@/components/ui";

export function International() {
  return (
    <section className="py-12 md:pt-15 md:pb-5">
      <Container>
        {/* Row 1 — original layout */}
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

        {/* Row 2 — image full width on desktop */}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-23.75 mt-6 md:mt-31.25 mb-8 md:mb-25">
          <p className="text-[18px] md:text-[30px] font-medium leading-6.5 md:leading-7.75 tracking-[-0.9px] md:tracking-[-1.5px] text-muted">
            Це про ріст, нові можливості, збільшення прибутку та розвиток бренду
            на міжнародному рівні.
          </p>
          <p className="text-[16px] md:text-[23px] font-medium leading-6 md:leading-7.25 tracking-[-0.8px] md:tracking-[-1.15px] text-muted">
            це вже не просто амбіція, а{" "}
            <strong className="font-extrabold">
              новий етап розвитку для бізнесів, які прагнуть масштабування,
              більшої впізнаваності та можливості показати свій продукт чи
              послугу ширшій аудиторії.
            </strong>
          </p>
        </div>

        <div className="flex justify-center">
          <CTAButton href="#how-it-looks">ОТРИМАТИ ДОСТУП</CTAButton>
        </div>
      </Container>
    </section>
  );
}
