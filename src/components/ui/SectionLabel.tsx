interface SectionLabelProps {
  children: string;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p
      className={`text-xs uppercase tracking-[0.35em] opacity-40 ${className}`}
    >
      [{children}]
    </p>
  );
}
