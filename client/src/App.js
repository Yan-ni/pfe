import "./styles/style.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/nav";
import Ticket from "./components/ticket";

function App() {
  return (
    <div className="App">
    Hello world
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Ticket />}></Route>
        <Route path="/ticket" element={<Ticket />}></Route>
      </Routes>
    </div>
  );
}

export default App;
