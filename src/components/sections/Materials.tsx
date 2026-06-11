import { MATERIALS } from "@/lib/content";
import { PlusCircleIcon } from "@/components/icons";
import { Container, Title } from "@/components/ui";
import { AnimateIn } from "@/components/AnimateIn";

export function Materials() {
  return (
    <section id="materials" className="pt-12 pb-10 md:py-15">
      <Container>
        <AnimateIn>
          <Title className="text-[#010205] mb-10 md:mb-16">
            МАТЕРІАЛИ, ЯКІ У ВАС<br />ЗБЕРІГАТИМУТЬСЯ:
          </Title>
        </AnimateIn>
        <div className="flex flex-col gap-8 md:gap-16">
          <ul className="grid grid-cols-2 gap-x-4 gap-y-8 md:flex md:gap-0 md:divide-x md:divide-black/10">
            {MATERIALS.slice(0, 4).map((item, i) => (
              <AnimateIn key={item.text} delay={80 + i * 80} as="li" className="flex flex-col items-center text-center px-2 md:flex-1 md:px-6">
                <PlusCircleIcon />
                <p className="text-muted text-[14px] md:text-[23px] font-medium leading-[1.3] md:leading-6.25 tracking-[-1.15px] mt-3 md:mt-5">
                  {item.text}
                </p>
              </AnimateIn>
            ))}
          </ul>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-8 md:flex md:gap-0">
            <AnimateIn delay={80} as="li" className="flex flex-col items-center text-center px-2 md:w-[46%] md:shrink-0 md:px-6 md:border-r md:border-black/10">
              <PlusCircleIcon />
              <p className="text-muted text-[14px] md:text-[23px] font-medium leading-[1.3] md:leading-6.25 tracking-[-1.15px] mt-3 md:mt-5">
                {MATERIALS[4].text}
              </p>
            </AnimateIn>
            <AnimateIn delay={160} as="li" className="flex flex-col items-center text-center px-2 md:w-[27%] md:shrink-0 md:px-6 md:border-r md:border-black/10">
              <PlusCircleIcon />
              <p className="text-muted text-[14px] md:text-[23px] font-medium leading-[1.3] md:leading-6.25 tracking-[-1.15px] mt-3 md:mt-5">
                {MATERIALS[5].text}
              </p>
            </AnimateIn>
            <AnimateIn delay={240} as="li" className="col-span-2 flex flex-col items-center text-center px-2 md:w-[27%] md:shrink-0 md:px-6">
              <PlusCircleIcon />
              <p className="text-muted text-[14px] md:text-[23px] font-medium leading-[1.3] md:leading-6.25 tracking-[-1.15px] mt-3 md:mt-5 w-[60%] md:w-auto">
                {MATERIALS[6].text}
              </p>
            </AnimateIn>
          </ul>
        </div>
      </Container>
    </section>
  );
}
