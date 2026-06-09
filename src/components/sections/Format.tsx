import { Container, Title } from "@/components/ui";

export function Format() {
  return (
    <section id="format" className="py-10 md:py-15 scroll-mt-22">
      <Container>
        <div className="bg-[#F0F0F0] rounded-2xl md:rounded-[20px] p-6 md:pt-13.75 md:px-15 md:pb-15 grid grid-cols-1 md:grid-cols-[0.4fr_0.6fr] gap-6 md:gap-16">
          <div className="flex flex-row md:flex-col items-center gap-5 md:gap-0">
            <img
              src="/format.png"
              alt=""
              aria-hidden
              className="w-20 h-16 md:w-40.5 md:h-32.5 object-contain shrink-0 md:mb-12.5"
            />
            <Title className="text-black">ФОРМАТ</Title>
          </div>
          <div className="flex flex-col gap-4 md:gap-5 md:pt-16.25">
            <div className="flex flex-col gap-4 md:gap-5 text-[17px] md:text-[23px] font-medium leading-6 md:leading-7.25 tracking-[-0.85px] md:tracking-[-1.15px] text-black">
              <p>
                Воркшоп проходить у{" "}
                <strong className="font-extrabold">
                  супер зручному форматі.
                </strong>
              </p>
              <p>
                Ви можете{" "}
                <strong className="font-extrabold">
                  увімкнути аудіо-подкаст у будь-який момент :
                </strong>{" "}
                за кермом або поки збираєтесь на зустріч.
              </p>
              <p>Комфортні знання, які легко застосувати на практиці.</p>
            </div>
            <p className="text-[22px] md:text-[30px] font-medium leading-6.5 md:leading-8.25 tracking-[-1.1px] md:tracking-[-1.2px] text-black mt-6 md:mt-10">
              ВСЯ ІНФОРМАЦІЯ ПОДАЄТЬСЯ БЕЗ ВОДИ — ЛИШЕ НАЙНЕОБХІДНІШІ ПРАКТИЧНІ
              ЗНАННЯ ІЗ РЕАЛЬНОГО ДОСВІДУ
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
