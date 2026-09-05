import { GraduationCap } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { education } from '../data/portfolioData'

export default function EducationSection() {
  const [ref, inView] = useInView<HTMLDivElement>()

  return (
    <section id="education" className="section-padding border-t border-surface-border">
      <div
        ref={ref}
        className={`section-container transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-14">
          <span className="section-label">/ education</span>
          <h2 className="section-title">Academic Background</h2>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-surface-border hidden sm:block" />

            <div className="space-y-8">
              {education.map((entry, i) => (
                <div key={i} className="sm:flex gap-6 items-start group">
                  {/* Dot */}
                  <div className="hidden sm:flex flex-shrink-0 w-10 items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-surface-2 border border-surface-border group-hover:border-accent/40 group-hover:bg-accent/10 flex items-center justify-center transition-all duration-300">
                      <GraduationCap size={16} className="text-white/40 group-hover:text-accent transition-colors" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="card p-5 flex-1 hover:border-accent/20 transition-all duration-300 group-hover:bg-accent/5">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                      <h3 className="font-semibold text-white">{entry.degree}</h3>
                      <span className="px-2.5 py-1 bg-accent/10 text-accent font-mono text-xs rounded-lg border border-accent/20">
                        {entry.gradeLabel}: {entry.grade}
                      </span>
                    </div>
                    <p className="text-white/55 text-sm">{entry.institution}</p>
                    <p className="text-white/30 text-xs font-mono mt-1">{entry.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
