import { RESULTS_ITEMS } from "@/lib/content";
import { BluskIcon } from "@/components/icons";
import { Container, CTAButton, Title } from "@/components/ui";
import { AnimateIn } from "@/components/AnimateIn";
import type { ResultItem } from "@/types";

function Item({ item, delay }: { item: ResultItem; delay: number }) {
  return (
    <AnimateIn delay={delay} as="li" className="flex gap-4 md:gap-9.5 items-start">
      <BluskIcon className="mt-0.5 shrink-0" />
      <p className="text-muted text-[18px] md:text-[30px] font-medium leading-[1.3] md:leading-7.75 tracking-[-0.5px] md:tracking-[-1.5px]">
        {item.segments.map((seg, i) =>
          seg.bold ? (
            <strong key={i} className="font-extrabold">
              {seg.text}
            </strong>
          ) : (
            <span key={i}>{seg.text}</span>
          ),
        )}
      </p>
    </AnimateIn>
  );
}

export function Results() {
  return (
    <section id="results" className="py-15">
      <Container>
        <AnimateIn>
          <Title className="text-[#010205] mb-10 md:mb-24.25">
            [ ЯКІ{" "}
            <span className="relative inline-block">
              <img
                src="/highlight-line-3.svg"
                alt=""
                aria-hidden
                className="absolute top-1/2 translate-y-[-30%] left-0 w-full h-auto pointer-events-none z-[-1]"
              />
              <span className="relative">НАВИЧКИ ВИ</span>
            </span>
            <br />
            ЗДОБУДЕТЕ? ]
          </Title>
        </AnimateIn>
        <div className="grid gap-y-4 md:grid-cols-2 md:gap-x-18 md:gap-y-0 mb-10 md:mb-27.5">
          <ul className="flex flex-col gap-4 md:gap-20">
            {RESULTS_ITEMS.slice(0, 2).map((item, i) => (
              <Item key={i} item={item} delay={80 + i * 100} />
            ))}
            <li className="hidden md:flex justify-center">
              <img
                src="/here_we_go.svg"
                alt="Here we go"
                className="w-full max-w-87.5 h-auto"
              />
            </li>
          </ul>
          <ul className="flex flex-col gap-4 md:gap-20">
            {RESULTS_ITEMS.slice(2).map((item, i) => (
              <Item key={i} item={item} delay={80 + i * 100} />
            ))}
          </ul>
        </div>
        <AnimateIn delay={200}>
          <div className="flex justify-center">
            <CTAButton href="/#checkout">ОТРИМАТИ ДОСТУП</CTAButton>
          </div>
        </AnimateIn>
      </Container>
    </section>
  );
}
