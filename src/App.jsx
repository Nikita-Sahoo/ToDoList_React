import React from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import { useState } from 'react';
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: true, createdAt: new Date('2023-10-01') },
    { id: 2, text: 'Build a To-Do App', completed: true, createdAt: new Date('2023-10-02') },
    { id: 3, text: 'Style the application', completed: false, createdAt: new Date('2023-10-03') },
    { id: 4, text: 'Add edit functionality', completed: false, createdAt: new Date('2023-10-04') },
    { id: 5, text: 'Test the application', completed: false, createdAt: new Date('2023-10-05') },
  ]);

  // const [newTodo, setNewTodo] = useState('');


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
                    placeholder="Enter a new task..."/>
                  <button className="add-button" >
                    <span className="plus-icon">+</span>
                    Add Task
                  </button>
                </div>
                <p className="form-hint">Add Task Here.</p>
              </div>
            </div>
          </div>

          {/* ToDoList Component */}
          <ToDoList />

        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p className="footer-text">Static To-Do List App • Pure CSS • All Components Separate</p>
          <p className="footer-subtext">Header, ToDoList, and ToDoItem are separate components with custom CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default App;