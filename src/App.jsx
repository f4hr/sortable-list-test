import React, { useState } from 'react';

import './App.css';

import {
  Header, TabList, Main, SortableList, Form,
} from './components';
import { getNextId } from './components/utils';

const tabs = [
  { id: 1, name: 'Чек-лист' },
  { id: 2, name: 'Форма 1' },
  { id: 3, name: 'Форма 2' },
];
const defaultSourceList = [
  { id: getNextId(), name: 'Component A', type: 'primary' },
  { id: getNextId(), name: 'Component B', type: 'success' },
  { id: getNextId(), name: 'Component C', type: 'warn' },
];
const defaultTargetList = [
  { id: getNextId(), name: 'Component A', type: 'primary' },
];

export function App() {
  const [currentTab, setCurrentTab] = useState(1);
  const [sourceList, setSourceList] = useState(defaultSourceList);
  const [targetList, setTargetList] = useState(defaultTargetList);
  const [form1State, setForm1State] = useState({ firstName: '', lastName: '' });
  const [form2State, setForm2State] = useState({ country: '', city: '' });

  const getCurrentScreen = (screen) => {
    switch (screen) {
      case 1:
        return (
          <SortableList
            sourceList={sourceList}
            setSourceList={setSourceList}
            targetList={targetList}
            setTargetList={setTargetList}
          />
        );
      case 2:
        return <Form id="form-1" title="Форма 1" state={form1State} setState={setForm1State} />;
      case 3:
        return <Form id="form-2" title="Форма 2" state={form2State} setState={setForm2State} />;
      default:
        throw new Error(`Unknown screen '${screen}'`);
    }
  };

  return (
    <>
      <Header>
        <TabList items={tabs} currentTab={currentTab} onTabChange={setCurrentTab} />
      </Header>
      <Main>
        {getCurrentScreen(currentTab)}
      </Main>
    </>
  );
}
