import React from 'react'
import TaskItem from './TaskItem'

export default function TaskList({ tasks, onSelect, onToggle, onDelete, onEdit, selectedId }) {
  return (
    <ul className="divide-y">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onClick={() => onSelect(task.id)}
          onToggle={() => onToggle(task.id)}
          onDelete={() => onDelete(task.id)}
          onEdit={(t) => onEdit(t)}
          isSelected={selectedId === task.id}
        />
      ))}
    </ul>
  )
}