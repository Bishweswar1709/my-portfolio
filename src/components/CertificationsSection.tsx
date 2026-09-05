import { Award, ExternalLink } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { certifications } from '../data/portfolioData'

export default function CertificationsSection() {
  const [ref, inView] = useInView<HTMLDivElement>()

  return (
    <section id="certifications" className="section-padding border-t border-surface-border bg-surface-1">
      <div
        ref={ref}
        className={`section-container transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-14">
          <span className="section-label">/ certifications</span>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle mx-auto">
            Completed courses from globally recognised platforms.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="card p-6 hover:border-accent/20 hover:bg-accent/5 transition-all duration-300 flex flex-col gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Award size={18} className="text-accent" />
              </div>

              <div>
                <h3 className="text-white font-semibold text-sm leading-snug mb-1">
                  {cert.title}
                </h3>
                <p className="text-white/50 text-xs">{cert.issuer}</p>
                <span className="inline-block mt-2 px-2 py-0.5 bg-surface-3 text-white/40 text-xs rounded font-mono">
                  {cert.platform}
                </span>
              </div>

              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-accent text-xs hover:underline mt-auto font-mono"
              >
                View Credential
                <ExternalLink size={11} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
