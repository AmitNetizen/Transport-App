import React, { useState } from 'react';

import Input from '../shared/Input';
import Select from '../shared/Select';
import Button from '../shared/Button';
import CustomTimePicker from '../shared/CustomTimePicker';

import './index.css';

function Form(props) {
  const [empId, setEmpId] = useState('');
  const [vehicleType, setVehicleType] = useState('Car');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [vacantSeat, setVacantSeat] = useState('');
  const [pickupPoint, setPickupPoint] = useState('');
  const [destination, setDestination] = useState('');
  const [startTime, setStartTime] = useState('3600');

  const handleSubmit = (event) => {
    event.preventDefault();
    const pickupTime = getTime(startTime);
    const tripId = `${pickupPoint}-${vehicleType}-${destination}`;
    const dataToSend = {
      tripId,
      empId,
      vehicleType,
      vehicleNumber,
      vacantSeat,
      pickupPoint,
      destination,
      pickupTime,
    };
    setEmpId('');
    setVehicleType('Car');
    setVehicleNumber('');
    setVacantSeat('');
    setPickupPoint('');
    setDestination('');
    props.submitHandle(dataToSend);
  };

  const getTime = (time) => {
    var date = new Date(null);
    date.setSeconds(time);
    var result = date.toISOString().substr(11, 8);
    return result;
  };

  return (
    <div>
      <form className="schedule-form" onSubmit={handleSubmit}>
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
              value={vehicleType}
              disabled={true}
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
            <CustomTimePicker
              label="Start Time"
              value={startTime}
              timeHandle={setStartTime}
            />
          </div>
          <div className="col-md-3">
            <Button name="Schedule" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
