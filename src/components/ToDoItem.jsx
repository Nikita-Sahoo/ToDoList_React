import React, { useState } from 'react';
import './ToDoItem.css';

function ToDoItem({ 
  task, 
  isFirst, 
  isLast, 
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
  const currentTask = task;
  const isEditing = editingId === currentTask.id;
  
  // Format date
  const formattedDate = new Date(currentTask.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

 

  // Handle double click to edit
  const handleDoubleClick = () => {
    if (!isEditing) {
      onStartEdit(currentTask.id, currentTask.text);
    }
  };

  // Handle save click
  const handleSaveClick = () => {
    onSaveEdit(currentTask.id);
  };

  // Handle cancel click
  const handleCancelClick = () => {
    onCancelEdit();
  };

  // Check if task is new (added today)
  const isNewTask = () => {
    const today = new Date();
    const taskDate = new Date(currentTask.createdAt);
    return taskDate.toDateString() === today.toDateString();
  };

  return (
    <div className={`todo-item ${isFirst ? 'first-item' : ''} ${isLast ? 'last-item' : ''} ${currentTask.completed ? 'completed' : ''}`}>
      <div className="todo-item-content">
        {/* Checkbox */}
        <div className="todo-checkbox">
          <div 
            className={`custom-checkbox ${currentTask.completed ? 'checked' : ''}`}
            onClick={() => onToggle(currentTask.id)}
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
            {isEditing ? (
              <div className="edit-input-container">
                <input
                  type="text"
                  className="edit-input"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyPress={(e) => onEditKeyPress(e, currentTask.id)}
                  autoFocus
                />
              </div>
            ) : (
              <>
                <h3 
                  className="todo-text"
                  onDoubleClick={handleDoubleClick}
                >
                  {currentTask.text}
                </h3>
                <div className="todo-badges">
                  <span className={`status-badge ${currentTask.completed ? 'completed-badge' : 'pending-badge'}`}>
                    {currentTask.completed ? 'Completed' : 'Pending'}
                  </span>
                  
                </div>
              </>
            )}
          </div>

          <p className="todo-description">{currentTask.description}</p>

          <div className="todo-meta">
            <div className="meta-left">
              <span className="meta-item">
                <span className="meta-icon">📅</span>
                Created: {formattedDate}
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

        {/* Action Buttons */}
        <div className="todo-actions">
          <div className="action-buttons">
            {isEditing ? (
              <>
                <button 
                  className="action-button save-button-sm"
                  onClick={handleSaveClick}
                >
                  <span className="button-icon">✓</span>
                  Save
                </button>
                <button 
                  className="action-button cancel-button-sm"
                  onClick={handleCancelClick}
                >
                  <span className="button-icon">✕</span>
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button 
                  className="action-button edit-button"
                  onClick={() => onStartEdit(currentTask.id, currentTask.text)}
                >
                  <span className="button-icon">✎</span>
                  Edit
                </button>
                <button 
                  className="action-button delete-button"
                  onClick={() => onDelete(currentTask.id)}
                >
                  <span className="button-icon">🗑</span>
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoItem;