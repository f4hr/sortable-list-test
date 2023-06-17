import React from 'react';

import './TabList.css';

import { TabItem } from './TabItem';

export function TabList({ items, currentTab, onTabChange }) {
  const handleClick = (id) => onTabChange(id);

  return (
    <ul className="tab__list">
      {items.map((item) => (
        <TabItem
          key={item.id}
          item={item}
          isActive={item.id === currentTab}
          onClick={() => handleClick(item.id)}
        />
      ))}
    </ul>
  );
}
