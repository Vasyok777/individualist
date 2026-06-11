import { KNOWLEDGE_ITEMS } from "@/lib/content";
import { ArrowRightCircleIcon } from "@/components/icons";
import { Container, Title } from "@/components/ui";
import { AnimateIn } from "@/components/AnimateIn";
import type { KnowledgeItem } from "@/types";

function Item({ item, delay }: { item: KnowledgeItem; delay: number }) {
  return (
    <li className="border-t border-black/10">
      <AnimateIn delay={delay} className="flex items-center md:justify-between gap-4 md:gap-8 py-5 px-1 md:pt-9.75 md:pr-4 md:pb-9 md:pl-1.5">
        <span
          aria-hidden
          className="hidden md:block text-[100px] font-light leading-none tracking-[-5px] text-muted/30 shrink-0"
        >
          {item.num}
        </span>
        <div className="flex items-start gap-3 md:gap-10 flex-1 md:ml-auto md:w-fit md:max-w-152.5">
          <ArrowRightCircleIcon className="shrink-0 mt-0.5 md:mt-1" />
          <p className="text-muted text-[15px] md:text-[30px] font-medium leading-[1.4] md:leading-7.75 tracking-[-0.5px] md:tracking-[-1.5px] md:max-w-135">
            {item.segments.map((seg, i) =>
              seg.bold ? (
                <strong key={i} className="font-bold">
                  {seg.text}
                </strong>
              ) : (
                <span key={i}>{seg.text}</span>
              ),
            )}
          </p>
        </div>
      </AnimateIn>
    </li>
  );
}

export function Knowledge() {
  return (
    <section id="knowledge" className="py-12 md:py-20 scroll-mt-22">
      <Container>
        <AnimateIn>
          <Title className="text-[#010205] mb-10 md:mb-31.25">
            [ ЯКІ{" "}
            <span className="relative inline-block">
              <img
                src="/highlight-knowledge-title.svg"
                alt=""
                aria-hidden
                className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-auto pointer-events-none z-[-1]"
              />
              <span className="relative">ЗНАННЯ ВИ</span>
            </span>
            <br />
            ОТРИМАЄТЕ? ]
          </Title>
        </AnimateIn>
        <ul className="border-b border-black/10">
          {KNOWLEDGE_ITEMS.map((item, i) => (
            <Item key={item.num} item={item} delay={Math.min(i * 80, 400)} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
