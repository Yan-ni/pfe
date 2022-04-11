import "./assets/styles/style.css";
import { Routes, Route } from "react-router-dom";
import { Fournisseur, Technicien, Equipement, Contrat, PlateForm, Ticket } from './pages';
import { APIStoreProvider } from "./APIStoreContext";
import SideBarNav from "./components/SideBarNav";

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

          <Route path="/plateformes" element={<PlateForm />} />

          <Route path="/tickets" element={<Ticket />} />
        </Routes>
      </APIStoreProvider>
    </div>
  );
}

export default App;
