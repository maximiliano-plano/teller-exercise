const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let tasks = [];
let nextId = 1;

// GET /tasks - Retrieve all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// POST /tasks - Create a new task
app.post('/tasks', (req, res) => {
  const { title, completed = false } = req.body;
  const newTask = { id: nextId++, title, completed };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT /tasks/:id - Update an existing task by ID
app.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  const task = tasks.find(task => task.id === parseInt(id));

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  task.title = title !== undefined ? title : task.title;
  task.completed = completed !== undefined ? completed : task.completed;

  res.json(task);
});

// DELETE /tasks/:id - Delete a task by ID
app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const taskIndex = tasks.findIndex(task => task.id === parseInt(id));

  if (taskIndex === -1) {
    return res.status(404).json({ message: 'Task not found' });
  }

  tasks.splice(taskIndex, 1);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Task manager API is running at http://localhost:${port}`);
});
