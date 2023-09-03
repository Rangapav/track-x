import React, { useState } from 'react';
import Login from './Login';
import Map from './Map';
import CustomerForm from './CustomerForm';
import CustomerList from './CustomerList';
import StartButton from './StartButton';
import StopButton from './StopButton';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [customers, setCustomers] = useState([]);

  const handleLogin = () => {
    // Handle login logic here
    setLoggedIn(true);
  };

  const handleAddCustomer = (customer) => {
    setCustomers([...customers, customer,123456789]);
  };

  return (
    <div>
      {!loggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <Map /> 
          /* <CustomerForm onAddCustomer={handleAddCustomer} />
          <CustomerList customers={customers} />
          <StartButton />
          <StopButton />
        </>
      )}
     </div>
  );
};

export default App;
