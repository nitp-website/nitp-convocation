"use client";
import React, { createContext, useContext, ReactNode } from "react";

export interface ConvocationData {
  year?: string;
  info: any;
  dignitaries: any[];
  medals: any;
  committees: any;
  graduates: any;
  gallery: any[];
  notices?: any[];
}

interface ConvocationContextProps {
  data: ConvocationData | null;
  year: string;
}

const ConvocationContext = createContext<ConvocationContextProps | undefined>(undefined);

export const ConvocationProvider = ({
  data,
  year,
  children,
}: {
  data: ConvocationData | null;
  year?: string;
  children: ReactNode;
}) => {
  const activeYear = year || data?.year || "2026";
  return (
    <ConvocationContext.Provider value={{ data, year: activeYear }}>
      {children}
    </ConvocationContext.Provider>
  );
};

export const useConvocation = () => {
  const context = useContext(ConvocationContext);
  if (context === undefined) { return { data: null, year: "2026" }; }
  return context;
};

