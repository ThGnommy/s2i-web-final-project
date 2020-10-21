import React, { useState, createContext } from "react";

export const StoreContext = createContext();

export const StoreContext = ({ children }) => {
  return <StoreContext.Provider value={}>{children}</StoreContext.Provider>;
};
