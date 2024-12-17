import React, { createContext, useState } from 'react';

// Create Context
export const OrderContext = createContext();

// Provider Component
export const OrderProvider = ({ children }) => {
  const [currentUser,  setCurrentUser] = useState(null)

  return (
    <OrderContext.Provider value={{ currentUser ,setCurrentUser }}>
      {children}
    </OrderContext.Provider>
  );
};
