"use client";
import React, { createContext, useContext, ReactNode } from "react";

export interface ConvocationData {
  info: any;
  dignitaries: any[];
  medals: any;
  committees: any;
  graduates: any;
  gallery: any[];
}

interface ConvocationContextProps {
  data: ConvocationData | null;
}

const ConvocationContext = createContext<ConvocationContextProps | undefined>(undefined);

export const ConvocationProvider = ({
  data,
  children,
}: {
  data: ConvocationData | null;
  children: ReactNode;
}) => {
  return (
    <ConvocationContext.Provider value={{ data }}>
      {children}
    </ConvocationContext.Provider>
  );
};

export const useConvocation = () => {
  const context = useContext(ConvocationContext);
  if (context === undefined) { return { data: null }; }
  return context;
};
