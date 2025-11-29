"use client"

import TodoItem from "./todo-item"

interface Todo {
  id: string
  text: string
  completed: boolean
  priority?: string
  milestone?: string
}

interface TodoListProps {
  todos: Todo[]
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export default function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No tasks yet. Add one to get started!</p>
      </div>
    )
  }

  const activeTodos = todos.filter((t) => !t.completed)
  const completedTodos = todos.filter((t) => t.completed)

  return (
    <div className="space-y-6">
      {activeTodos.length > 0 && (
        <div className="space-y-2">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Active</h2>
          <div className="space-y-2">
            {activeTodos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
            ))}
          </div>
        </div>
      )}

      {completedTodos.length > 0 && (
        <div className="space-y-2">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Completed</h2>
          <div className="space-y-2">
            {completedTodos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
