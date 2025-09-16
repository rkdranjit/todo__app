# React To-Do App

A simple offline to-do app built with **React, JavaScript, and Tailwind CSS**.  
It supports adding, editing, deleting, marking tasks done/undone, and persists data in **localStorage**.


---

##  Features
    - Add tasks with title (required) and description (optional)
    - Edit tasks
    - Mark as done/undone
    - Delete tasks
    - Persist in `localStorage`
    - Accessible and responsive UI

---

###  Project Structure
    src/
    ├── components/
    │ ├── Sidebar.jsx
    │ ├── TaskList.jsx
    │ ├── TaskDetails.jsx
    │ └── TaskForm.jsx
    ├── tests/
    │ └── App.test.jsx
    ├── App.jsx
    ├── main.jsx
    └── index.css

---

####  Installation

    1. Clone this repository:
       git clone https://github.com/your-username/todo-app.git
       cd todo-app
    2. Install dependencies:
       npm install
    3.Start the development server:
        npm run dev
    4. Running Tests
        This project uses Jest and React Testing Library.
        Run tests with:
        npm test
   
##### Notes
    Uses a single localStorage key: todo.items.v1
    No backend required
    Styling with Tailwind CSS
![TODOApp](https://github.com/user-attachments/assets/3a406b56-15f9-49af-a9ce-0213a33dbece)
![Todo](https://github.com/user-attachments/assets/efe99150-5476-42c6-8d13-eca30018715b)

