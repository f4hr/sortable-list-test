import React from 'react';

import './Form.css';

export function Form({
  id, title, state, setState,
}) {
  const handleInput = (e, key) => {
    setState((prev) => ({ ...prev, [key]: e.target.value }));
  };

  return (
    <form action="">
      <legend><h2>{title}</h2></legend>
      <fieldset>
        {Object.entries(state).map(([key, val]) => (
          <p>
            <label htmlFor={`${id}-${key}`}>
              <span className="label-text">
                {key}
                :
                {' '}
              </span>
              <input type="text" name={key} id={`${id}-${key}`} value={val} onInput={(e) => handleInput(e, key)} />
            </label>
          </p>
        ))}
      </fieldset>
    </form>
  );
}
