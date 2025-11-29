"use client"

import { useState } from "react"
import { LogOut } from "lucide-react"
import TodoForm from "@/components/todo-form"
import TodoList from "@/components/todo-list"
import ProgressBar from "@/components/progress-bar"

interface TodoAppProps {
  user?: { username: string; email: string }
  onLogout?: () => void
}

interface Todo {
  id: string
  text: string
  completed: boolean
  priority?: string
  milestone?: string
  dueDate?: string
}

export default function TodoApp({ user, onLogout }: TodoAppProps) {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (text: string, priority?: string, milestone?: string, dueDate?: string) => {
    setTodos([...todos, { id: Date.now().toString(), text, completed: false, priority, milestone, dueDate }])
  }

  const toggleTodo = (id: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const completedCount = todos.filter((t) => t.completed).length
  const progress = todos.length === 0 ? 0 : Math.round((completedCount / todos.length) * 100)

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
           <div>
             <h1 className="text-4xl font-bold text-foreground mb-1">FocusAPP</h1>
             {user && <p className="text-muted-foreground text-sm">Welcome, {user.username}</p>}
           </div>
           {user && onLogout && (
             <button
               onClick={onLogout}
               className="flex items-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 rounded-lg text-red-400 transition-smooth"
             >
               <LogOut className="w-4 h-4" />
               Logout
             </button>
           )}
         </div>

        <div className="mb-8">
          <ProgressBar progress={progress} />

          <div className="grid grid-cols-3 gap-3 mb-8 mt-6">
            <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-smooth">
              <p className="text-muted-foreground text-xs font-medium uppercase mb-2">Total</p>
              <p className="text-2xl font-bold text-foreground">{todos.length}</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 hover:border-accent/50 transition-smooth">
              <p className="text-muted-foreground text-xs font-medium uppercase mb-2">Active</p>
              <p className="text-2xl font-bold text-foreground">{todos.length - completedCount}</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 hover:border-green-500/50 transition-smooth">
              <p className="text-muted-foreground text-xs font-medium uppercase mb-2">Completed</p>
              <p className="text-2xl font-bold text-primary">{completedCount}</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <TodoForm onAdd={addTodo} />
          <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
        </div>
      </div>
    </div>
  )
}
