import { PageTransition } from '../components/ui/AnimatedSection'
import HeroSection from '../components/home/HeroSection'
import QuickStats from '../components/home/QuickStats'
import FeaturedProjects from '../components/home/FeaturedProjects'
import CTASection from '../components/home/CTASection'

export default function HomePage() {
  return (
    <PageTransition>
      <HeroSection />
      <QuickStats />
      <FeaturedProjects />
      <CTASection />
    </PageTransition>
  )
}
