import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import personalData from '../../data/personal.json'
import Button from '../ui/Button'

export default function PersonalStory() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
      {/* Avatar Side */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="lg:col-span-2"
      >
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/20 to-accent-secondary/20 blur-2xl opacity-40" />
          
          <div className="relative rounded-2xl overflow-hidden border-2 border-border">
            <img
              src={personalData.avatar}
              alt={personalData.name}
              className="w-full aspect-[3/4] object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 to-transparent" />
          </div>

          {/* Floating card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="absolute -bottom-6 -right-6 glass p-4 rounded-xl border border-accent/20"
          >
            <div className="text-accent-light text-sm font-semibold">{personalData.stats.yearsExperience}+ Years</div>
            <div className="text-text-muted text-xs">building & launching products</div>
          </motion.div>
        </div>
      </motion.div>

      {/* Story Side */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="lg:col-span-3 space-y-8"
      >
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent-light text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-light animate-pulse" />
            About Me
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mt-5 mb-3">
            {personalData.name}
          </h2>
          <p className="text-accent-light text-lg font-medium">
            {personalData.subtitle}
          </p>
        </div>

        <div className="space-y-5">
          {personalData.bio.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="text-text-secondary text-sm leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Download CV Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Button
            variant="primary"
            size="md"
            icon={Download}
            href={personalData.resumeUrl}
            download="Hansen Japri CV Resume.pdf"
          >
            Download CV
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}
