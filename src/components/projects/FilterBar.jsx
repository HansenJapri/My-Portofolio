import { motion } from 'framer-motion'

const categories = ['All', 'Web Dev', 'UI/UX', 'Mobile', 'Research']

export default function FilterBar({ activeFilter, onFilterChange }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap items-center justify-center gap-3 mb-16"
    >
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
            activeFilter === category
              ? 'text-white'
              : 'text-text-secondary hover:text-text-primary bg-bg-card border border-border hover:border-accent/20'
          }`}
        >
          {activeFilter === category && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 rounded-xl gradient-bg"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{category}</span>
        </button>
      ))}
    </motion.div>
  )
}
