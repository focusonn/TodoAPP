"use client"

import { Trash2, CheckCircle2, Circle } from "lucide-react"

interface TodoItemProps {
  todo: { id: string; text: string; completed: boolean; priority?: string; milestone?: string; dueDate?: string }
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  const priorityColors = {
    low: "bg-blue-500/15 text-blue-300 border border-blue-500/30",
    medium: "bg-yellow-500/15 text-yellow-300 border border-yellow-500/30",
    high: "bg-red-500/15 text-red-300 border border-red-500/30",
  }

  const getPriorityColor = (priority?: string) => {
    return priorityColors[priority as keyof typeof priorityColors] || priorityColors.medium
  }

  return (
    <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-lg transition-smooth group">
      <button
        onClick={() => onToggle(todo.id)}
        className="flex-shrink-0 mt-1 text-muted-foreground hover:text-primary transition-smooth"
      >
        {todo.completed ? <CheckCircle2 className="w-5 h-5 text-primary" /> : <Circle className="w-5 h-5" />}
      </button>

      <div className="flex-1 min-w-0">
        <p
          className={`text-sm font-medium transition-smooth ${
            todo.completed ? "text-muted-foreground line-through" : "text-foreground"
          }`}
        >
          {todo.text}
        </p>

        {(todo.priority || todo.milestone || todo.dueDate) && (
          <div className="flex gap-2 mt-3 flex-wrap">
            {todo.priority && (
              <span className={`text-xs font-medium px-2.5 py-1 rounded-md ${getPriorityColor(todo.priority)}`}>
                {todo.priority.charAt(0).toUpperCase() + todo.priority.slice(1)}
              </span>
            )}
            {todo.milestone && (
              <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-accent/20 text-accent border border-accent/30">
                {todo.milestone}
              </span>
            )}
            {todo.dueDate && (
              <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-blue-500/15 text-blue-300 border border-blue-500/30">
                Due: {new Date(todo.dueDate).toLocaleDateString()}
              </span>
            )}
          </div>
        )}
      </div>

      <button
        onClick={() => onDelete(todo.id)}
        className="flex-shrink-0 p-2 text-muted-foreground hover:text-red-400 hover:bg-red-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-smooth"
        aria-label="Delete task"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  )
}
