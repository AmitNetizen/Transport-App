import React, { useState } from 'react';

import Button from '../shared/Button';
import Input from '../shared/Input';

import './index.css';

function PickupSection({ trip, booktrip }) {
  const [empId, setEmpId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    trip['pickupEmpId'] = empId;
    booktrip(trip);
  };

  return (
    <>
      <form className="pickup-section" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <Input
              name="EmpId"
              type="text"
              inputHandle={setEmpId}
              placeholder="Enter EMP ID"
            />
          </div>
          <div className="col-md-6">
            <div className="labels">
              <Button name="Pick" />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default PickupSection;
