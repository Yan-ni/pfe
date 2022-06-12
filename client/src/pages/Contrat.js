import "../assets/styles/contrat.css"
import { useState } from "react"
import { Button } from "../components/basicComponents"

function Contrat() {
  const [addContratModalDisplay, setAddContratModalDisplay] = useState(false)

  return (
    <div className="contrat">
      <h1>Contrat</h1>

      <Button onClick={() => setAddContratModalDisplay(true)}>Ajouter un contrat</Button>
    </div>
  )
}

export default Contrat
