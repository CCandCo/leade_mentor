interface CardProps {
  children: React.ReactNode;
  className?: string;
}
const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={`w-full bg-card text-card-foreground rounded-lg border border-border p-6 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
