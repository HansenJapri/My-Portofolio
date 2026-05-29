import { motion } from 'framer-motion'
import { ArrowDown, Download, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import personalData from '../../data/personal.json'

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-7rem)] flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-secondary/15 rounded-full blur-[120px] animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-accent/5 to-accent-secondary/5 rounded-full blur-[100px]" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="section-container relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8"
          >
            <span className="text-text-primary">I craft </span>
            <span className="gradient-text">digital experiences</span>
            <br />
            <span className="text-text-primary">that </span>
            <span className="gradient-text">matter</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="max-w-2xl mx-auto mb-12 space-y-3"
          >
            <p className="text-accent-light text-base sm:text-lg font-semibold tracking-wide">
              {personalData.subtitle}
            </p>
            <p className="text-text-secondary text-lg sm:text-xl leading-relaxed">
              Transforming strategic business visions into scalable, high-market-value tech products.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <Link to="/projects">
              <Button variant="primary" size="lg" iconRight={ChevronRight}>
                View My Work
              </Button>
            </Link>
            <Button
              variant="secondary"
              size="lg"
              icon={Download}
              href={personalData.resumeUrl}
              download="Hansen Japri CV Resume.pdf"
            >
              Download Resume
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-24 flex flex-col items-center gap-3"
          >
            <span className="text-text-muted text-xs uppercase tracking-widest">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown className="w-5 h-5 text-text-muted" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
