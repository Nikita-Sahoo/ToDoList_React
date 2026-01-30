import React from 'react';
import './ToDoItem.css';

function ToDoItem({ task, isFirst, isLast }){

  const currentTask = task;
  
  // Format date
  const formattedDate = new Date(currentTask.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className={`todo-item ${isFirst ? 'first-item' : ''} ${isLast ? 'last-item' : ''} ${currentTask.completed ? 'completed' : ''}`}>
      <div className="todo-item-content">
        {/* Checkbox */}
        <div className="todo-checkbox">
          <div className={`custom-checkbox ${currentTask.completed ? 'checked' : ''}`}>
            {currentTask.completed && (
              <svg className="checkmark" viewBox="0 0 24 24">
                <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
            )}
          </div>
        </div>

        {/* Task Details */}
        <div className="todo-details">
          <div className="todo-header">
            <h3 className="todo-text">{currentTask.text}</h3>
          </div>

          <p className="todo-description">{currentTask.description}</p>

          <div className="todo-meta">
            <div className="meta-left">
              <span className="meta-item">
                <span className="meta-icon">📅</span>
                Created: {formattedDate}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="todo-actions">
          <div className="action-buttons">
            <button className="action-button edit-button" >
              <span className="button-icon">✎</span>
              Edit
            </button>
            <button className="action-button delete-button" >
              <span className="button-icon">🗑</span>
              Delete
            </button>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default ToDoItem;