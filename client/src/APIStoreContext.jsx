import React, { createContext } from 'react';
import fournisseurStore from './Stores/fournisseurStore';
import equipementStore from './Stores/equipementStore';
import technicienStore from './Stores/technicienStore';

export const APIStoreContext = createContext();

export function APIStoreProvider({ children }) {
	return (
		<APIStoreContext.Provider value={ { fournisseurStore, equipementStore, technicienStore} }>
			{children}
		</APIStoreContext.Provider>
	);
}
