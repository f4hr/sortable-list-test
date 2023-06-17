import React from 'react';
import cn from 'classnames';

import './SortableItem.css';

export function SortableItem({ item }) {
  const { name, type } = item;

  const className = cn('sortable-list__item', `sortable-list__item--type--${type}`);

  return <div className={className}><span>{name}</span></div>;
}
