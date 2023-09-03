import React from 'react';

const StartButton = ({ onStartTracking }) => {
  return (
    <div>
      <h1>Start Tracking</h1>
      <button onClick={onStartTracking}>Start</button>
    </div>
  );
};

export default StartButton;
