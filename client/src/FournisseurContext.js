import { createContext, useState } from "react";
import { listFournisseur } from "./LesFournisseurs";

export const FournisseurContext = createContext();

export function FournisseurProvider({ children }) {
  const [fournisseur, setFournisseur] = useState(listFournisseur);

  return (
    <FournisseurContext.Provider value={{ fournisseur, setFournisseur }}>
      {children}
    </FournisseurContext.Provider>
  );
}
