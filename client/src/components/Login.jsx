import React, { useState }  from "react";
import axios from 'axios';

export default function Login({setAuthenticated}) {
  const [login , setLogin] = useState(false);
  const [title , setTitre] = useState("se connecter");
  const [signUp, setSignUp] = useState("s'enregistrer");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [confirmationMDP, setConfirmationMDP] = useState();
  const [waitingApproval, setWaitingApproval] = useState(false);
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");

  const changeAuth = () => {
    if(login){
      setTitre(signUp);
      setLogin(!login);
      setSignUp("s'enregistrer");
    }else{
      setTitre("s'enregistrer");
      setLogin(!login);
      setSignUp("se connecter");
    }
  }

  const sendUserData = () => {
    if (!login) {
        axios
        .post('http://localhost:3546/api/authentication/login/', {nom, prenom, motDePasse})
        .then(res => 
          {if (res.status==200) {
              setAuthenticated(true);
              setToken(res.data.accessToken);
          };})
        .then((error) => (error) => console.error(error))
        .catch(error => {
            setMessage(error.response.data.error)
         }); 
    }else{
          axios
          .post('http://localhost:3546/api/authentication/register/', {nom, prenom, motDePasse, confirmationMDP})
          .then(res => 
            {if (res.status==200) {
                setMessage(res.data);
                setWaitingApproval(true);
            };})
          .catch(error => {
            setMessage(error.response.data.error)
         }); 
    }
  }

  return (
    <>
    <div className="authentification">
      {waitingApproval && <p className="messagePositif">votre demande d'enregistrement est en cour de traitement <br />veuillez attendre l'approbation de l'admin</p>}
      {!waitingApproval &&
      <><h4>{title}</h4>
      <p className="messageDerreur">{message}</p>
      <label >nom</label>
      <input 
        id="nom" 
        type="text" 
        defaultValue={nom} 
        onChange={(e) => setNom(e.target.value)}/>
      <label >prenom</label>
      <input 
        id="prenom" 
        type="text" 
        defaultValue={prenom} 
        onChange={(e) => setPrenom(e.target.value)}/>
      <label >mot de passe</label>
      <input 
        id="mot de passe" 
        type="password" 
        defaultValue={motDePasse} 
        onChange={(e) => setMotDePasse(e.target.value)}/>
      {login && <> <label >confirmer mot de passe </label>
      <input 
        id="confirmation mot de passe" 
        type="password" 
        defaultValue={confirmationMDP} 
        onChange={(e) => setConfirmationMDP(e.target.value)}/></>}
      <div className="boutonsSauthenrifier">
        <p onClick={()=>changeAuth()}>{signUp}</p>
        <button onClick={()=>sendUserData()}>{title}</button>
      </div></>}
    </div>
    </>
    )
}