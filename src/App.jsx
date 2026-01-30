import React, { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';

const App = () => {
 
  return (
    <div className="app-container">
      <Header />

      <main className="container">
        
      </main>

      <footer className="mt-5 py-3 text-center text-muted border-top">
        <div className="container">
          <p className="mb-0">To-Do List App • Built with React & Bootstrap</p>
          <small>Click on any task to edit it</small>
        </div>
      </footer>
    </div>
  );
};

export default App;