import { createContext } from "react";
import APIStore from "./Stores/APIStore"; 

export const APIStoreContext = createContext();

export function APIStoreProvider({ children }) {
  return (
    <APIStoreContext.Provider value={APIStore}>
      {children}
    </APIStoreContext.Provider>
  );
}
