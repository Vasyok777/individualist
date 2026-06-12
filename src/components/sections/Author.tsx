import { AUTHOR_EDUCATION } from "@/lib/content";
import { ArrowRightCircleIcon } from "@/components/icons";
import { Container, CTAButton, Title } from "@/components/ui";
import { AnimateIn } from "@/components/AnimateIn";

export function Author() {
  return (
    <section id="author" className="py-5 md:pt-17.5 md:pb-20">
      <Container>
        <AnimateIn className="relative z-10">
          <Title className="text-[#010205] shrink-0">
            АВТОР ВОРКШОПУ
            <br />
            GO-TO-
            <span className="relative inline-block">
              <img
                src="/highlight-author-title.svg"
                alt=""
                aria-hidden
                className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-auto pointer-events-none z-[-1]"
              />
              <span className="relative">MARKET:</span>
            </span>
          </Title>
        </AnimateIn>
        <div className="flex flex-col md:flex-row md:items-start md:gap-10 gap-8 mb-16 md:mb-26">
          <div className="hidden md:block w-100 shrink-0"></div>
          <AnimateIn delay={120} className="flex flex-col md:flex-row md:items-center md:gap-8 flex-1 md:-translate-y-8.75">
            <img
              src="/author.JPG"
              alt="Міла — автор воркшопу Go-To-Market"
              className="w-54.75 h-80.25 ml-auto mr-16 my-6 md:my-0 md:mx-0 md:w-85 md:h-auto shrink-0 object-cover object-top"
            />
            <div className="flex flex-col gap-4 text-[19px] md:text-[23px] italic font-medium leading-6 tracking-[-1.15px] text-charcoal">
              <p>Привіт, давайте знайомитись 🤝🙂</p>
              <p>
                Мене звати Міла, я займаюся маркетингом{" "}
                <strong className="font-extrabold">14 років</strong>.{" "}
                <strong className="font-extrabold">Founder {"&"} CEO</strong>{" "}
                міжнародної маркетингової агенції{" "}
                <strong className="font-extrabold">
                  Individualist Agency.
                </strong>{" "}
                Викладаю digital marketing у Projector Institute.
              </p>
              <p>
                Працювала із такими брендами, як UNICEF, Yves Rocher та багато
                інших.
              </p>
            </div>
          </AnimateIn>
        </div>

        <div>
          <AnimateIn>
            <Title className="text-[#010205] mb-10 md:mb-16">МОЯ ОСВІТА</Title>
          </AnimateIn>
          <div className="flex flex-col md:flex-row md:items-start md:gap-33 gap-10 mb-10 md:mb-16">
            <div className="hidden md:block shrink-0 -mb-25 lg:-ml-50">
              <img
                src="/education.png"
                alt=""
                aria-hidden
                className="w-107 h-107 object-contain"
              />
            </div>
            <ul className="flex flex-col gap-5 md:gap-8 flex-1">
              {AUTHOR_EDUCATION.map((item, i) => (
                <AnimateIn key={i} delay={80 + i * 100} as="li" className="flex items-center gap-6 md:gap-10">
                  <ArrowRightCircleIcon className="shrink-0 mt-0.5" />
                  <span className="text-[18px] md:text-[23px] font-medium leading-6 tracking-[-1.15px] text-charcoal">
                    {item}
                  </span>
                </AnimateIn>
              ))}
            </ul>
          </div>
          <AnimateIn delay={200}>
            <div className="flex justify-center">
              <CTAButton href="https://secure.wayforpay.com/button/ba1ca72f2fbf4">ДОЛУЧИТИСЯ ДО ІНТЕНСИВУ</CTAButton>
            </div>
          </AnimateIn>
        </div>
      </Container>
    </section>
  );
}
