import React from 'react';

import Card from '../shared/Card';

import './index.css';
function TripSection() {
  const cardArray = [1, 2, 3, 1, 2, 3];
  return (
    <div className="row">
      {cardArray.map(() => (
        <div className="col-md-4">
          <Card />
        </div>
      ))}
    </div>
  );
}

export default TripSection;
