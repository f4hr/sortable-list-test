import React from 'react';
import cn from 'classnames';

import './SortableItem.css';

export function SortableItem({ item, onRemove = null }) {
  const { id, name, type } = item;

  const className = cn('sortable-list__item', `sortable-list__item--type--${type}`);

  return (
    <div className={className}>
      <span>{name}</span>
      {onRemove
        ? (
          <button
            className="sortable-list__remove-btn"
            type="button"
            onClick={() => onRemove(id)}
            aria-label="Remove"
            title="Remove"
          />
        )
        : null}
    </div>
  );
}
