import React from 'react';

import Card from '../shared/Card';
import PickupSection from '../PickupSection';

import './index.css';
function TripSection({ trips, filter, booktrip }) {
  const tripData =
    filter === 'Bike' || filter === 'Car'
      ? trips.filter((trip) => trip.vehicleType === filter)
      : trips;

  return (
    <div className="row">
      {tripData.map((trip) => (
        <div key={trip.id} className="col-md-4">
          <Card trip={trip} />
          <PickupSection trip={trip} booktrip={booktrip} />
        </div>
      ))}
    </div>
  );
}

export default TripSection;
