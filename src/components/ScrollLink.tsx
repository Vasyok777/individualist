"use client";

import { type ComponentProps } from "react";

interface ScrollLinkProps extends Omit<ComponentProps<"a">, "href"> {
  href: string;
}

export function ScrollLink({ href, onClick, children, ...props }: ScrollLinkProps) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
    onClick?.(e);
  }

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
