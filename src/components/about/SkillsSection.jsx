import { motion } from 'framer-motion'
import { Monitor, Server, Wrench, Shield, Briefcase, Globe } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { AnimatedSection } from '../ui/AnimatedSection'
import skillsData from '../../data/skills.json'

const iconMap = {
  monitor: Monitor,
  server: Server,
  wrench: Wrench,
  shield: Shield,
  briefcase: Briefcase,
  globe: Globe,
}

const colorConfig = {
  accent: {
    icon: 'text-accent-light',
    iconBg: 'bg-accent/10',
    iconBorder: 'border-accent/20',
    badge: 'bg-accent/10 text-accent-light border-accent/20',
    glow: 'hover:border-accent/40 hover:shadow-[0_0_30px_rgba(108,92,231,0.1)]',
    dot: 'bg-accent-light',
  },
  emerald: {
    icon: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10',
    iconBorder: 'border-emerald-500/20',
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    glow: 'hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(52,211,153,0.08)]',
    dot: 'bg-emerald-400',
  },
  blue: {
    icon: 'text-blue-400',
    iconBg: 'bg-blue-500/10',
    iconBorder: 'border-blue-500/20',
    badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    glow: 'hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(96,165,250,0.08)]',
    dot: 'bg-blue-400',
  },
  red: {
    icon: 'text-red-400',
    iconBg: 'bg-red-500/10',
    iconBorder: 'border-red-500/20',
    badge: 'bg-red-500/10 text-red-400 border-red-500/20',
    glow: 'hover:border-red-500/40 hover:shadow-[0_0_30px_rgba(248,113,113,0.08)]',
    dot: 'bg-red-400',
  },
  amber: {
    icon: 'text-amber-400',
    iconBg: 'bg-amber-500/10',
    iconBorder: 'border-amber-500/20',
    badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    glow: 'hover:border-amber-500/40 hover:shadow-[0_0_30px_rgba(251,191,36,0.08)]',
    dot: 'bg-amber-400',
  },
  purple: {
    icon: 'text-purple-400',
    iconBg: 'bg-purple-500/10',
    iconBorder: 'border-purple-500/20',
    badge: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    glow: 'hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(192,132,252,0.08)]',
    dot: 'bg-purple-400',
  },
}

export default function SkillsSection() {
  return (
    <section className="py-section bg-bg-secondary">
      <div className="section-container">
        <SectionHeading
          label="Expertise"
          title="Skills & Technologies"
          subtitle="A curated overview of my technical toolkit, professional capabilities, and domain expertise built across projects, training, and real-world business experience."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillsData.map((group, groupIndex) => {
            const Icon = iconMap[group.icon] || Wrench
            const colors = colorConfig[group.color] || colorConfig.accent

            return (
              <AnimatedSection key={group.category} delay={groupIndex * 0.08}>
                <div
                  className={`group h-full p-8 rounded-2xl bg-bg-card border border-border transition-all duration-500 ${colors.glow}`}
                >
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-11 h-11 rounded-xl ${colors.iconBg} border ${colors.iconBorder} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-5 h-5 ${colors.icon}`} />
                    </div>
                    <h3 className={`font-display text-base font-bold text-text-primary group-hover:${colors.icon} transition-colors`}>
                      {group.category}
                    </h3>
                  </div>

                  {/* Divider */}
                  <div className={`h-px mb-6 bg-gradient-to-r from-transparent via-border to-transparent`} />

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2.5">
                    {group.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: groupIndex * 0.08 + skillIndex * 0.04, duration: 0.3 }}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all duration-300 hover:scale-105 cursor-default ${colors.badge}`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${colors.dot} opacity-70`} />
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>

        {/* Generative AI special note */}
        <AnimatedSection delay={0.5}>
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-accent/5 via-purple-500/5 to-accent-secondary/5 border border-accent/10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
              <span className="text-lg">🤖</span>
            </div>
            <div>
              <p className="text-text-primary text-sm font-semibold mb-1">Generative AI Practitioner</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Proficient in advanced prompt engineering techniques and experienced with AI image/video generation tools. Capable of leveraging AI to accelerate complex workflows and solve multi-step problems efficiently.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
