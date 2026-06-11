import Link from "next/link";
import {
  FOOTER_CONTACTS,
  FOOTER_LEGAL_LINKS,
  FOOTER_NAV_LINKS,
} from "@/lib/content";
import { Logo } from "@/components/Logo";
import { ScrollLink } from "@/components/ScrollLink";
import { Container } from "@/components/ui";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-10 pb-16.75 md:pt-11.75 md:pb-18.5">
      <Container>
        {/* Mobile layout */}
        <div className="flex flex-col md:hidden">
          <Link href="/" aria-label="На головну" className="mb-9">
            <Logo variant="light" width={278} />
          </Link>

          <nav aria-label="Навігація по сторінці" className="mb-7.5">
            <ul className="flex flex-col gap-2">
              {FOOTER_NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <ScrollLink
                    href={link.href}
                    className="text-white text-[20px] font-medium leading-5 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Юридична інформація" className="mb-7.5">
            <ul className="flex flex-col gap-2">
              {FOOTER_LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("#") ? (
                    <ScrollLink
                      href={link.href}
                      className="text-white text-[20px] font-medium leading-5 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </ScrollLink>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-white text-[20px] font-medium leading-5 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-white text-[20px] font-medium leading-6 mb-1">
              Контакти:
            </p>
            <address className="not-italic flex flex-col">
              <a
                href={`mailto:${FOOTER_CONTACTS.email}`}
                className="text-white text-[20px] font-medium leading-6 transition-colors hover:text-accent"
              >
                {FOOTER_CONTACTS.email}
              </a>
              <a
                href={`tel:${FOOTER_CONTACTS.phone.replace(/\s/g, "")}`}
                className="text-white text-[20px] font-medium leading-6 transition-colors hover:text-accent"
              >
                {FOOTER_CONTACTS.phone}
              </a>
            </address>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:flex md:flex-row md:gap-10 md:justify-between">
          <div>
            <Link
              href="/"
              aria-label="На головну"
              className="block mb-6 shrink-0"
            >
              <Logo variant="light" width={214} />
            </Link>

            <div className="md:pl-4.25 flex flex-col gap-1">
              <p className="text-white text-xl mb-4 font-medium leading-6">
                Контакти
              </p>
              <address className="not-italic flex flex-col">
                <a
                  href={`mailto:${FOOTER_CONTACTS.email}`}
                  className="text-white text-xl font-medium leading-6 transition-colors hover:text-accent"
                >
                  {FOOTER_CONTACTS.email}
                </a>
                <a
                  href={`tel:${FOOTER_CONTACTS.phone.replace(/\s/g, "")}`}
                  className="text-white text-xl font-medium leading-6 transition-colors hover:text-accent"
                >
                  {FOOTER_CONTACTS.phone}
                </a>
              </address>
            </div>
          </div>

          <div className="flex flex-row gap-28.75 pt-7">
            <nav aria-label="Навігація по сторінці">
              <ul className="flex flex-col gap-7.5">
                {FOOTER_NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <ScrollLink
                      href={link.href}
                      className="text-white text-xl font-medium leading-5 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Юридична інформація">
              <ul className="flex flex-col gap-7.5">
                {FOOTER_LEGAL_LINKS.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("#") ? (
                      <ScrollLink
                        href={link.href}
                        className="text-white text-xl font-medium leading-5 transition-colors hover:text-accent"
                      >
                        {link.label}
                      </ScrollLink>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-white text-xl font-medium leading-5 transition-colors hover:text-accent"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </Container>
    </footer>
  );
}
