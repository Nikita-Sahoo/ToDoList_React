import React from 'react';
import ToDoItem from './ToDoItem';
import './ToDoList.css';

function ToDoList() {
  // Hard-coded todos data
  const todos = [
    { 
      id: 1, 
      text: 'Learn React', 
      completed: true, 
      createdAt: '2023-10-01',
      description: 'Learn React fundamentals and components',
      priority: 'high'
    },
    { 
      id: 2, 
      text: 'Build a To-Do App', 
      completed: true, 
      createdAt: '2023-10-02',
      description: 'Create a functional to-do application',
      priority: 'medium'
    },
    { 
      id: 3, 
      text: 'Style the application', 
      completed: false, 
      createdAt: '2023-10-03',
      description: 'Add CSS styling and make it responsive',
      priority: 'medium'
    },
    { 
      id: 4, 
      text: 'Add edit functionality', 
      completed: false, 
      createdAt: '2023-10-04',
      description: 'Implement task editing feature',
      priority: 'low'
    },
    { 
      id: 5, 
      text: 'Test the application', 
      completed: false, 
      createdAt: '2023-10-05',
      description: 'Test all features and fix bugs',
      priority: 'high'
    }
  ];

  const completedCount = todos.filter(todo => todo.completed).length;
  const pendingCount = todos.length - completedCount;

  return (
    <div className="todo-list-container">
      <div className="todo-card">
        <div className="todo-card-header">
          <div className="todo-header-content">
            <h2 className="todo-title">My Tasks ({todos.length})</h2>
            <p className="todo-subtitle">All tasks are here</p>
          </div>
          <span className="static-badge">Task List</span>
        </div>
        
        <div className="todo-list-items">
          {todos.map((todo, index) => (
            <ToDoItem 
              key={todo.id}
              task={todo}
              isFirst={index === 0}
              isLast={index === todos.length - 1}
            />
          ))}
        </div>
        
        <div className="todo-card-footer">
          <div className="footer-stats">
            <span className="stat-item">Total: {todos.length} tasks</span>
            <span className="stat-divider">•</span>
            <span className="stat-item">Completed: {completedCount}</span>
            <span className="stat-divider">•</span>
            <span className="stat-item">Pending: {pendingCount}</span>
          </div>
          <p className="footer-note">All the completed and pending tasks.</p>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;