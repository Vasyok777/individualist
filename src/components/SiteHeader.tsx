import Link from "next/link";
import { Logo } from "@/components/Logo";
import { MobileMenu } from "@/components/MobileMenu";
import { ScrollLink } from "@/components/ScrollLink";
import { HEADER_NAV_LINKS } from "@/lib/content";
import { Container } from "@/components/ui";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black/8">
      <Container>
        <div className="relative flex items-center h-22 gap-6">
          <Link href="/" aria-label="На головну" className="shrink-0">
            <Logo variant="dark" width={214} />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Основна навігація" className="hidden md:block translate-y-1.5">
            <ul className="flex items-center gap-14.75">
              {HEADER_NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <ScrollLink
                    href={link.href}
                    className="text-muted text-[20px] font-medium leading-none tracking-[-1px] whitespace-nowrap relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-charcoal after:transition-all after:duration-300 hover:text-charcoal hover:after:w-full transition-colors"
                  >
                    {link.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile hamburger */}
          <div className="md:hidden ml-auto">
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}
