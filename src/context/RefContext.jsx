'use client';
import React, { useRef } from 'react';

export const RefContext = React.createContext();

const RefContextProvider = ({ children }) => {
  return (
    <RefContext.Provider
      value={{
        newLinkRef: useRef(null),
        profileRef: useRef(null),
      }}
    >
      {children}
    </RefContext.Provider>
  );
};

export default RefContextProvider;
