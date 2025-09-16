// File: src/components/TaskDetails.jsx
import React, { useEffect, useState } from 'react'

export default function TaskDetails({ task, onSave, onDelete }) {
  const [title, setTitle] = useState(task?.title || '')
  const [description, setDescription] = useState(task?.description || '')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  // Sync local state whenever the task prop changes
  useEffect(() => {
    setTitle(task?.title || '')
    setDescription(task?.description || '')
    setError('')
  }, [task])

  if (!task) {
    return <div className="text-gray-500">Select a task to view or edit details.</div>
  }

  function handleSave() {
    setError('')
    const trimmed = title.trim()
    if (!trimmed) return setError('Title is required')
    if (trimmed.length > 120) return setError('Title too long')
    if (description.length > 1000) return setError('Description too long')

    setSaving(true)
    onSave({ ...task, title: trimmed, description: description.trim() })
    setSaving(false)
  }

  function handleDelete() {
    if (window.confirm('Delete this task?')) onDelete(task.id)
  }

  return (
    <div className="flex flex-col h-full">
      <label className="text-xs text-gray-600">Title</label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border rounded px-3 py-2 mb-4"
      />

      <label className="text-xs text-gray-600">Description</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={8}
        className="border rounded px-3 py-2 mb-4 text-sm"
      />

      {error && (
        <div role="alert" className="text-sm text-red-600 mb-2">
          {error}
        </div>
      )}

      <div className="mt-auto flex items-center justify-between">
        <button onClick={handleDelete} className="text-sm text-red-500">
          Delete
        </button>
        <button
          onClick={handleSave}
          disabled={saving}
          className="px-3 py-2 bg-yellow-400 rounded text-sm font-medium"
        >
          Save Changes
        </button>
      </div>
    </div>
  )
}
