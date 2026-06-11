"use client";

import { useEffect, useRef } from "react";
import React from "react";

interface AnimateInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: string;
}

export function AnimateIn({ children, delay = 0, className = "", as = "div" }: AnimateInProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return React.createElement(
    as,
    { ref, style: { transitionDelay: `${delay}ms` }, className: `animate-in ${className}`.trim() },
    children
  );
}
