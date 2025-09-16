import React from 'react'
import TaskDetails from './TaskDetails'


export default function TaskPanel({ task, onSave, onDelete }) {
return (
<aside className="col-span-3 bg-gray-300 rounded-lg p-6 shadow-sm h-[70vh]">
<h2 className="font-bold text-lg mb-4">Task</h2>
{task ? (
<TaskDetails task={task} onSave={onSave} onDelete={onDelete} />
) : (
<div className="text-gray-500">Select a task to view or edit details.</div>
)}
</aside>
)
}