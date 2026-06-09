import { AUDIENCE_ITEMS } from "@/lib/content";
import { BrandMark } from "@/components/icons";
import { Container, Title } from "@/components/ui";

export function ForWhom() {
  return (
    <section id="for-whom" className="bg-[#3C3C3C] pt-12 pb-14 md:pt-21.25 md:pb-19">
      <Container>
        <Title className="text-white mb-10 md:mb-20.5">
          [ ДЛЯ КОГО ЦЕЙ <br />
          КУРС ]
        </Title>
        <ul className="grid md:grid-cols-2 gap-y-7.5 md:gap-y-3.75 gap-x-21">
          {AUDIENCE_ITEMS.map((item) => (
            <li key={item.text} className="flex flex-col gap-3.75 md:gap-7.5">
              <BrandMark />
              <span className="text-white text-xl md:text-[30px] font-medium leading-6 md:leading-7.75 tracking-[-1.5px]">
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
