import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Badge from '../ui/Badge'

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link
        to={`/projects/${project.id}`}
        className="group block rounded-2xl bg-bg-card border border-border overflow-hidden hover:border-accent/30 transition-all duration-500 hover:shadow-card-hover h-full"
      >
        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/20 to-transparent" />
          
          {/* Status overlay */}
          <div className="absolute top-4 right-4">
            <Badge variant={project.status === 'Completed' ? 'success' : 'warning'}>
              {project.status}
            </Badge>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
              <ArrowUpRight className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-7">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="accent">{project.category}</Badge>
            <span className="text-text-muted text-xs">{project.context}</span>
          </div>

          <h3 className="font-display text-xl font-bold text-text-primary mb-3 group-hover:text-accent-light transition-colors">
            {project.title}
          </h3>

          <p className="text-text-secondary text-sm leading-relaxed mb-5 line-clamp-2">
            {project.shortSummary}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md bg-bg-tertiary text-text-muted text-xs font-mono"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="px-2 py-0.5 rounded-md bg-bg-tertiary text-text-muted text-xs">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
