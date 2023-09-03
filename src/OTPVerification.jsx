import React, { useState } from 'react';

const OTPVerification = () => {
  const [otp, setOTP] = useState('');

  const handleOTPChange = (e) => {
    setOTP(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verify OTP logic
  };

  return (
    <div>
      <h1>OTP Verification</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={handleOTPChange}
        />
        <button type="submit">Verify</button>
      </form>
    </div>
  );
};

export default OTPVerification;
