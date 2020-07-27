import React from 'react';

import Button from '../Button';

import './index.css';

function Card({ trip }) {
  return (
    <div className="card-layout">
      <h3>
        Trip-<span>{trip.tripId}</span>
      </h3>
      <div className="card-details">
        <div className="row">
          <div className="col-md-6">
            <div className="labels">
              <i
                class={
                  trip.vehicleType === 'Car' ? 'fa fa-car' : 'fa fa-bicycle'
                }
              ></i>
              <span>{trip.vehicleNumber}</span>
            </div>
            <div className="labels">
              Pick: <span>{trip.pickupPoint}</span>
            </div>
            <div className="labels">
              Drop: <span>{trip.destination}</span>
            </div>
          </div>
          <div className="col-md-6">
            <div className="labels">
              Seat Left : <span>{trip.vacantSeat}</span>
            </div>
            <div className="labels">
              <i className="fa fa-clock"></i>
              <span>{trip.pickupTime}</span>
            </div>
            <div className="labels">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
