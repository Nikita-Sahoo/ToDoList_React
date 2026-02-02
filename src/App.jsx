import React, { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import "./App.css";

function App() {
  // State for todos - starts with 5 default todos
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: true, createdAt: new Date('2023-10-01'), description: 'Learn React fundamentals and components', priority: 'high' },
    { id: 2, text: 'Build a To-Do App', completed: true, createdAt: new Date('2023-10-02'), description: 'Create a functional to-do application', priority: 'medium' },
    { id: 3, text: 'Style the application', completed: false, createdAt: new Date('2023-10-03'), description: 'Add CSS styling and make it responsive', priority: 'medium' },
    { id: 4, text: 'Add edit functionality', completed: false, createdAt: new Date('2023-10-04'), description: 'Implement task editing feature', priority: 'low' },
    { id: 5, text: 'Test the application', completed: false, createdAt: new Date('2023-10-05'), description: 'Test all features and fix bugs', priority: 'high' },
  ]);

  // State for new todo input
  const [newTodo, setNewTodo] = useState('');

  // Add new todo function
  const addTodo = () => {
    if (newTodo.trim() === '') {
      alert('Please enter a task!');
      return;
    }
    
    const newTodoItem = {
      id: Date.now(), // Generate unique ID using timestamp
      text: newTodo.trim(),
      completed: false,
      createdAt: new Date(),
      description: 'New task added by user',
      priority: 'medium'
    };
    
    // Add new todo to the beginning of the array
    setTodos([newTodoItem, ...todos]);
    
    // Clear the input field
    setNewTodo('');
    
    // Show success message
    alert(`Task added: "${newTodo.trim()}"`);
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  // Calculate completed and pending todos
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const pendingTodos = todos.length - completedTodos;

  return (
    <div className="app-container">
      <Header />
      
      <main className="main-content">
        <div className="container">
          {/* Stats Section */}
          <div className="stats-container">
            <div className="stat-card stat-completed">
              <div className="stat-content">
                <h3 className="stat-number">{completedTodos}</h3>
                <p className="stat-label">Completed</p>
              </div>
            </div>
            <div className="stat-card stat-pending">
              <div className="stat-content">
                <h3 className="stat-number">{pendingTodos}</h3>
                <p className="stat-label">Pending</p>
              </div>
            </div>
          </div>

          {/* Add Todo Form - DYNAMIC */}
          <div className="add-todo-card">
            <div className="card-header">
              <h2>Add New Task</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Enter a new task..."
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                  <button 
                    className="add-button" 
                    onClick={addTodo}
                    disabled={!newTodo.trim()}
                  >
                    <span className="plus-icon">+</span>
                    Add Task
                  </button>
                </div>
                
                <div className="counter">
                  <small>Tasks added today: {todos.filter(todo => {
                    const today = new Date();
                    const todoDate = new Date(todo.createdAt);
                    return todoDate.toDateString() === today.toDateString();
                  }).length}</small>
                </div>
              </div>
            </div>
          </div>

          {/* ToDoList Component */}
          <ToDoList todos={todos} />

          

        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p className="footer-text">To-Do List App • Only Add Task is Functional</p>
          <p className="footer-subtext">Edit, Delete, and Complete features are static</p>
        </div>
      </footer>
    </div>
  );
};

export default App;