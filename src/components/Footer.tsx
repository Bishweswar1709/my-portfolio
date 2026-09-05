import { Github, Linkedin, Code2, Zap } from 'lucide-react'
import { personal, socials } from '../data/portfolioData'

const ICON_MAP: Record<string, React.ReactNode> = {
  github: <Github size={16} />,
  linkedin: <Linkedin size={16} />,
  code: <Code2 size={16} />,
  zap: <Zap size={16} />,
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-surface-border bg-surface-1 py-8">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/30 text-sm font-mono">
          © {year} {personal.name}. Built with React & Tailwind CSS.
        </p>

        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-surface-border text-white/40 hover:text-accent hover:border-accent/30 transition-all duration-200"
            >
              {ICON_MAP[s.icon]}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
