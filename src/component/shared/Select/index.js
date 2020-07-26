import React from 'react';

import vehicles from '../../../constants/vehicleType';

import './index.css';

function Select({ label, name, selectHandle }) {
  console.log(vehicles, 'vehicles:::vehicles');
  return (
    <>
      <label>
        {label}:
        <select
          name={name}
          //   value={vehicle}
          onChange={(e) => selectHandle(e.target.value)}
          required
        >
          {vehicles.map((vehicle) => (
            <option key={vehicle.id}>{vehicle.type}</option>
          ))}
        </select>
      </label>
    </>
  );
}

export default Select;
