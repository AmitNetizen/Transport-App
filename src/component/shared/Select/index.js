import React from 'react';

import vehicles from '../../../constants/vehicleType';

import './index.css';

function Select({ label, name, value, selectHandle, disabled }) {
  return (
    <>
      <label>
        {label}:
        <select
          name={name}
          value={value}
          onChange={(e) => selectHandle(e.target.value)}
          required
        >
          <option key="" disabled={disabled}>
            None
          </option>
          {vehicles.map((vehicle) => (
            <option key={vehicle.id}>{vehicle.type}</option>
          ))}
        </select>
      </label>
    </>
  );
}

export default Select;
