import React from 'react';

const StopButton = ({ onStopTracking }) => {
  return (
    <div>
      <h1>Stop Tracking</h1>
      <button onClick={onStopTracking}>Stop</button>
    </div>
  );
};

export default StopButton;
