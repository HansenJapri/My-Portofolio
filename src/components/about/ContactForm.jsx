import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, User, Mail, MessageSquare, FileText } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const inputClasses = "w-full px-5 py-3.5 rounded-xl bg-bg-card border border-border text-text-primary placeholder-text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300 text-sm"

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contact-name" className="flex items-center gap-2 text-text-secondary text-sm mb-2.5 font-medium">
            <User className="w-4 h-4" />
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="flex items-center gap-2 text-text-secondary text-sm mb-2.5 font-medium">
            <Mail className="w-4 h-4" />
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className="flex items-center gap-2 text-text-secondary text-sm mb-2.5 font-medium">
          <FileText className="w-4 h-4" />
          Subject
        </label>
        <input
          id="contact-subject"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Project Collaboration"
          required
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="flex items-center gap-2 text-text-secondary text-sm mb-2.5 font-medium">
          <MessageSquare className="w-4 h-4" />
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project or idea..."
          required
          rows={5}
          className={`${inputClasses} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm transition-all duration-300 ${
          isSubmitted
            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
            : 'gradient-bg text-white hover:shadow-glow hover:scale-[1.02]'
        } disabled:opacity-60 disabled:cursor-not-allowed`}
      >
        {isSubmitting ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : isSubmitted ? (
          '✓ Message Sent Successfully!'
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </button>
    </motion.form>
  )
}
