"use client"

import dynamic from "next/dynamic"

const TodoApp = dynamic(() => import("@/components/todo-app"), { ssr: false })

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <TodoApp />
    </main>
  )
}
