interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-card border border-card-border rounded-2xl p-6 hover:border-accent/40 transition-colors duration-300 ${className}`}
    >
      {children}
    </div>
  );
}
