import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Instagram, ArrowUpRight } from 'lucide-react'
import personalData from '../../data/personal.json'

const socialConfig = [
  { key: 'github', icon: Github, label: 'GitHub', color: 'hover:text-white hover:bg-[#333]' },
  { key: 'linkedin', icon: Linkedin, label: 'LinkedIn', color: 'hover:text-white hover:bg-[#0077B5]' },
  { key: 'email', icon: Mail, label: 'Email', color: 'hover:text-white hover:bg-accent' },
  { key: 'instagram', icon: Instagram, label: 'Instagram', color: 'hover:text-white hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737]' },
]

export default function SocialLinks() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {socialConfig.map((social, index) => {
        const url = personalData.socialLinks[social.key]
        if (!url) return null
        const href = social.key === 'email' ? `mailto:${url}` : url

        return (
          <motion.a
            key={social.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            href={href}
            target={social.key !== 'email' ? '_blank' : undefined}
            rel="noopener noreferrer"
            className={`group flex items-center gap-4 p-5 rounded-xl bg-bg-card border border-border transition-all duration-300 hover:border-transparent hover:shadow-card-hover ${social.color}`}
          >
            <div className="w-10 h-10 rounded-lg bg-bg-tertiary flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <social.icon className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="font-medium text-sm">{social.label}</div>
            </div>
            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        )
      })}
    </div>
  )
}
