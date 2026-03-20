interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
        {title}
        <span className="text-accent">.</span>
      </h2>
      {subtitle && (
        <p className="text-muted mt-2 text-base">{subtitle}</p>
      )}
    </div>
  );
}
