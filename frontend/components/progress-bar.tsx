interface ProgressBarProps {
  progress: number
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="space-y-3 bg-card border border-border rounded-xl p-4">
      <div className="flex justify-between items-center">
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Progress</p>
        <p className="text-lg font-bold text-primary">{progress}%</p>
      </div>
      <div className="w-full h-3 bg-background border border-border rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-out rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
