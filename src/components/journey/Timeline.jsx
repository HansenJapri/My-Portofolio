import { motion } from 'framer-motion'
import TimelineItem from './TimelineItem'

export default function Timeline({ items }) {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent-secondary to-accent-light opacity-20" />

      <div className="space-y-16">
        {items.map((item, index) => (
          <TimelineItem key={item.id} item={item} index={index} isLeft={index % 2 === 0} />
        ))}
      </div>
    </div>
  )
}
