import "./styles/style.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Fournisseur from "./pages/Fournisseur";
import Technicien from "./pages/Technicien";
import Equipement from "./pages/Equipement";
import Contrat from "./pages/Contrat";
import PlateForm from "./pages/PlateForm";
import Ticket from "./pages/Ticket";
import { FournisseurProvider } from "./FournisseurContext";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <FournisseurProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Fournisseur" element={<Fournisseur />}></Route>
          <Route path="/Technicien" element={<Technicien />}></Route>
          <Route path="/Equipement" element={<Equipement />}></Route>
          <Route path="/Contrat" element={<Contrat />}></Route>
          <Route path="/PlateForm" element={<PlateForm />}></Route>
          <Route path="/Ticket" element={<Ticket />}></Route>
        </Routes>
      </FournisseurProvider>

    </div>
  );
}

export default App;
