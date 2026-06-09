import type { ReactNode } from "react";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function CTAButton({ href, children, className = "" }: CTAButtonProps) {
  return (
    <a
      href={href}
      className={`flex items-center justify-center w-full max-w-137.5 h-16 md:h-21.25 rounded-2xl md:rounded-[20px] bg-black text-white border-2 border-black text-xl md:text-3xl font-semibold leading-none tracking-[-1.5px] uppercase transition-colors duration-300 hover:bg-white hover:text-black ${className}`}
    >
      {children}
    </a>
  );
}
