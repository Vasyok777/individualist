import { CASES } from "@/lib/content";
import { InstagramIcon } from "@/components/icons";
import { Container, Title } from "@/components/ui";
import type { CaseCard } from "@/types";

const BAR_IMAGES = [
  "/case/8.JPG",
  "/case/9.JPG",
  "/case/10.JPG",
  "/case/11.JPG",
  "/case/12.JPG",
];

function Card({ card }: { card: CaseCard }) {
  return (
    <div className="pt-[14.685px] pr-[14.55px] pb-[13.467px] pl-[14.685px] flex flex-col items-center rounded-2xl md:rounded-[20px] border border-black/50 bg-white">
      <img
        src={card.image}
        alt={card.name}
        className="w-full h-68.75 object-cover mb-6 md:mb-7.5"
      />
      <p className="text-2xl md:text-[30px] font-medium leading-none text-left w-full text-ink mb-6 md:mb-7.5">
        {card.name}
      </p>
      <div className="py-[6.675px] px-2.5 rounded-2.5 bg-[#EEE] w-full text-left mt-auto">
        <p className="text-[12px] text-charcoal">
          <span className="font-normal">{card.badgeLabel} </span>
          <span className="font-extrabold">{card.badgeValue}</span>
        </p>
      </div>
    </div>
  );
}

export function Cases() {
  return (
    <section id="cases" className="py-12 md:py-15">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-7.5 gap-y-4.5 mb-12 md:mb-25">
          <div className="flex flex-col gap-6 mb-4 lg:mb-0 lg:items-center lg:justify-center lg:gap-10">
            <Title className="text-[#010205]">
              [ НАШІ&nbsp;
              <br className="hidden md:block" />
              КЕЙСИ ]
            </Title>
            <div>
              <p className="text-[32px] md:text-[50px] font-bold leading-none tracking-[-2.5px] text-muted">
                200 +
              </p>
              <p className="text-[18px] md:text-[27px] font-semibold leading-5.75 tracking-[-1.35px] text-muted">
                міжнародних кейсів
                <br />
                по всьому світу
              </p>
            </div>
          </div>
          {CASES.map((card) => (
            <Card key={card.name} card={card} />
          ))}
        </div>
      </Container>

      <div className="bg-accent">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-5 py-5 md:py-0 md:h-33">
            <div className="flex items-center gap-5 shrink-0">
              <p className="text-xl md:text-[30px] font-semibold leading-tight md:leading-7.25 tracking-[-1.5px] text-charcoal">
                Та багато інших
                <br />
                відкритих кейсів:
              </p>
              <a
                href="https://www.instagram.com/individualist.agency/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-15 h-15 md:w-25 md:h-25 rounded-[10px] md:rounded-[15px] bg-white flex items-center justify-center">
                  <InstagramIcon className="w-9 h-9 md:w-17.25 md:h-17.25" />
                </div>
              </a>
            </div>
            <div className="flex gap-3 md:gap-5 overflow-x-auto md:justify-end md:mr-10 md:flex-1 -mx-4 px-4 md:mx-0 md:px-0">
              {BAR_IMAGES.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  aria-hidden
                  className="h-28 md:h-38.75 w-auto object-cover shrink-0"
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
