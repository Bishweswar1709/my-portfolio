import { Code2, Zap, Github, Trophy } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { achievements, socials } from '../data/portfolioData'

const PLATFORMS = [
  {
    name: 'LeetCode',
    icon: <Code2 size={20} />,
    stats: ['1796 Rating', 'Top 10% Global', '250+ Problems'],
    color: 'from-amber-500/20 to-amber-600/5',
    border: 'hover:border-amber-500/30',
    socialKey: 'code',
  },
  {
    name: 'Codeforces',
    icon: <Zap size={20} />,
    stats: ['1596 Rating', 'Specialist Rank', '100+ Problems'],
    color: 'from-blue-500/20 to-blue-600/5',
    border: 'hover:border-blue-500/30',
    socialKey: 'zap',
  },
  {
    name: 'GitHub',
    icon: <Github size={20} />,
    stats: ['Active Repositories', 'Full-Stack Projects', 'Open Source'],
    color: 'from-purple-500/20 to-purple-600/5',
    border: 'hover:border-purple-500/30',
    socialKey: 'github',
  },
]

export default function AchievementsSection() {
  const [ref, inView] = useInView<HTMLDivElement>()

  const getUrl = (key: string) =>
    socials.find((s) => s.icon === key)?.url ?? '#'

  return (
    <section id="achievements" className="section-padding border-t border-surface-border bg-surface-1">
      <div
        ref={ref}
        className={`section-container transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-14">
          <span className="section-label">/ achievements</span>
          <h2 className="section-title">Problem Solving</h2>
          <p className="section-subtitle mx-auto">
            Competitive programming and coding achievements across major platforms.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {achievements.map((a) => (
            <div
              key={a.label}
              className="card p-6 text-center hover:border-accent/20 hover:bg-accent/5 transition-all duration-300 group"
            >
              <Trophy size={16} className="text-accent/50 mx-auto mb-3 group-hover:text-accent transition-colors" />
              <div className="text-3xl font-bold text-white mb-1 group-hover:text-accent transition-colors">
                {a.value}
              </div>
              <div className="text-white/60 text-sm font-medium">{a.label}</div>
              {a.sublabel && (
                <div className="text-white/30 text-xs mt-0.5">{a.sublabel}</div>
              )}
            </div>
          ))}
        </div>

        {/* Platform cards */}
        <div className="grid sm:grid-cols-3 gap-5">
          {PLATFORMS.map((p) => (
            <div
              key={p.name}
              className={`card p-6 bg-gradient-to-br ${p.color} ${p.border} transition-all duration-300 flex flex-col gap-4`}
            >
              <div className="flex items-center gap-3 text-white">
                <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center">
                  {p.icon}
                </div>
                <span className="font-semibold">{p.name}</span>
              </div>
              <ul className="space-y-1.5">
                {p.stats.map((s) => (
                  <li key={s} className="text-white/55 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent/60 flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
              <a
                href={getUrl(p.socialKey)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost mt-auto text-xs justify-center"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
