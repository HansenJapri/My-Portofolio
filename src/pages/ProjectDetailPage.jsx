import { useParams, Navigate } from 'react-router-dom'
import { PageTransition } from '../components/ui/AnimatedSection'
import CaseStudyHeader from '../components/case-study/CaseStudyHeader'
import CaseStudyBody from '../components/case-study/CaseStudyBody'

import projects from '../data/projects.json'

export default function ProjectDetailPage() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  return (
    <PageTransition>
      <CaseStudyHeader project={project} />
      <CaseStudyBody project={project} />

    </PageTransition>
  )
}
