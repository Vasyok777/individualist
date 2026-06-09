import { RESULTS_ITEMS } from "@/lib/content";
import { BluskIcon } from "@/components/icons";
import { Container, CTAButton, Title } from "@/components/ui";
import type { ResultItem } from "@/types";

function Item({ item }: { item: ResultItem }) {
  return (
    <li className="flex gap-4 md:gap-9.5 items-start">
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
    </li>
  );
}

export function Results() {
  return (
    <section id="results" className="py-15">
      <Container>
        <Title className="text-[#010205] mb-10 md:mb-24.25">
          ВИ ОТРИМУЄТЕ ЧІТКУ ПРАКТИЧНУ
          <br />
          <span className="relative block md:inline-block">
            <img
              src="/highlight-line-2.svg"
              alt=""
              aria-hidden
              className="absolute top-1/2 -translate-y-1/2 left-0 max-md:w-[70%] md:w-full h-auto pointer-events-none z-[-1]"
            />
            <span className="relative">
              ІНСТРУКЦІЮ ТА ЗНАННЯ, <span className="md:hidden">ПІСЛЯ</span>
            </span>
          </span>
          <span className="hidden md:inline-block">&nbsp;ПІСЛЯ</span>
          <span className="relative block md:inline-block">
            <img
              src="/highlight-line-3.svg"
              alt=""
              aria-hidden
              className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-auto pointer-events-none z-[-1]"
            />
            <span className="relative">ЯКИХ ВИ ЗМОЖЕТЕ:</span>
          </span>
        </Title>
        <div className="grid gap-y-4 md:gap-y-8 md:grid-cols-2 md:gap-x-18 md:gap-y-0 mb-10 md:mb-27.5">
          <ul className="flex flex-col gap-4 md:gap-20">
            {RESULTS_ITEMS.slice(0, 2).map((item, i) => (
              <Item key={i} item={item} />
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
              <Item key={i} item={item} />
            ))}
          </ul>
        </div>
        <div className="flex justify-center">
          <CTAButton href="/#checkout">ОТРИМАТИ ДОСТУП</CTAButton>
        </div>
      </Container>
    </section>
  );
}
