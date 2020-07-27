import React from 'react';

import Card from '../shared/Card';

import './index.css';
function TripSection({ trips, filter }) {
  const tripData =
    filter === 'Bike' || filter === 'Car'
      ? trips.filter((trip) => trip.vehicleType === filter)
      : trips;

  return (
    <div className="row">
      {tripData.map((trip) => (
        <div key={trip.id} className="col-md-4">
          <Card trip={trip} />
        </div>
      ))}
    </div>
  );
}

export default TripSection;
