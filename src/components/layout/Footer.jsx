import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, Instagram, ArrowUp, Download } from 'lucide-react'
import personalData from '../../data/personal.json'

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  instagram: Instagram,
}

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/journey', label: 'Journey' },
  { to: '/about', label: 'About' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-border bg-bg-secondary">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-16 right-16 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="section-container" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-14">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block font-display font-semibold text-lg text-text-primary hover:text-accent-light transition-colors duration-300">
              Hansen Japri
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              Crafting digital experiences that blend creativity with technical excellence. Let's build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-text-primary mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-text-secondary text-sm hover:text-accent-light transition-colors link-hover"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={personalData.resumeUrl}
                  download="Hansen Japri CV Resume.pdf"
                  className="inline-flex items-center gap-1.5 text-text-secondary text-sm hover:text-accent-light transition-colors link-hover"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download CV
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-display font-semibold text-text-primary mb-5">Connect</h3>
            <div className="flex gap-4">
              {Object.entries(personalData.socialLinks).map(([key, url]) => {
                const Icon = socialIcons[key]
                if (!Icon) return null
                const href = key === 'email' ? `mailto:${url}` : url
                return (
                  <a
                    key={key}
                    href={href}
                    target={key !== 'email' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-bg-tertiary border border-border flex items-center justify-center text-text-secondary hover:text-accent-light hover:border-accent/30 hover:bg-accent/10 transition-all duration-300"
                    aria-label={key}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-10 border-t border-border gap-4">
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} Hansen Japri
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-text-muted text-sm hover:text-accent-light transition-colors"
            aria-label="Scroll to top"
          >
            Back to top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  )
}
