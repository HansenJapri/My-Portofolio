import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail } from 'lucide-react'
import Button from '../ui/Button'

export default function CTASection() {
  return (
    <section className="py-section relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 gradient-bg opacity-90" />
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />

          {/* Floating orbs */}
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/10 blur-2xl animate-float" />
          <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl animate-float" style={{ animationDelay: '3s' }} />

          <div className="relative z-10 px-8 py-20 sm:px-16 sm:py-24 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Let's Build Something
              <br />
              <span className="text-white/80">Amazing Together</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-white/70 text-lg max-w-xl mx-auto mb-10"
            >
              Whether you have a project idea, a collaboration proposal, or just want to say hello — I'd love to hear from you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-5"
            >
              <Link to="/about">
                <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-bg-primary font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <Mail className="w-5 h-5" />
                  Get In Touch
                </button>
              </Link>
              <Link to="/projects">
                <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition-all duration-300">
                  Explore Projects
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
