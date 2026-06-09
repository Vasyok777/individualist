export function BrandMark({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 60" fill="none" className={`w-10 h-8 md:w-18.75 md:h-15 ${className ?? ""}`}>
      <path d="M44.9551 44.9551V59.8652H30.0449V44.9551H44.9551ZM44.9551 0V19.5078L58.9521 5.50488L69.4951 16.0479L55.498 30.0459H75V44.9551H44.9551V30.0459H30.0654L30.0449 30.0654V44.9551H0V30.0459H19.5225L5.52441 16.0479L16.0674 5.50488L30.0449 19.4824V0H44.9551Z" fill="#F6FF4B"/>
    </svg>
  );
}
