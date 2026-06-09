import { MATERIALS } from "@/lib/content";
import { PlusCircleIcon } from "@/components/icons";
import { Container, Title } from "@/components/ui";

export function Materials() {
  return (
    <section id="materials" className="pt-12 pb-10 md:py-15">
      <Container>
        <Title className="text-[#010205] mb-10 md:mb-16">
          МАТЕРІАЛИ, ЯКІ У ВАС<br />ЗБЕРІГАТИМУТЬСЯ:
        </Title>
        <div className="flex flex-col gap-8 md:gap-16">
          <ul className="grid grid-cols-2 gap-x-4 gap-y-8 md:flex md:gap-0 md:divide-x md:divide-black/10">
            {MATERIALS.slice(0, 4).map((item) => (
              <li key={item.text} className="flex flex-col items-center text-center px-2 md:flex-1 md:px-6">
                <PlusCircleIcon />
                <p className="text-muted text-[14px] md:text-[23px] font-medium leading-[1.3] md:leading-6.25 tracking-[-1.15px] mt-3 md:mt-5">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-8 md:flex md:gap-0">
            <li className="flex flex-col items-center text-center px-2 md:w-[46%] md:shrink-0 md:px-6 md:border-r md:border-black/10">
              <PlusCircleIcon />
              <p className="text-muted text-[14px] md:text-[23px] font-medium leading-[1.3] md:leading-6.25 tracking-[-1.15px] mt-3 md:mt-5">
                {MATERIALS[4].text}
              </p>
            </li>
            <li className="flex flex-col items-center text-center px-2 md:w-[27%] md:shrink-0 md:px-6 md:border-r md:border-black/10">
              <PlusCircleIcon />
              <p className="text-muted text-[14px] md:text-[23px] font-medium leading-[1.3] md:leading-6.25 tracking-[-1.15px] mt-3 md:mt-5">
                {MATERIALS[5].text}
              </p>
            </li>
            <li className="col-span-2 flex flex-col items-center text-center px-2 md:w-[27%] md:shrink-0 md:px-6">
              <PlusCircleIcon />
              <p className="text-muted text-[14px] md:text-[23px] font-medium leading-[1.3] md:leading-6.25 tracking-[-1.15px] mt-3 md:mt-5 w-[60%] md:w-auto">
                {MATERIALS[6].text}
              </p>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
