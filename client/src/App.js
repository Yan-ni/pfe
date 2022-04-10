import "./assets/styles/style.css";
import { Routes, Route } from "react-router-dom";
import { Fournisseur, Technicien, Equipement, Contrat, PlateForm, Ticket, Home } from './pages';
import { APIStoreProvider } from "./APIStoreContext";

function App() {
  return (
    <div className="App">
      <APIStoreProvider>
        <Routes>
          <Route path="/" element={<Fournisseur />} />

          <Route path="/Technicien" element={<Technicien />} />

          <Route path="/Equipement" element={<Equipement />} />

          <Route path="/Contrat" element={<Contrat />} />

          <Route path="/PlateForm" element={<PlateForm />} />

          <Route path="/Ticket" element={<Ticket />} />

        </Routes>
      </APIStoreProvider>
    </div>
  );
}

export default App;
