import React, { useState } from 'react'

function userId() {
  return Math.random().toString(36).slice(2, 9)
}

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const trimmed = title.trim()
    if (!trimmed) return setError('Title is required')
    if (trimmed.length > 120) return setError('Title cannot exceed 120 characters')
    if (description.length > 1000) return setError('Description too long')

    const task = {
      id: userId(),
      title: trimmed,
      description: description.trim() || '',
      completed: false,
      createdAt: Date.now()
    }
onAdd(task)
    setTitle('')
    setDescription('')
    setError('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <label className="sr-only" htmlFor="new-task">Add a new task</label>
      <div className="flex items-center gap-3">
        <input
          id="new-task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new task"
          className="flex-1 border rounded px-3 py-2 text-sm"
        />
        <button type="submit" className="px-3 py-2 bg-yellow-400 rounded text-sm font-medium">Add</button>
      </div>
      {error && <div role="alert" className="text-sm text-red-600">{error}</div>}
    </form>
  )
}