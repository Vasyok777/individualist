"use client";

import { useState, useEffect } from "react";
import { Logo } from "@/components/Logo";
import { ScrollLink } from "@/components/ScrollLink";
import { HEADER_NAV_LINKS } from "@/lib/content";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Відкрити меню"
        className="flex flex-col justify-center items-center w-8 h-8 gap-1.5"
      >
        <span className="block w-6 h-0.5 bg-black" />
        <span className="block w-6 h-0.5 bg-black" />
        <span className="block w-6 h-0.5 bg-black" />
      </button>

      <div
        className={`fixed inset-0 z-[100] bg-white flex flex-col transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div className="flex items-center justify-between px-5 h-22 border-b border-black/8 shrink-0">
          <Logo variant="dark" width={214} />
          <button
            onClick={() => setOpen(false)}
            aria-label="Закрити меню"
            className="flex items-center justify-center w-10 h-10"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M2 2L18 18M18 2L2 18"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <nav aria-label="Мобільна навігація" className="flex-1 flex flex-col px-7 pt-8">
          <ul className="flex flex-col">
            {HEADER_NAV_LINKS.map((link, i) => (
              <li
                key={link.label}
                style={{ transitionDelay: open ? `${i * 60 + 80}ms` : "0ms" }}
                className={`transition-all duration-300 ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                <ScrollLink
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-[22px] font-medium text-charcoal leading-tight py-4 border-b border-black/10 hover:text-accent transition-colors"
                >
                  {link.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="px-7 pb-10 shrink-0">
          <div className="h-1.5 w-12 bg-accent rounded-full" />
        </div>
      </div>
    </>
  );
}
