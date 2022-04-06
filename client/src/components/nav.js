import { Link } from "react-router-dom";

function Navbar() {
    return ( <nav className="navbar">
      <h3>Navbar</h3>

      <ul>
          <li>
                <Link to="/">Home</Link>    
          </li>
          <li>
              <Link to="/Fournisseur">Fournisseur</Link>
          </li>
          <li>
              <Link to="/Technicien">Technicien</Link>
          </li>
          <li>
              <Link to="/Equipement">Equipement</Link>
          </li>
          <li>
              <Link to="/PlateForm">PlateForm</Link>
          </li>
          <li>
              <Link to="/Contrat">Contrat</Link>
          </li>
          <li>
              <Link to="/Ticket">Ticket</Link>
          </li>
      </ul>
    </nav> );
}

export default Navbar;