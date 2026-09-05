import { MapPin, GraduationCap, Target, BookOpen } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { personal, achievements } from '../data/portfolioData'

const ABOUT_POINTS = [
  {
    icon: <GraduationCap size={16} className="text-accent" />,
    text: 'Pursuing B.Tech in Computer Science & Engineering at Sister Nivedita University (2023–2027)',
  },
  {
    icon: <Target size={16} className="text-accent" />,
    text: 'Actively preparing for technical interviews, campus placements, and off-campus SDE roles',
  },
  {
    icon: <BookOpen size={16} className="text-accent" />,
    text: 'Strong interest in Data Structures & Algorithms — 350+ problems solved across LeetCode and Codeforces',
  },
  {
    icon: <GraduationCap size={16} className="text-accent" />,
    text: 'Focused on full-stack web development using React, Node.js, and MongoDB to build scalable applications',
  },
]

export default function AboutSection() {
  const [ref, inView] = useInView<HTMLDivElement>()

  return (
    <section id="about" className="section-padding border-t border-surface-border">
      <div
        ref={ref}
        className={`section-container transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Text */}
          <div>
            <span className="section-label">/ about me</span>
            <h2 className="section-title">Who I Am</h2>
            <p className="text-white/60 leading-relaxed mb-8 max-w-lg">
              {personal.intro}
            </p>

            <div className="space-y-4 mb-8">
              {ABOUT_POINTS.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center">
                    {point.icon}
                  </div>
                  <p className="text-white/65 text-sm leading-relaxed">{point.text}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-white/40 text-sm">
              <MapPin size={14} className="text-accent" />
              <span>{personal.location}</span>
            </div>
          </div>

          {/* Highlight stats */}
          <div className="grid grid-cols-2 gap-4">
            {achievements.map((a) => (
              <div
                key={a.label}
                className="card p-6 hover:border-accent/20 hover:bg-accent/5 transition-all duration-300 group"
              >
                <div className="text-3xl font-bold text-white group-hover:text-accent transition-colors">
                  {a.value}
                </div>
                <div className="text-white/70 text-sm font-medium mt-1">{a.label}</div>
                {a.sublabel && (
                  <div className="text-white/35 text-xs mt-0.5">{a.sublabel}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
