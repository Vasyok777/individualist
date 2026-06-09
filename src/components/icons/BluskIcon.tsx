export function BluskIcon({ className }: { className?: string }) {
  return (
    <img
      src="/blusk.png"
      alt=""
      aria-hidden
      width={47}
      height={47}
      className={`shrink-0 ${className ?? ""}`}
    />
  );
}
