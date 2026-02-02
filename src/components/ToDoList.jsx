import React from 'react';
import ToDoItem from './ToDoItem';
import './ToDoList.css';

function ToDoList({ 
  todos, 
  onDelete, 
  onToggle, 
  onStartEdit, 
  onSaveEdit, 
  onCancelEdit,
  editingId,
  editText,
  setEditText,
  onEditKeyPress 
}) {
  const completedCount = todos.filter(todo => todo.completed).length;
  const pendingCount = todos.length - completedCount;

  if (todos.length === 0) {
    return (
      <div className="todo-list-container">
        <div className="todo-card">
          <div className="todo-card-header">
            <div className="todo-header-content">
              <h2 className="todo-title">No Tasks Yet</h2>
              <p className="todo-subtitle">Add your first task using the form above</p>
            </div>
          </div>
          <div className="empty-state">
            <div className="empty-icon">📝</div>
            <h3>Your to-do list is empty</h3>
            <p>Start by adding a new task above!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="todo-list-container">
      <div className="todo-card">
        <div className="todo-card-header">
          <div className="todo-header-content">
            <h2 className="todo-title">My Tasks ({todos.length})</h2>
            <p className="todo-subtitle">Click on tasks to manage them</p>
          </div>
          <span className="dynamic-badge">Active List</span>
        </div>
        
        <div className="todo-list-items">
          {todos.map((todo, index) => (
            <ToDoItem 
              key={todo.id}
              task={todo}
              isFirst={index === 0}
              isLast={index === todos.length - 1}
              onDelete={onDelete}
              onToggle={onToggle}
              onStartEdit={onStartEdit}
              onSaveEdit={onSaveEdit}
              onCancelEdit={onCancelEdit}
              editingId={editingId}
              editText={editText}
              setEditText={setEditText}
              onEditKeyPress={onEditKeyPress}
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
          <p className="footer-note">Double-click on task text to edit quickly</p>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;