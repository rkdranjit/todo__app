export default function Sidebar() {
return (
<aside className="col-span-3 bg-gray-300 rounded-lg p-4 shadow-sm h-[70vh] flex flex-col">
<h2 className="font-bold text-lg mb-4">Menu</h2>
<input
aria-label="Search tasks"
placeholder="Search"
className="w-full border rounded px-3 py-2 text-sm"
/>


<nav className="mt-6 space-y-2 text-sm text-gray-600">
<div>Upcoming</div>
<div className="font-semibold">Today</div>
<div>Calendar</div>
<div>Sticky Wall</div>
</nav>


<div className="mt-auto pt-6 text-xs text-gray-500 flex flex-col space-y-1 gap-3">
  <span>Settings</span>
  <span>Sign out</span>
</div>


</aside>
)
}