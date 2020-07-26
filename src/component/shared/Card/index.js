import React from 'react';

import './index.css';

function Card() {
  return (
    <div className="card-layout">
      <h3>Heading</h3>
      <div className="card-details">
        <div className="row">
          <div className="col-md-6">
            <div className="labels">
              <i class="fa fa-bicycle"></i> <span>Mp052010</span>
            </div>
            <div className="labels">
              Pick: <span>BTM</span>
            </div>
            <div className="labels">
              Drop: <span>Koromanga</span>
            </div>
          </div>
          <div className="col-md-6">
            <div className="labels">
              Seat Left : <span>3</span>
            </div>
            <div className="labels">
              <i class="fa fa-clock"></i>
              <span>12:12 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
