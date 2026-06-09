import type { ElementType, ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}

export function Title({ children, as: Tag = "h2", className = "" }: TitleProps) {
  return (
    <Tag className={`text-[32px] md:text-[67px] font-semibold leading-[113%] tracking-[-1px] md:tracking-[-2.01px] uppercase ${className}`}>
      {children}
    </Tag>
  );
}
