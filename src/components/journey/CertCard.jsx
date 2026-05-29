import { motion } from 'framer-motion'
import { ExternalLink, Award } from 'lucide-react'

export default function CertCard({ cert, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group p-8 rounded-2xl bg-bg-card border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-card-hover"
    >
      <div className="flex items-start gap-5">
        {/* Badge/Icon */}
        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
          <Award className="w-7 h-7 text-accent-light" />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-display text-base font-bold text-text-primary mb-2 group-hover:text-accent-light transition-colors">
            {cert.name}
          </h3>
          <p className="text-text-secondary text-sm mb-2">
            {cert.issuer}
          </p>
          <p className="text-text-muted text-xs font-mono mb-4">
            {cert.date}
          </p>

          {cert.verificationUrl && (
            <a
              href={cert.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-accent-light text-xs font-medium hover:text-accent transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              View Certificate
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
