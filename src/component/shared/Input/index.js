import React from 'react';
import './index.css';

function Input({ label, name, type, inputHandle }) {
  return (
    <div>
      <label>
        {label}:
        <input
          name={name}
          type={type}
          //   value={email}
          onChange={(e) => inputHandle(e.target.value)}
          required
        />
      </label>
    </div>
  );
}

export default Input;
