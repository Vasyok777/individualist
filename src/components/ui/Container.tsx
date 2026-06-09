interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-341.5 px-5 md:px-4 lg:px-16 ${className}`}>
      {children}
    </div>
  );
}
