# teller-exercise

Code Challenge
 Task:
 Create a simple RESTful API using Node.js and Express that allows users to manage a list of tasks. Each task should have the following properties:
  - id (number): Unique identifier for the task
  - title (string): Title of the task
  - completed (boolean): Indicates whether the task is completed

 The API should support the following endpoints:
  - GET /tasks - Retrieve all tasks
  - POST /tasks - Create a new task
  - PUT /tasks/:id - Update an existing task by ID
  - DELETE /tasks/:id - Delete a task by ID
 
 Requirements:
  - Use Node.js and Express for the backend.
  - Use in-memory storage (an array) for tasks (no database required).

Tests 
I used curl to manual test the endpoints:
 - `curl http://localhost:3000/tasks`
 - `curl -X POST http://localhost:3000/tasks -H "Content-Type: application/json" -d '{"title": "New Task", "completed": false}'`
 - `curl -X PUT http://localhost:3000/tasks/1 -H "Content-Type: application/json" -d '{"title": "Updated Task", "completed": true}'`
 - `curl -X DELETE http://localhost:3000/tasks/1`