import { PageTransition } from '../components/ui/AnimatedSection'
import SectionHeading from '../components/ui/SectionHeading'
import Timeline from '../components/journey/Timeline'
import CertCard from '../components/journey/CertCard'
import timelineData from '../data/timeline.json'
import certifications from '../data/certifications.json'

export default function JourneyPage() {
  const sortedTimeline = [...timelineData].sort((a, b) => 
    new Date(b.startDate) - new Date(a.startDate)
  )

  return (
    <PageTransition>
      {/* Timeline Section */}
      <section className="py-section">
        <div className="section-container">
          <SectionHeading
            label="My Journey"
            title="Experience & Growth"
            subtitle="A chronological timeline of my education, work experience, and key achievements that shaped who I am today."
          />

          <Timeline items={sortedTimeline} />
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-section bg-bg-secondary">
        <div className="section-container">
          <SectionHeading
            label="Credentials"
            title="Certifications & Awards"
            subtitle="Professional certifications and recognitions that validate my skills and commitment to continuous learning."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <CertCard key={cert.id} cert={cert} index={index} />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
