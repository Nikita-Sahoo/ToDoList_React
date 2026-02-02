import React from 'react';
import './ToDoItem.css';

function ToDoItem({ task, isFirst, isLast }) {
  const currentTask = task;
  
  // Format date
  const formattedDate = new Date(currentTask.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

 

  // Static handlers - they don't do anything
  const handleEditClick = () => {
    console.log('Edit clicked (static)');
  };

  const handleDeleteClick = () => {
    console.log('Delete clicked (static)');
  };

  const handleCheckboxClick = () => {
    console.log('Checkbox clicked (static)');
  };

  // Check if task is new (added today)
  const isNewTask = () => {
    const today = new Date();
    const taskDate = new Date(currentTask.createdAt);
    return taskDate.toDateString() === today.toDateString();
  };

  return (
    <div className={`todo-item ${isFirst ? 'first-item' : ''} ${isLast ? 'last-item' : ''} ${currentTask.completed ? 'completed' : ''} ${isNewTask() ? 'new-task' : ''}`}>
      <div className="todo-item-content">
        {/* Checkbox - Static */}
        <div className="todo-checkbox">
          <div 
            className={`custom-checkbox ${currentTask.completed ? 'checked' : ''}`}
            onClick={handleCheckboxClick}
            style={{ cursor: 'not-allowed' }}
          >
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
            <h3 className="todo-text">
              {currentTask.text}
              {isNewTask() && <span className="new-badge">NEW</span>}
            </h3>
            <div className="todo-badges">
              <span className={`status-badge ${currentTask.completed ? 'completed-badge' : 'pending-badge'}`}>
                {currentTask.completed ? 'Completed' : 'Pending'}
              </span>
            </div>
          </div>

          <p className="todo-description">{currentTask.description}</p>

          <div className="todo-meta">
            <div className="meta-left">
              <span className="meta-item">
                <span className="meta-icon">📅</span>
                Added: {formattedDate}
              </span>
              <span className="meta-item">
                <span className="meta-icon">🆔</span>
                ID: #{currentTask.id}
              </span>
            </div>
            <div className="meta-right">
              <span className="meta-item">
                {isNewTask() ? (
                  <span className="new-indicator">✨ Added Today</span>
                ) : (
                  <span className="older-indicator">📁 Older Task</span>
                )}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons - Static */}
        <div className="todo-actions">
          <div className="action-buttons">
            <button 
              className="action-button edit-button static"
              onClick={handleEditClick}
              title="Static button - Edit functionality not implemented"
            >
              <span className="button-icon">✎</span>
              Edit
            </button>
            <button 
              className="action-button delete-button static"
              onClick={handleDeleteClick}
              title="Static button - Delete functionality not implemented"
            >
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