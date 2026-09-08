"use client";
import React, { createContext, useContext } from 'react';

const ConvocationContext = createContext<any>(null);

export const ConvocationProvider = ({ children, data, year }: { children: React.ReactNode, data: any, year: string }) => {
  return (
    <ConvocationContext.Provider value={{ data, year }}>
      {children}
    </ConvocationContext.Provider>
  );
};

export const useConvocation = () => useContext(ConvocationContext);
