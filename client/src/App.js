import React from 'react';
import './assets/styles/style.css';
import { Routes, Route } from 'react-router-dom';
import { APIStoreProvider } from './APIStoreContext.jsx';
import SideBarNav from './components/SideBarNav.jsx';
import {
	Fournisseur,
	Technicien,
	Equipement,
	Contrat,
	Plateforme,
	Ticket,
} from './pages';

function App() {
	return (
		<div className="App">
			<APIStoreProvider>
				<SideBarNav />
				<Routes>
					<Route path="/" element={<Fournisseur />} />

					<Route path="/techniciens" element={<Technicien />} />

					<Route path="/equipements" element={<Equipement />} />

					<Route path="/contrats" element={<Contrat />} />

					<Route path="/plateformes" element={<Plateforme />} />

					<Route path="/tickets" element={<Ticket />} />
				</Routes>
			</APIStoreProvider>
		</div>
	);
}

export default App;
