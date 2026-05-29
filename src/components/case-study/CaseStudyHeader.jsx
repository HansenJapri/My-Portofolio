import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Calendar, Users, User, Briefcase } from 'lucide-react'
import { Link } from 'react-router-dom'
import Badge from '../ui/Badge'

export default function CaseStudyHeader({ project }) {
  return (
    <div className="relative">
      {/* Hero Image */}
      <div className="relative h-[40vh] sm:h-[50vh] overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/60 to-bg-primary/20" />
      </div>

      <div className="section-container relative -mt-32 z-10 pb-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-light transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Title Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <Badge variant="accent">{project.category}</Badge>
            <Badge>{project.context}</Badge>
            <Badge variant={project.status === 'Completed' ? 'success' : 'warning'}>
              {project.status}
            </Badge>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            {project.title}
          </h1>

          <p className="text-text-secondary text-lg max-w-3xl leading-relaxed mb-10">
            {project.shortSummary}
          </p>
        </motion.div>

        {/* Meta Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-14"
        >
          <div className="p-5 rounded-xl bg-bg-card border border-border">
            <div className="flex items-center gap-2 text-text-muted text-xs mb-1">
              <Calendar className="w-3.5 h-3.5" />
              Date
            </div>
            <div className="text-text-primary text-sm font-medium">
              {new Date(project.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
            </div>
          </div>
          <div className="p-5 rounded-xl bg-bg-card border border-border">
            <div className="flex items-center gap-2 text-text-muted text-xs mb-1">
              <Users className="w-3.5 h-3.5" />
              Team
            </div>
            <div className="text-text-primary text-sm font-medium">
              {project.collaborationType}
            </div>
          </div>
          <div className="p-5 rounded-xl bg-bg-card border border-border">
            <div className="flex items-center gap-2 text-text-muted text-xs mb-1">
              <User className="w-3.5 h-3.5" />
              Role
            </div>
            <div className="text-text-primary text-sm font-medium">
              {project.role}
            </div>
          </div>
          <div className="p-5 rounded-xl bg-bg-card border border-border">
            <div className="flex items-center gap-2 text-text-muted text-xs mb-1">
              <Briefcase className="w-3.5 h-3.5" />
              Context
            </div>
            <div className="text-text-primary text-sm font-medium">
              {project.context}
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-4 mt-6"
        >
          {project.media.demoUrl && (
            <a
              href={project.media.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-bg text-white text-sm font-medium hover:shadow-glow hover:scale-105 transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </motion.div>
      </div>
    </div>
  )
}
