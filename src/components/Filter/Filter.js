import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './Filter.module.css';

export default function Filter({ value, onInputChange }) {
  const id = uuidv4();
  return (
    <div className={s.filter}>
      <label className={s.filterLabel} htmlFor={id}>
        Find contact by name
      </label>
      <input
        id={id}
        type="text"
        name="filter"
        value={value}
        onChange={onInputChange}
      />
    </div>
  );
}
