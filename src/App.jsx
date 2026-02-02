import React, { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: true, createdAt: new Date('2023-10-01') },
    { id: 2, text: 'Build a To-Do App', completed: true, createdAt: new Date('2023-10-02') },
    { id: 3, text: 'Style the application', completed: false, createdAt: new Date('2023-10-03') },
    { id: 4, text: 'Add edit functionality', completed: false, createdAt: new Date('2023-10-04') },
    { id: 5, text: 'Test the application', completed: false, createdAt: new Date('2023-10-05') },
  ]);

  const [newTodo, setNewTodo] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  // Add new todo
  const addTodo = () => {
    if (newTodo.trim() === '') return;
    
    const newTodoItem = {
      id: Date.now(),
      text: newTodo.trim(),
      completed: false,
      createdAt: new Date(),
      description: 'No description provided',
      priority: 'medium'
    };
    
    setTodos([...todos, newTodoItem]);
    setNewTodo('');
  };

  // Delete todo
  const deleteTodo = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTodos(todos.filter(todo => todo.id !== id));
    }
  };

  // Toggle todo completion
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Start editing todo
  const startEdit = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  // Save edited todo
  const saveEdit = (id) => {
    if (editText.trim() === '') {
      alert('Task cannot be empty!');
      return;
    }
    
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: editText.trim() } : todo
    ));
    setEditingId(null);
    setEditText('');
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingId(null);
    setEditText('');
  };

  // Handle Enter key in input
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  // Handle Enter key in edit input
  const handleEditKeyPress = (e, id) => {
    if (e.key === 'Enter') {
      saveEdit(id);
    } else if (e.key === 'Escape') {
      cancelEdit();
    }
  };

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

          {/* Add Todo Form */}
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
          <ToDoList 
            todos={todos}
            onDelete={deleteTodo}
            onToggle={toggleTodo}
            onStartEdit={startEdit}
            onSaveEdit={saveEdit}
            onCancelEdit={cancelEdit}
            editingId={editingId}
            editText={editText}
            setEditText={setEditText}
            onEditKeyPress={handleEditKeyPress}
          />
        </div>
      </main>
      <footer className="footer">
        <div className="container">
          <p className="footer-text"> To-Do List App • React State Management</p>
          <p className="footer-subtext">Add, Edit, Delete, and Mark tasks as complete</p>
        </div>
      </footer>
    </div>
  );
};

export default App;