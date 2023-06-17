import React from 'react';

import './Main.css';

export function Main({ children }) {
  return (
    <main className="main">
      <div className="wrapper">
        <div className="main__container">
          {children}
        </div>
      </div>
    </main>
  );
}
