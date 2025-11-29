interface TodoStatsProps {
  total: number
  completed: number
}

export default function TodoStats({ total, completed }: TodoStatsProps) {
  const remaining = total - completed
  const progress = total === 0 ? 0 : Math.round((completed / total) * 100)

  return (
    <div className="grid grid-cols-3 gap-4 sm:gap-6">
      <div className="px-5 py-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-smooth">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-3">Total</p>
        <p className="text-4xl font-bold text-foreground">{total}</p>
      </div>
      <div className="px-5 py-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-smooth">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-3">Completed</p>
        <div className="flex items-baseline gap-2">
          <p className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">{completed}</p>
          <p className="text-sm text-muted-foreground">{progress}%</p>
        </div>
      </div>
      <div className="px-5 py-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-smooth">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-3">Remaining</p>
        <p className="text-4xl font-bold text-accent">{remaining}</p>
      </div>
    </div>
  )
}
