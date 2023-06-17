import React from 'react';
import cn from 'classnames';

import './TabItem.css';

export function TabItem({ item, onClick, isActive = false }) {
  const { name } = item;

  const className = cn('tab__item', { 'tab__item--active': isActive });

  return (
    <li className={className}>
      <button type="button" onClick={onClick}>{name}</button>
    </li>
  );
}
