import React, { useState } from 'react';

import Input from '../shared/Input';
import Select from '../shared/Select';
import Button from '../shared/Button';

import './index.css';

function Form() {
  const [empId, setEmpId] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [vacantSeat, setVacantSeat] = useState('');
  const [pickupPoint, setPickupPoint] = useState('');
  const [destination, setDestination] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataToSend = {
      empId,
      vehicleType,
      vehicleNumber,
      vacantSeat,
      pickupPoint,
      destination,
    };
    console.log(dataToSend, 'event::event');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Schedule</h1>
        <div className="row">
          <div className="col-md-3">
            <Input
              label="Employee Id"
              name="EmpId"
              type="text"
              inputHandle={setEmpId}
            />
          </div>
          <div className="col-md-3">
            <Select
              label="Vehicle Type"
              name="vehicleType"
              selectHandle={setVehicleType}
            />
          </div>
          <div className="col-md-3">
            <Input
              label="Vehicle No."
              name="vehicleNumber"
              type="text"
              inputHandle={setVehicleNumber}
            />
          </div>
          <div className="col-md-3">
            <Input
              label="Vacant Seat."
              name="vacantSeat"
              type="number"
              inputHandle={setVacantSeat}
            />
          </div>
          <div className="col-md-3">
            <Input
              label="Pickup Point"
              name="pickupPoint"
              type="text"
              inputHandle={setPickupPoint}
            />
          </div>
          <div className="col-md-3">
            <Input
              label="Destination"
              name="destination"
              type="text"
              inputHandle={setDestination}
            />
          </div>
          <div className="col-md-3">
            <Button />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
