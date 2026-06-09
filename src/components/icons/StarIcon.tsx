export function StarIcon({ size = 60, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true" className={className} fill="currentColor">
      <polygon points="50,0 53,45 100,50 53,55 50,100 47,55 0,50 47,45" />
    </svg>
  );
}
