import { useInView } from '../hooks/useInView'
import { skillCategories } from '../data/portfolioData'

export default function SkillsSection() {
  const [ref, inView] = useInView<HTMLDivElement>()

  return (
    <section id="skills" className="section-padding border-t border-surface-border bg-surface-1">
      <div
        ref={ref}
        className={`section-container transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-14">
          <span className="section-label">/ skills</span>
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle mx-auto">
            Technologies I use to design, build, and ship software.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat) => (
            <div
              key={cat.label}
              className="card p-6 hover:border-accent/20 hover:bg-accent/5 transition-all duration-300 group"
            >
              <h3 className="text-white/40 text-xs font-mono tracking-widest uppercase mb-4 group-hover:text-accent/70 transition-colors">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
