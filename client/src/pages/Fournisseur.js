import "../assets/styles/fournisseur.css";
import React, { useState } from "react";
import Button from "../components/basicComponents/Button";
import SearchBar from "../components/basicComponents/SearchBar";
import AddFournisseur from "../components/fournisseur/AddFournisseur";
import edit from "../assets/images/edit.svg"
import addFilterBtn from "../assets/images/add-filter-btn.svg"
import xSymbol from "../assets/images/x-symbol.svg"

function Fournisseur() {
  const [addFournisseurModalDisplay, setAddFournisseurModalDisplay] = useState(false);
  const [addFilterListDisplay, setAddFilterListDisplay] = useState(false);
  const [activeFilters, setActiveFilters] = useState([{ name: "order(asc)" }]);

  return (
    <div className="page-container fournisseur">
      <div className="page-header">
        <h1>Fournisseurs</h1>
        <Button onClick={() => setAddFournisseurModalDisplay(true)}>Ajouter un fournisseur</Button>
        <SearchBar />
        <div className="header-right-side">
          <span></span>
          <div className="filter-btn-group">
            {activeFilters.map(e => (
              <Button type="filter-btn"> <p> {e.name} </p> <img src={xSymbol} alt="x" /></Button>
            ))}
          </div>
          <img onClick={() => setAddFilterListDisplay(!addFilterListDisplay)} src={addFilterBtn} alt="add filter btn" />
        </div>
      </div>

      <AddFournisseur addFournisseurModalDisplay={addFournisseurModalDisplay} setAddFournisseurModalDisplay={setAddFournisseurModalDisplay} />

      <div className="table-container">
        <div className="table-header fournisseur-header">
          <div className="header-item"><p>Id</p></div>
          <div className="header-item"><p>Nom</p></div>
          <div className="header-item"><p>Email</p></div>
          <div className="header-item"><p>Adresse</p></div>
        </div>

        <div className="table-body">
          {/* template body row */}
          <div className="table-row fournisseur-row">
            <div className="row-item"><p>123</p></div>
            <div className="row-item"><p>Algerie Telecom</p></div>
            <div className="row-item"><p>contact@algerie-telecom.com</p></div>
            <div className="row-item"><p>Route Nationale n°5, Cinq Maisons, Mohammadia 16130 Alger</p></div>
            <div className="row-item"><img src={edit} alt="options" /></div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Fournisseur;