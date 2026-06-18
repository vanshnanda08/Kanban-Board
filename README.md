# Kanban-Board
# 📋 Kanban Board

A simple and interactive Kanban Board built using **HTML, CSS, and JavaScript**. This project helps users organize tasks into different stages of completion using drag-and-drop functionality.

## 🚀 Features

- Create new tasks with a title and description
- Drag and drop tasks between columns
- Delete tasks
- Task count for each column
- Data persistence using Local Storage
- Responsive and clean UI
- Modal for task creation

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Local Storage API

## 📂 Project Structure

```text
Kanban Board/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🎯 Functionality

### Task Management
- Add tasks through a modal form
- Each task contains:
  - Title
  - Description
  - Delete button

### Drag & Drop
Tasks can be moved between:
- 📝 To Do
- ⚡ In Progress
- ✅ Done

### Local Storage
All tasks are automatically saved in the browser's Local Storage, ensuring data remains available after refreshing or reopening the page.

## 💾 Data Structure

```javascript
{
  todo: [
    {
      title: "Task Title",
      description: "Task Description"
    }
  ],
  progress: [],
  done: []
}
```

## 📸 Preview

### Columns
- To Do
- In Progress
- Done

### Task Card
```text
-------------------
Task Title
Description
[ Delete ]
-------------------
```

## 🧠 Concepts Practiced

- DOM Manipulation
- Event Handling
- Drag and Drop API
- Local Storage
- Dynamic Element Creation
- Flexbox Layout
- Modular JavaScript Functions

## 🔧 Future Improvements

- Edit existing tasks
- Due dates and priorities
- Search and filter tasks
- Dark/Light theme toggle
- Drag-and-drop task ordering within columns
- User authentication and cloud storage

## ▶️ Getting Started

1. Clone the repository

```bash
git clone https://github.com/your-username/kanban-board.git
```

2. Open the project folder

```bash
cd kanban-board
```

3. Run the project

Open `index.html` in your browser.

## 📄 License

This project is open-source and available under the MIT License.

---

Made with ❤️ using HTML, CSS, and JavaScript.
