import { Github, Linkedin, Code2, Zap, Download, ArrowDown } from 'lucide-react'
import { personal, socials } from '../data/portfolioData'

const ICON_MAP: Record<string, React.ReactNode> = {
  github: <Github size={18} />,
  linkedin: <Linkedin size={18} />,
  code: <Code2 size={18} />,
  zap: <Zap size={18} />,
}

// Minimal grid/terminal visual element
function CodeWindow() {
  return (
    <div className="card p-0 overflow-hidden shadow-2xl shadow-accent/10 border-surface-border w-full max-w-md mx-auto lg:mx-0">
      {/* Window bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-surface-3 border-b border-surface-border">
        <span className="w-3 h-3 rounded-full bg-red-500/70" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <span className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-3 font-mono text-xs text-white/30">~/bishweswar/portfolio</span>
      </div>
      {/* Code content */}
      <div className="p-5 font-mono text-sm leading-7">
        <div>
          <span className="text-purple-400">const</span>{' '}
          <span className="text-accent-light">developer</span>{' '}
          <span className="text-white/50">=</span>{' '}
          <span className="text-white/50">{'{'}</span>
        </div>
        <div className="pl-5">
          <span className="text-green-400">name</span>
          <span className="text-white/50">: </span>
          <span className="text-amber-300">"Bishweswar Roy"</span>
          <span className="text-white/50">,</span>
        </div>
        <div className="pl-5">
          <span className="text-green-400">role</span>
          <span className="text-white/50">: </span>
          <span className="text-amber-300">"Full-Stack Developer"</span>
          <span className="text-white/50">,</span>
        </div>
        <div className="pl-5">
          <span className="text-green-400">focus</span>
          <span className="text-white/50">: </span>
          <span className="text-amber-300">"React · Node.js · DSA"</span>
          <span className="text-white/50">,</span>
        </div>
        <div className="pl-5">
          <span className="text-green-400">dsaSolved</span>
          <span className="text-white/50">: </span>
          <span className="text-cyan-400">350</span>
          <span className="text-white/30">+</span>
          <span className="text-white/50">,</span>
        </div>
        <div className="pl-5">
          <span className="text-green-400">openTo</span>
          <span className="text-white/50">: </span>
          <span className="text-amber-300">"Internships & SDE Roles"</span>
        </div>
        <div>
          <span className="text-white/50">{'}'}</span>
        </div>
        <div className="mt-3 flex items-center gap-1">
          <span className="text-accent">$</span>
          <span className="text-white/50 ml-1">npm run</span>
          <span className="text-white"> build-career</span>
          <span className="inline-block w-2 h-4 bg-accent ml-1 animate-pulse" />
        </div>
      </div>
    </div>
  )
}

export default function HeroSection() {
  const scrollToProjects = () =>
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,102,241,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.8) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Glow orbs */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-accent/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-600/6 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="font-mono text-accent text-sm tracking-widest">
                &gt; Hello, world. I'm
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                {personal.name}
              </h1>
              <h2 className="text-xl lg:text-2xl font-medium text-white/70">
                {personal.headline}
              </h2>
            </div>

            <p className="text-white/50 text-sm font-mono tracking-wide leading-relaxed max-w-md">
              {personal.tagline}
            </p>

            <p className="text-white/65 text-base max-w-lg leading-relaxed">
              {personal.intro}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <button onClick={scrollToProjects} className="btn-primary px-6 py-3 text-base">
                View Projects
              </button>
              <button onClick={scrollToContact} className="btn-ghost px-6 py-3 text-base">
                Contact Me
              </button>
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border border-surface-border hover:border-accent/40 text-white/60 hover:text-white text-base rounded-xl transition-all duration-200"
              >
                <Download size={16} />
                Resume
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-surface-border text-white/50 hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all duration-200"
                >
                  {ICON_MAP[s.icon]}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Code window */}
          <div className="flex justify-center lg:justify-end">
            <CodeWindow />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-20 lg:mt-24">
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="Scroll down"
            className="flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors"
          >
            <span className="text-xs font-mono tracking-widest">scroll</span>
            <ArrowDown size={16} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  )
}
