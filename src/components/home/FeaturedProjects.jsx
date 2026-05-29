import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Badge from '../ui/Badge'
import projects from '../../data/projects.json'

const featured = projects.filter(p => p.featured).slice(0, 3)

export default function FeaturedProjects() {
  return (
    <section className="py-section relative">
      <div className="section-container">
        <SectionHeading
          label="Featured Work"
          title="Projects I'm Proud Of"
          subtitle="A selection of my best work showcasing creative problem-solving and technical expertise."
        />

        <div className="space-y-10">
          {featured.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to={`/projects/${project.id}`}
                className="group block relative rounded-2xl bg-bg-card border border-border overflow-hidden hover:border-accent/30 transition-all duration-500 hover:shadow-glow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image */}
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-card/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-bg-card" />
                  </div>

                  {/* Content */}
                  <div className="relative p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-5">
                      <Badge variant="accent">{project.category}</Badge>
                      <Badge>{project.collaborationType}</Badge>
                    </div>

                    <h3 className="font-display text-2xl lg:text-3xl font-bold text-text-primary mb-4 group-hover:text-accent-light transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-text-secondary leading-relaxed mb-8">
                      {project.shortSummary}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg bg-bg-tertiary text-text-muted text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-accent-light font-medium text-sm">
                      View Case Study
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-accent/30 text-accent-light font-medium hover:bg-accent/10 hover:border-accent/50 transition-all duration-300"
          >
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
