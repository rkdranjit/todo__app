import React from 'react'

export default function TaskItem({ task, onClick, onToggle, onDelete, isSelected }) {
  return (
    <li className={`flex items-center justify-between py-3 px-2 ${isSelected ? 'bg-gray-100' : ''}`}>
      <div className="flex items-start gap-3">
        <input
          id={`checkbox-${task.id}`}
          type="checkbox"
          checked={task.completed}
          onChange={onToggle}
          aria-label={task.completed ? 'Mark as undone' : 'Mark as done'}
          className="mt-1"
        />
        <div onClick={onClick} className="cursor-pointer">
          <div className={`font-medium ${task.completed ? 'line-through text-gray-400' : ''}`}>{task.title}</div>
          {task.description && <div className="text-xs text-gray-500 truncate-2 mt-1">{task.description}</div>}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button onClick={(e)=>{e.stopPropagation(); onDelete()}} className="text-sm text-red-500">Delete</button>
      </div>
    </li>
      )
}