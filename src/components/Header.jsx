import React from 'react';

function Header(){
  return (
    <header className="bg-primary text-white py-4 mb-4">
      <div className="container text-center">
        <h1 className="display-5 fw-bold">My To-Do List</h1>
        <p className="lead mb-0">Organize your tasks efficiently</p>
      </div>
    </header>
  );
};

export default Header;
