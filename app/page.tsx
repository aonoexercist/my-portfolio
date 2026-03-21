import Navbar from "@/components/Navbar";
import SectionHeading from "@/components/SectionHeading";
import TechCategory from "@/components/TechCategory";
import ExperienceItem from "@/components/ExperienceItem";
import ProjectCard from "@/components/ProjectCard";

const experience = [
  {
    role: "Full Stack Software Developer",
    company: "Digital Transformation Office, USTP",
    location: "Cagayan de Oro City",
    period: "Jun 2022 – Present",
    highlights: [
      "Developed a Document Management System, improving retrieval efficiency by 30%",
      "Built and enhanced a School Management / ERP System, focusing on admissions and enrollment workflows",
      "Designed and integrated an AI-powered chat assistant for document search and user support",
      "Implemented scalable frontend architecture using React and Next.js",
      "Set up CI/CD pipelines with GitHub Actions and Docker-based deployments",
    ],
  },
  {
    role: "Computer Programmer",
    company: "LGU Cagayan de Oro",
    location: "Cagayan de Oro City",
    period: "Mar 2022 – Jun 2022",
    highlights: [
      "Developed an inventory management system for internal operations",
      "Improved UI/UX and overall system usability",
    ],
  },
  {
    role: "Full Stack Software Developer",
    company: "Brooky Technologies",
    location: "Philippines",
    period: "Apr 2020 – Jan 2022",
    highlights: [
      "Built web and mobile applications for a real estate platform",
      "Developed automated workflows reducing manual processes",
      "Implemented real-time notifications via SMS, email, and in-app channels",
    ],
  },
  {
    role: "Software Developer / Technical Support",
    company: "Darbs Corporation",
    location: "Philippines",
    period: "Sep 2018 – Jun 2019",
    highlights: [
      "Developed a custom bidding system for procurement operations",
      "Provided IT support, system maintenance, and troubleshooting",
    ],
  },
];

const projects = [
  {
    title: "EduSync – School Management / ERP System",
    description:
      "A full-stack enterprise platform for managing admissions, enrollment, and evaluation workflows across multiple academic departments.",
    highlights: [
      "Role-based authentication and tailored dashboards for admins, registrars, and students",
      "Docker-based deployment with CI/CD pipelines using GitHub Actions",
      "Scalable system architecture built for enterprise use",
    ],
    tech: ["React", "Next.js", "Laravel", "MySQL", "Docker", "GitHub Actions"],
  },
  {
    title: "AI Chat Assistant – Document Management System",
    description:
      "An AI-powered chat feature integrated into a document management platform, enabling users to search and retrieve documents through natural language queries.",
    highlights: [
      "Reduced manual search effort and improved document accessibility",
      "Integrated with backend services for dynamic, context-aware responses",
      "Built conversational UI with real-time streaming responses",
    ],
    tech: ["Vue.js 2", "Stream Response", "AI/LLM Integration", "REST APIs"],
  },
];

const techStack = [
  {
    icon: "🖥️",
    title: "Frontend",
    skills: ["React", "Next.js", "Vue.js 2 & 3", "Nuxt.js", "TypeScript", "JavaScript", "Tailwind CSS", "ShadCN UI", "ExtJS"],
  },
  {
    icon: "⚙️",
    title: "Backend",
    skills: ["Laravel", "PHP", "CodeIgniter", "Frappe ERP Framework", "Python", "Node.js", "Express.js", "PostgreSQL"],
  },
  {
    icon: "📱",
    title: "Mobile",
    skills: ["Flutter", "Dart"],
  },
  {
    icon: "🗄️",
    title: "Database",
    skills: ["MySQL", "MariaDB", "Firebase", "MongoDB", "SQLite"],
  },
  {
    icon: "🚀",
    title: "DevOps",
    skills: ["Docker", "Docker Compose", "GitHub Actions", "CI/CD", "Nginx", "Kurbernetes"],
  },
  {
    icon: "🔧",
    title: "Tools",
    skills: ["Git", "GitHub", "GitLab", "Trello", "ClickUp", "Asana"],
  },
];

const stats = [
  { value: "7+", label: "Years Experience" },
  { value: "4", label: "Companies" },
  { value: "10+", label: "Projects Shipped" },
  { value: "5+", label: "Tech Stacks" },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-16 font-[family-name:var(--font-geist-sans)]">
        {/* ═══ Hero ═══ */}
        <section className="min-h-[80vh] flex flex-col justify-center animate-fade-in-up">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-success animate-pulse-dot" />
            <span className="text-success text-sm font-medium">Available for opportunities</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 text-foreground">
            Xercis C. Silao
          </h1>

          <p className="text-xl sm:text-2xl text-muted font-medium mb-4">
            Full Stack Software Developer
          </p>

          <p className="text-base sm:text-lg text-muted max-w-2xl leading-relaxed mb-8">
            7+ years building{" "}
            <span className="text-foreground">scalable enterprise systems</span>,{" "}
            <span className="text-foreground">ERP platforms</span>, and{" "}
            <span className="text-foreground">AI-driven features</span>.
            Experienced in end-to-end development from architecture to CI/CD deployment.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:xercis.silao@gmail.com"
              className="px-6 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent-light transition-colors text-sm sm:text-base"
            >
              Get in Touch
            </a>
            <a
              href="#experience"
              className="px-6 py-3 rounded-lg border border-card-border text-muted hover:text-foreground hover:border-accent/40 transition-colors text-sm sm:text-base"
            >
              View Experience
            </a>
          </div>
        </section>

        {/* ═══ Stats Bar ═══ */}
        <section className="py-12 animate-fade-in-up animate-delay-100">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center py-6 bg-card border border-card-border rounded-xl">
                <div className="text-2xl sm:text-3xl font-bold text-accent">{stat.value}</div>
                <div className="text-muted text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ About ═══ */}
        <section id="about" className="py-16 animate-fade-in-up">
          <SectionHeading title="About" subtitle="A quick overview of who I am and what I bring to the table" />
          <div className="bg-card border border-card-border rounded-2xl p-6 sm:p-8">
            <p className="text-muted leading-relaxed text-base sm:text-lg">
              Full Stack Software Developer with 7+ years of experience in web and mobile development.
              I specialize in building scalable enterprise systems — from{" "}
              <span className="text-foreground font-medium">ERP and school management platforms</span>{" "}
              to <span className="text-foreground font-medium">AI-powered document search tools</span>.
              I focus on clean architecture, performance, and delivering real-world impact through
              technology. Skilled in setting up CI/CD pipelines, Docker-based deployments, and
              crafting user experiences that work.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              <span>📍 Philippines</span>
              <a href="mailto:xercis.silao@gmail.com" className="hover:text-accent-light transition-colors">
                ✉️ xercis.silao@gmail.com
              </a>
              <span>📞 09058339902</span>
            </div>
          </div>
        </section>

        {/* ═══ Experience ═══ */}
        <section id="experience" className="py-16">
          <SectionHeading title="Experience" subtitle="Where I've worked and what I've built" />
          <div>
            {experience.map((exp, i) => (
              <ExperienceItem
                key={exp.company}
                {...exp}
                isLast={i === experience.length - 1}
              />
            ))}
          </div>
        </section>

        {/* ═══ Projects ═══ */}
        <section id="projects" className="py-16">
          <SectionHeading title="Projects" subtitle="Key projects I've built and shipped" />
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        {/* ═══ Tech Stack ═══ */}
        <section id="skills" className="py-16">
          <SectionHeading title="Technical Skills" subtitle="Technologies and tools I work with daily" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {techStack.map((cat) => (
              <TechCategory key={cat.title} icon={cat.icon} title={cat.title} skills={cat.skills} />
            ))}
          </div>
        </section>

        {/* ═══ Education & Certifications ═══ */}
        <section className="py-16">
          <SectionHeading title="Education & Certifications" />
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-card border border-card-border rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-1">
                BS Computer Engineering
              </h3>
              <p className="text-accent-light text-sm font-medium">USTP – Cagayan de Oro City</p>
              <p className="text-muted text-sm mt-1 mb-3">2013 – 2018</p>
              <a
                href="https://drive.google.com/file/d/1cPji_NRngj1Q3GKEKzyf3xNv5meQ3Tah/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-light hover:text-accent text-sm font-medium transition-colors"
              >
                View Diploma →
              </a>
            </div>
            <div className="bg-card border border-card-border rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-1">
                Skillsoft Digital Badges
              </h3>
              <p className="text-muted text-sm mt-1 mb-3">Professional development certifications</p>
              <a
                href="https://skillsoft.digitalbadges.skillsoft.com/profile/xercissilao128100/wallet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-light hover:text-accent text-sm font-medium transition-colors"
              >
                View Badges →
              </a>
            </div>
            <div className="bg-card border border-card-border rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-1">
                Web Full Stack Development
              </h3>
              <p className="text-accent-light text-sm font-medium">DTI Certification</p>
              <p className="text-muted text-sm mt-1 mb-3">Department of Trade and Industry – Philippines</p>
              <a
                href="https://drive.google.com/file/d/1eiF5hDEQk7WQiK4QDeNogQjehX8L8G0u/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-light hover:text-accent text-sm font-medium transition-colors"
              >
                View Certificate →
              </a>
            </div>
            <div className="bg-card border border-card-border rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-1">
                Mobile Application Developer
              </h3>
              <p className="text-accent-light text-sm font-medium">DTI Certification</p>
              <p className="text-muted text-sm mt-1 mb-3">Department of Trade and Industry – Philippines</p>
              <a
                href="https://drive.google.com/file/d/1ChvG09om_Y9n_dvMlA8kPizYFUAaB_4e/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-light hover:text-accent text-sm font-medium transition-colors"
              >
                View Certificate →
              </a>
            </div>
          </div>
        </section>

        {/* ═══ Contact ═══ */}
        <section id="contact" className="py-16">
          <SectionHeading title="Let&apos;s Work Together" subtitle="Open to full-time roles, freelance projects, and consulting" />
          <div className="bg-card border border-card-border rounded-2xl p-6 sm:p-8 text-center">
            <p className="text-muted text-lg mb-8 max-w-lg mx-auto">
              I&apos;m actively looking for new opportunities. If you think I&apos;d be a good fit for your team, let&apos;s talk.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:xercis.silao@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent-light transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/xercis-silao-aa64a2218"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-card-border text-muted hover:text-foreground hover:border-accent/40 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* ═══ Footer ═══ */}
        <footer className="border-t border-card-border py-8 text-center">
          <p className="text-muted/60 text-sm">
            © {new Date().getFullYear()} Xercis C. Silao. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}
