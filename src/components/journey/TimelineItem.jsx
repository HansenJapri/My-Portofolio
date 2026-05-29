import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Trophy } from 'lucide-react'

const typeConfig = {
  education: {
    icon: GraduationCap,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    dotColor: 'bg-blue-400',
  },
  work: {
    icon: Briefcase,
    color: 'text-accent-light',
    bg: 'bg-accent/10',
    border: 'border-accent/30',
    dotColor: 'bg-accent-light',
  },
  achievement: {
    icon: Trophy,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30',
    dotColor: 'bg-amber-400',
  },
}

export default function TimelineItem({ item, index, isLeft }) {
  const config = typeConfig[item.type] || typeConfig.work

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex items-start gap-8 md:gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Dot */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
        <div className={`w-8 h-8 rounded-full ${config.bg} border-2 ${config.border} flex items-center justify-center`}>
          <div className={`w-3 h-3 rounded-full ${config.dotColor}`} />
        </div>
      </div>

      {/* Content */}
      <div className={`ml-16 md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-16' : 'md:pl-16'}`}>
        <div className={`group p-8 rounded-2xl bg-bg-card border border-border hover:${config.border} transition-all duration-500 hover:shadow-card-hover`}>
          {/* Type Badge */}
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-8 h-8 rounded-lg ${config.bg} flex items-center justify-center`}>
              <config.icon className={`w-4 h-4 ${config.color}`} />
            </div>
            <span className={`text-xs font-semibold uppercase tracking-wider ${config.color}`}>
              {item.type}
            </span>
          </div>

          {/* Date */}
          <div className="text-text-muted text-xs font-mono mb-3">
            {item.startDate} — {item.endDate}
          </div>

          {/* Title & Org */}
          <h3 className="font-display text-lg font-bold text-text-primary mb-2">
            {item.title}
          </h3>
          <p className="text-accent-light text-sm font-medium mb-4">
            {item.organization}
          </p>

          {/* Description */}
          <p className="text-text-secondary text-sm leading-relaxed mb-5">
            {item.description}
          </p>

          {/* Highlights */}
          {item.highlights && item.highlights.length > 0 && (
            <div className="flex flex-wrap gap-2.5">
              {item.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium ${config.bg} ${config.color} border ${config.border}`}
                >
                  {highlight}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
