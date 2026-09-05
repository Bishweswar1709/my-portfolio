import { useState } from 'react'
import { Menu, X, Download, Code2 } from 'lucide-react'
import { useNavbar } from '../hooks/useNavbar'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { personal } from '../data/portfolioData'

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Education', id: 'education' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Contact', id: 'contact' },
]

const SECTION_IDS = NAV_ITEMS.map((n) => n.id)

export default function Navbar() {
  const scrolled = useNavbar(20)
  const activeSection = useScrollSpy(SECTION_IDS)
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-2 bg-surface-1/95 backdrop-blur-md border-b border-surface-border shadow-lg shadow-black/20'
          : 'py-4 bg-transparent'
      }`}
    >
      <nav className="section-container flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('home')}
          className="flex items-center gap-2 font-mono text-sm font-medium text-white hover:text-accent transition-colors"
          aria-label="Go to top"
        >
          <Code2 size={18} className="text-accent" />
          <span>bishweswar.dev</span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map(({ label, id }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className={`px-3 py-1.5 rounded-lg text-sm transition-all duration-200 ${
                  activeSection === id
                    ? 'text-accent bg-accent/10'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Resume + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-accent/10 hover:bg-accent/20 border border-accent/30 text-accent text-sm font-medium rounded-xl transition-all duration-200"
          >
            <Download size={14} />
            Resume
          </a>
          <button
            className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-surface-1/98 backdrop-blur-md border-b border-surface-border">
          <ul className="section-container py-4 flex flex-col gap-1">
            {NAV_ITEMS.map(({ label, id }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-colors ${
                    activeSection === id
                      ? 'text-accent bg-accent/10'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-accent/10 border border-accent/30 text-accent text-sm rounded-xl"
              >
                <Download size={14} />
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
