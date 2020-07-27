import React from 'react';
import './index.css';

function Input({ label, name, type, inputHandle, placeholder }) {
  return (
    <div>
      <label>
        {label ? `${label} :` : ''}
        <input
          name={name}
          type={type}
          onChange={(e) => inputHandle(e.target.value)}
          placeholder={placeholder}
          required
        />
      </label>
    </div>
  );
}

export default Input;
