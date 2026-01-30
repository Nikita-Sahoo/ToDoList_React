import React from 'react';
import "./Header.css";

function Header(){
  return (
    <header className="app-header">
      <div className="container">
        <h1 className="header-title">My To-Do List</h1>
        <p className="header-subtitle">Add Your pending task to complete it within time.</p>
      </div>
    </header>
  );
};

export default Header;
