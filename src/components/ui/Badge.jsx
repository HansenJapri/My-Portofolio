export default function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-bg-tertiary text-text-secondary border-border',
    accent: 'bg-accent/10 text-accent-light border-accent/20',
    success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    warning: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  }

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium border ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}
