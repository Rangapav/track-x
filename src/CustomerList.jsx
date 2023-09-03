import React from 'react';

const CustomerList = ({ customers }) => {
  return (
    <div>
      <h1>Customer List</h1>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            {customer.name} - {customer.phoneNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;
