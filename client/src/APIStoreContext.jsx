import React, { createContext } from 'react';
import fournisseurStore from './Stores/fournisseurStore';
import equipementStore from './Stores/equipementStore';
import technicienStore from './Stores/technicienStore';
import plateformeStore from './Stores/plateformeStore';

export const APIStoreContext = createContext();

export function APIStoreProvider({ children }) {
	return (
		<APIStoreContext.Provider value={ { fournisseurStore, equipementStore, technicienStore, plateformeStore} }>
			{children}
		</APIStoreContext.Provider>
	);
}
