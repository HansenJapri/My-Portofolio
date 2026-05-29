import { motion } from 'framer-motion'

const variants = {
  primary: 'gradient-bg text-white hover:shadow-glow hover:scale-105',
  secondary: 'bg-bg-tertiary border border-border text-text-primary hover:border-accent/30 hover:bg-accent/10',
  outline: 'bg-transparent border border-accent/30 text-accent-light hover:bg-accent/10 hover:border-accent/50',
  ghost: 'bg-transparent text-text-secondary hover:text-text-primary hover:bg-bg-tertiary',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconRight: IconRight,
  className = '',
  href,
  download,
  ...props
}) {
  const baseClasses = `inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    <>
      {Icon && <Icon className="w-4 h-4" />}
      {children}
      {IconRight && <IconRight className="w-4 h-4" />}
    </>
  )

  if (href) {
    return (
      <motion.a
        whileTap={{ scale: 0.97 }}
        href={href}
        className={baseClasses}
        download={download}
        target={download ? undefined : '_blank'}
        rel="noopener noreferrer"
        {...props}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={baseClasses}
      {...props}
    >
      {content}
    </motion.button>
  )
}
