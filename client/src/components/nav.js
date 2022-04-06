import { Link } from "react-router-dom";

function Navbar() {
    return ( <nav className="navbar">
      <h3>Navbar</h3>

      <ul>
          <li>
              <Link to="/ticket">Ticket</Link>
          </li>
      </ul>
    </nav> );
}

export default Navbar;