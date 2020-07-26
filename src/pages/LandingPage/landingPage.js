import React from 'react';

import Form from '../../component/Form';
import TripSection from '../../component/TripSection';

import './landingPage.css';

function LandingPage() {
  return (
    <div className="schedule-form">
      <Form />
      <TripSection />
    </div>
  );
}

export default LandingPage;
