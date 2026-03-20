interface ExperienceItemProps {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  isLast?: boolean;
}

export default function ExperienceItem({
  role,
  company,
  location,
  period,
  highlights,
  isLast = false,
}: ExperienceItemProps) {
  return (
    <div className="relative pl-8">
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-4 h-4 rounded-full border-2 border-accent bg-background z-10" />
      {/* Timeline line */}
      {!isLast && <div className="timeline-line" />}

      <div className="pb-10">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
          <div>
            <h3 className="text-lg font-semibold text-foreground">{role}</h3>
            <p className="text-accent-light text-sm font-medium">
              {company} <span className="text-muted font-normal">· {location}</span>
            </p>
          </div>
          <span className="text-muted text-sm shrink-0">{period}</span>
        </div>
        <ul className="mt-3 space-y-2">
          {highlights.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-muted text-sm leading-relaxed">
              <span className="text-accent mt-1 shrink-0">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
