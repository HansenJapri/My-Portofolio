import { useState, useMemo } from 'react'
import { PageTransition } from '../components/ui/AnimatedSection'
import SectionHeading from '../components/ui/SectionHeading'
import FilterBar from '../components/projects/FilterBar'
import ProjectGrid from '../components/projects/ProjectGrid'
import projects from '../data/projects.json'

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter(p => p.category === activeFilter)
  }, [activeFilter])

  return (
    <PageTransition>
      <section className="py-section">
        <div className="section-container">
          <SectionHeading
            label="Portfolio"
            title="All Projects"
            subtitle="Explore my complete collection of work — from web applications and mobile apps to UX research and design systems."
          />

          <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />
          
          <ProjectGrid projects={filteredProjects} />

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-text-muted text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  )
}
