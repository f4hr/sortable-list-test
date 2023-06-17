import React from 'react';
import { ReactSortable } from 'react-sortablejs';

import './SortableList.css';

import { Sidebar } from '../Sidebar';
import { SortableItem } from './SortableItem';

import { getNextId } from '../utils';

export function SortableList({
  sourceList, setSourceList, targetList, setTargetList, onRemove,
}) {
  return (
    <>
      <Sidebar>
        <ReactSortable
          className="sortable-list__list"
          list={sourceList}
          setList={setSourceList}
          animation={150}
          sort={false}
          group={{ name: 'group-name', pull: 'clone', put: false }}
          clone={(item) => ({ ...item, id: getNextId() })}
        >
          {sourceList.map((item) => (
            <SortableItem key={item.id} item={item} />
          ))}
        </ReactSortable>
      </Sidebar>
      <div className="sortable-list">
        <h2>Content</h2>
        <ReactSortable
          className="sortable-list__list"
          list={targetList}
          setList={setTargetList}
          animation={150}
          group={{ name: 'group-name', pull: 'clone' }}
        >
          {targetList.map((item) => (
            <SortableItem key={item.id} item={item} onRemove={onRemove} />
          ))}
        </ReactSortable>
      </div>
    </>
  );
}
