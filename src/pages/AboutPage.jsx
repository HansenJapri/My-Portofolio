import { PageTransition } from '../components/ui/AnimatedSection'
import SectionHeading from '../components/ui/SectionHeading'
import PersonalStory from '../components/about/PersonalStory'
import SkillsSection from '../components/about/SkillsSection'
import ContactForm from '../components/about/ContactForm'
import SocialLinks from '../components/about/SocialLinks'

export default function AboutPage() {
  return (
    <PageTransition>
      {/* Personal Story */}
      <section className="py-section">
        <div className="section-container">
          <PersonalStory />
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Contact Section */}
      <section className="py-section">
        <div className="section-container">
          <SectionHeading
            label="Get In Touch"
            title="Let's Connect"
            subtitle="Have a project idea, a question, or just want to say hello? I'd love to hear from you."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Form */}
            <div>
              <h3 className="font-display text-xl font-bold text-text-primary mb-8">
                Send a Message
              </h3>
              <ContactForm />
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-display text-xl font-bold text-text-primary mb-8">
                Find Me Online
              </h3>
              <SocialLinks />
              
              {/* Additional Info */}
              <div className="mt-10 p-8 rounded-2xl glass border border-border">
                <h4 className="font-display font-semibold text-text-primary mb-3">
                  Prefer a quick chat?
                </h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Feel free to reach out through any social platform. I typically respond within 24 hours and am always open to discussing new projects, creative ideas, or collaboration opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
