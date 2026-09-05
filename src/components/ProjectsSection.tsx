import { Github, Calendar, User, Check } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { projects, type Project } from '../data/portfolioData'

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card overflow-hidden hover:border-accent/25 transition-all duration-300 group flex flex-col">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-accent to-purple-500 opacity-60 group-hover:opacity-100 transition-opacity" />

      <div className="p-7 flex flex-col flex-1 gap-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-white/50 text-sm mt-0.5">{project.subtitle}</p>
          </div>
          <span className="flex-shrink-0 px-2.5 py-1 text-xs font-mono border border-surface-border text-white/40 rounded-lg">
            {project.type}
          </span>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-3 text-xs text-white/40 font-mono">
          <span className="flex items-center gap-1.5">
            <Calendar size={12} />
            {project.date}
          </span>
          <span className="flex items-center gap-1.5">
            <User size={12} />
            {project.type}
          </span>
        </div>

        {/* Description */}
        <p className="text-white/60 text-sm leading-relaxed">{project.description}</p>

        {/* Key features */}
        <div>
          <p className="text-white/30 text-xs font-mono tracking-widest uppercase mb-3">
            Key Features
          </p>
          <ul className="space-y-1.5">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-white/60">
                <Check size={13} className="text-accent mt-0.5 flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto pt-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost flex-1 justify-center"
          >
            <Github size={15} />
            GitHub
          </a>
        </div>
      </div>
    </article>
  )
}

export default function ProjectsSection() {
  const [ref, inView] = useInView<HTMLDivElement>()

  return (
    <section id="projects" className="section-padding border-t border-surface-border">
      <div
        ref={ref}
        className={`section-container transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-14">
          <span className="section-label">/ projects</span>
          <h2 className="section-title">What I've Built</h2>
          <p className="section-subtitle mx-auto">
            Full-stack projects showcasing real-world architecture and problem solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
