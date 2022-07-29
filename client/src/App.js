import React, { useState }  from 'react';
import './assets/styles/style.css';
import { Routes, Route } from 'react-router-dom';
import { APIStoreProvider } from './APIStoreContext.jsx';
import SideBarNav from './components/SideBarNav.jsx';
import Login from './components/Login';
import {
	Fournisseur,
	Technicien,
	Equipement,
	Contrat,
	PlateForm,
	Ticket,
} from './pages';

function App() {
	const [authenticated, setAuthenticated]=useState(false);
	return (
		<div className="App">
			<APIStoreProvider>
				{!authenticated && <Login setAuthenticated={setAuthenticated}/>}
				{authenticated &&
				<> 				
				<SideBarNav />
				<Routes>
					<Route path="/" element={<Fournisseur />} />

					<Route path="/techniciens" element={<Technicien />} />

					<Route path="/equipements" element={<Equipement />} />

					<Route path="/contrats" element={<Contrat />} />

					<Route path="/plateformes" element={<PlateForm />} />

					<Route path="/tickets" element={<Ticket />} />
				</Routes></>
				}
			</APIStoreProvider>
		</div>
	);
}

export default App;
