import { motion } from 'framer-motion'
import { Target, Lightbulb, TrendingUp, Users, Wrench } from 'lucide-react'
import { AnimatedSection } from '../ui/AnimatedSection'

const sectionConfig = [
  {
    key: 'impact',
    icon: TrendingUp,
    title: 'Impact & Results',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
  {
    key: 'learning',
    icon: Lightbulb,
    title: 'Key Learnings',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
  },
]

export default function CaseStudyBody({ project }) {
  return (
    <div className="section-container pt-20 pb-32">
      <div className="max-w-4xl mx-auto space-y-14">
        {/* Tech Stack */}
        <AnimatedSection>
          <div className="p-10 rounded-2xl bg-bg-card border border-border">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Wrench className="w-5 h-5 text-accent-light" />
              </div>
              <h2 className="font-display text-xl font-bold text-text-primary">Tech Stack</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-xl bg-bg-tertiary border border-border text-text-primary text-sm font-mono hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Team Members */}
        {project.team && project.team.length > 0 && (
          <AnimatedSection delay={0.1}>
            <div className="p-10 rounded-2xl bg-bg-card border border-border">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-400" />
                </div>
                <h2 className="font-display text-xl font-bold text-text-primary">Team</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.team.map((member) => (
                  <div
                    key={member}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-bg-tertiary border border-border"
                  >
                    <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center text-white text-xs font-bold">
                      {member.charAt(0)}
                    </div>
                    <span className="text-text-primary text-sm">{member}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Impact & Learning Sections */}
        {sectionConfig.map((section, idx) => (
          <AnimatedSection key={section.key} delay={0.1 * (idx + 2)}>
            <div className={`p-10 rounded-2xl bg-bg-card border ${section.border}`}>
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-10 h-10 rounded-xl ${section.bg} flex items-center justify-center`}>
                  <section.icon className={`w-5 h-5 ${section.color}`} />
                </div>
                <h2 className="font-display text-xl font-bold text-text-primary">{section.title}</h2>
              </div>
              <p className="text-text-secondary leading-relaxed text-base">
                {project[section.key]}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  )
}
