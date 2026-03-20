interface ProjectCardProps {
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
}

export default function ProjectCard({ title, description, highlights, tech }: ProjectCardProps) {
  return (
    <div className="bg-card border border-card-border rounded-2xl p-6 hover:border-accent/40 transition-colors duration-300">
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted text-sm leading-relaxed mb-4">{description}</p>
      <ul className="space-y-1.5 mb-4">
        {highlights.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-muted text-sm">
            <span className="text-accent mt-0.5 shrink-0">▸</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 pt-2 border-t border-card-border">
        {tech.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 text-xs rounded-full bg-accent/10 text-accent-light border border-accent/20"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
