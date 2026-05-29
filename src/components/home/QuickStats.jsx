import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FolderGit2, Award, Calendar, Code2 } from 'lucide-react'
import personalData from '../../data/personal.json'

function useCountUp(target, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!startOnView) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [hasStarted, startOnView])

  useEffect(() => {
    if (!hasStarted) return
    let start = 0
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [hasStarted, target, duration])

  return { count, ref }
}

const stats = [
  {
    icon: FolderGit2,
    value: personalData.stats.projectCount,
    suffix: '+',
    label: 'Projects Completed',
    color: 'text-accent-light',
    bg: 'bg-accent/10',
  },
  {
    icon: Calendar,
    value: personalData.stats.yearsExperience,
    suffix: '+',
    label: 'Years Experience',
    color: 'text-accent-secondary-light',
    bg: 'bg-accent-secondary/10',
  },
  {
    icon: Award,
    value: personalData.stats.certifications,
    suffix: '',
    label: 'Certifications',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
  },
  {
    icon: Code2,
    value: personalData.stats.techMastered,
    suffix: '+',
    label: 'Technologies Mastered',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
]

export default function QuickStats() {
  return (
    <section className="py-section relative">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
          {stats.map((stat, index) => {
            const { count, ref } = useCountUp(stat.value)
            return (
              <motion.div
                key={stat.label}
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative p-8 rounded-2xl bg-bg-card border border-border hover:border-accent/20 transition-all duration-500 hover:shadow-card-hover"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent/5 to-transparent" />

                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center mb-5`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className={`text-3xl lg:text-4xl font-display font-bold ${stat.color} mb-2`}>
                    {count}{stat.suffix}
                  </div>
                  <div className="text-text-secondary text-sm">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
