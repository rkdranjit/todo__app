import React, { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import TaskPanel from './components/TaskPanel'
import { loadTasks, saveTasks } from './utils/storage'


function App() {
const [tasks, setTasks] = useState([])
const [selectedId, setSelectedId] = useState(null)


useEffect(() => {
const saved = loadTasks()
setTasks(saved.sort((a, b) => b.createdAt - a.createdAt))
}, [])


useEffect(() => {
saveTasks(tasks)
}, [tasks])


function addTask(task) {
setTasks(prev => [task, ...prev])
setSelectedId(task.id)
}
function updateTask(updated) {
setTasks(prev => prev.map(t => (t.id === updated.id ? updated : t)).sort((a,b)=>b.createdAt - a.createdAt))
}


function deleteTask(id) {
setTasks(prev => prev.filter(t => t.id !== id))
if (selectedId === id) setSelectedId(null)
}


function toggleComplete(id) {
setTasks(prev => prev.map(t => t.id === id ? {...t, completed: !t.completed} : t))
}


const selected = tasks.find(t => t.id === selectedId) || null

return (
<div className="min-h-screen bg-gray-50 text-gray-900">
<div className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-12 gap-6">
{/* Left sidebar */}
<Sidebar />


{/* Center list */}
<main className="col-span-6 bg-gray-200 rounded-lg p-6 shadow-sm h-[70vh] overflow-y-auto">
<div className="flex items-center justify-between mb-4">
<h1 className="text-3xl font-extrabold">Today</h1>
</div>


<TaskForm onAdd={addTask} />


<div className="mt-4">
<TaskList
tasks={tasks}
onSelect={setSelectedId}
onToggle={toggleComplete}
onDelete={deleteTask}
onEdit={(task) => updateTask(task)}
selectedId={selectedId}
/>
{tasks.length === 0 && (
<p className="text-center text-gray-500 py-8">No tasks yet. Add your first task above.</p>
)}
</div>
</main>


{/* Right task panel */}
<TaskPanel task={selected} onSave={updateTask} onDelete={deleteTask} />
</div>
</div>
)
}


export default App





















