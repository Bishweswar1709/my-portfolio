import { useState, type FormEvent, type ChangeEvent } from 'react'
import { Mail, Phone, Github, Linkedin, Send, CheckCircle } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { personal, socials } from '../data/portfolioData'
import emailjs from '@emailjs/browser'

interface FormState {
  name: string
  email: string
  message: string
}

const CONTACT_LINKS = [
  {
    icon: <Mail size={16} />,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: <Phone size={16} />,
    label: 'Phone',
    value: personal.phone,
    href: `tel:${personal.phone}`,
  },
]

export default function ContactSection() {
  const [ref, inView] = useInView<HTMLDivElement>()
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Enter a valid email address'
    if (!form.message.trim()) newErrors.message = 'Message is required'
    else if (form.message.trim().length < 10)
      newErrors.message = 'Message should be at least 10 characters'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
  e.preventDefault()
  if (!validate()) return

  try {
    await emailjs.send(
      'service_bj6ndg8',    // ← your service ID
      'template_c1p1ei6',   // ← from Step 1 above
      {
        name: form.name,      // matches {{name}} in template
        email: form.email,    // matches {{email}} in template
        message: form.message // matches {{message}} in template
      },
      'mHzlsCp92CFJslKwS'     // ← from Step 2 above
    )
    setSubmitted(true)
    setForm({ name: '', email: '', message: '' })
  } catch {
    alert('Failed to send. Please email me directly.')
  }
}

  const githubUrl = socials.find((s) => s.icon === 'github')?.url ?? '#'
  const linkedinUrl = socials.find((s) => s.icon === 'linkedin')?.url ?? '#'

  return (
    <section id="contact" className="section-padding border-t border-surface-border">
      <div
        ref={ref}
        className={`section-container transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-14">
          <span className="section-label">/ contact</span>
          <h2 className="section-title">Let's Build Something Great</h2>
          <p className="section-subtitle mx-auto">
            I'm open to software engineering opportunities, internships, collaborations, and interesting projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: contact info */}
          <div className="space-y-6">
            {CONTACT_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="card p-5 flex items-center gap-4 hover:border-accent/20 hover:bg-accent/5 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors">
                  {link.icon}
                </div>
                <div>
                  <p className="text-white/40 text-xs font-mono">{link.label}</p>
                  <p className="text-white text-sm font-medium">{link.value}</p>
                </div>
              </a>
            ))}

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-5 flex items-center gap-4 hover:border-accent/20 hover:bg-accent/5 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors">
                <Linkedin size={16} />
              </div>
              <div>
                <p className="text-white/40 text-xs font-mono">LinkedIn</p>
                <p className="text-white text-sm font-medium">View Profile</p>
              </div>
            </a>

            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-5 flex items-center gap-4 hover:border-accent/20 hover:bg-accent/5 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors">
                <Github size={16} />
              </div>
              <div>
                <p className="text-white/40 text-xs font-mono">GitHub</p>
                <p className="text-white text-sm font-medium">View Repositories</p>
              </div>
            </a>
          </div>

          {/* Right: form */}
          <div className="card p-7">
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
                <CheckCircle size={40} className="text-green-400" />
                <h3 className="text-white font-semibold text-lg">Message sent!</h3>
                <p className="text-white/50 text-sm">I'll get back to you as soon as possible.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-ghost mt-2"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-white/60 text-sm mb-1.5">
                    Name <span className="text-accent">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    autoComplete="name"
                    className={`w-full bg-surface-3 border ${
                      errors.name ? 'border-red-500/60' : 'border-surface-border'
                    } rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-accent/50 transition-colors`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-white/60 text-sm mb-1.5">
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    className={`w-full bg-surface-3 border ${
                      errors.email ? 'border-red-500/60' : 'border-surface-border'
                    } rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-accent/50 transition-colors`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-white/60 text-sm mb-1.5">
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What would you like to discuss?"
                    className={`w-full bg-surface-3 border ${
                      errors.message ? 'border-red-500/60' : 'border-surface-border'
                    } rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-accent/50 transition-colors resize-none`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>
                  )}
                </div>

                <button type="submit" className="btn-primary w-full justify-center py-3">
                  <Send size={15} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
