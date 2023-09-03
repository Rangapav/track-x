import React, { useState } from 'react';

const CustomerForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleLatitudeChange = (e) => {
    setLatitude(e.target.value);
  };

  const handleLongitudeChange = (e) => {
    setLongitude(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add customer logic with the provided form values
  };

  return (
    <div>
      <h1>Add Customer</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
        <input
          type="text"
          placeholder="Latitude"
          value={latitude}
          onChange={handleLatitudeChange}
        />
        <input
          type="text"
          placeholder="Longitude"
          value={longitude}
          onChange={handleLongitudeChange}
        />
        <button type="submit">Add Customer</button>
      </form>
    </div>
  );
};

export default CustomerForm;
