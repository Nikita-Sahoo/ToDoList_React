import React from 'react';
import ToDoItem from './ToDoItem';
import './ToDoList.css';

function ToDoList({ todos }) {
  const completedCount = todos.filter(todo => todo.completed).length;
  const pendingCount = todos.length - completedCount;

  // Sort todos: newest first
  const sortedTodos = [...todos].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div className="todo-list-container">
      <div className="todo-card">
        <div className="todo-card-header">
          <div className="todo-header-content">
            <h2 className="todo-title">My Tasks ({todos.length})</h2>
          </div>
          {/* <span className="feature-badge">Add Only</span> */}
        </div>
        
        <div className="todo-list-items">
          {sortedTodos.map((todo, index) => (
            <ToDoItem 
              key={todo.id}
              task={todo}
              isFirst={index === 0}
              isLast={index === sortedTodos.length - 1}
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
          <p className="footer-note">New tasks appear at the top</p>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;