interface TechCategoryProps {
  icon: string;
  title: string;
  skills: string[];
}

export default function TechCategory({ icon, title, skills }: TechCategoryProps) {
  return (
    <div className="bg-card border border-card-border rounded-2xl p-6 hover:border-accent/40 transition-colors duration-300">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <span>{icon}</span> {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 text-sm rounded-full bg-accent/10 text-accent-light border border-accent/20 hover:bg-accent/20 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
