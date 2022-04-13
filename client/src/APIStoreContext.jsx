import React, { createContext } from 'react';
import fournisseurStore from './Stores/fournisseurStore';

export const APIStoreContext = createContext();

export function APIStoreProvider({ children }) {
	return (
		<APIStoreContext.Provider value={ { fournisseurStore } }>
			{children}
		</APIStoreContext.Provider>
	);
}
