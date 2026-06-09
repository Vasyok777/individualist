export function ArrowRightCircleIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      fill="none"
      className={`w-9 h-9 md:w-11.75 md:h-11.75 shrink-0 -rotate-90 ${className ?? ""}`}
    >
      <circle cx="22" cy="22" r="22" fill="#1D1D1B" />
      <path
        d="M22 14V30M16 24L22 30L28 24"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
