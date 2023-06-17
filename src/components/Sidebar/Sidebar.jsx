import React from 'react';

import './Sidebar.css';

export function Sidebar({ children }) {
  return (
    <aside className="sidebar">
      <h2>Sidebar</h2>
      {children}
    </aside>
  );
}
