"use client"

import type React from "react"
import { useState } from "react"
import { Plus } from "lucide-react"

interface TodoFormProps {
  onAdd: (text: string, priority?: string, milestone?: string, dueDate?: string) => void
}

export default function TodoForm({ onAdd }: TodoFormProps) {
  const [input, setInput] = useState("")
  const [priority, setPriority] = useState("medium")
  const [milestone, setMilestone] = useState("")
  const [dueDate, setDueDate] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      onAdd(input.trim(), priority, milestone, dueDate)
      setInput("")
      setPriority("medium")
      setMilestone("")
      setDueDate("")
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-gradient-to-br from-card to-background border border-border rounded-xl p-6 shadow-lg"
    >
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What's your next task?"
          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30 transition-smooth"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <div>
          <label className="text-xs font-semibold text-muted-foreground block mb-2 uppercase tracking-wider">
            Priority
          </label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground text-sm focus:border-primary focus:ring-2 focus:ring-primary/30 transition-smooth cursor-pointer"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div>
          <label className="text-xs font-semibold text-muted-foreground block mb-2 uppercase tracking-wider">
            Due Date
          </label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground text-sm focus:border-primary focus:ring-2 focus:ring-primary/30 transition-smooth"
          />
        </div>

        <div className="flex items-end">
          <button
            type="submit"
            disabled={!input.trim()}
            className="w-full px-4 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-lg  transition-smooth active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>
    </form>
  )
}
