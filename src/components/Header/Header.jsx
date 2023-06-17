import React from 'react';

export function Header({ children }) {
  return (
    <header>
      <div className="wrapper">
        <h2>Header</h2>
        {children}
      </div>
    </header>
  );
}
