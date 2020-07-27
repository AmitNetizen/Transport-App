import React from 'react';
import TimePicker from 'react-bootstrap-time-picker';

import './index.css';

function CustomTimePicker({ label, value, timeHandle }) {
  return (
    <>
      <label className="timepicker">
        {label}:
        <TimePicker
          // start="10:00"
          // end="21:00"
          value={value}
          step={60}
          onChange={(e) => {
            timeHandle(e);
          }}
        />
      </label>
    </>
  );
}

export default CustomTimePicker;
