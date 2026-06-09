import type { AnchorHTMLAttributes } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "outline" | "dark";
}

export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-10 py-4 font-black uppercase text-sm tracking-[0.15em] transition-opacity hover:opacity-80";

  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary: "bg-accent text-black",
    dark:    "bg-black text-white",
    outline: "border-2 border-black text-black hover:bg-black hover:text-white hover:opacity-100 transition-colors",
  };

  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
