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
  const [champVide, setChampVide] = useState(false);
  const [identique, setIdentique] = useState(false);
  const [token, setToken] = useState("");
  const [identifiantIncorrect, setIdentifiantIncorrect] = useState(false);

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
      if(!nom || !prenom || !motDePasse){
        setChampVide(true);
      }else{
        setChampVide(false);
        axios
        .post('http://localhost:3546/api/authentication/login/', {nom, prenom, motDePasse})
        .then(res => 
          {
            if (res.status==200) {
              setAuthenticated(true);
              setToken(res.data.accessToken);
          };})
        .then((error) => console.error(error));
        
      } 
    }else{
      if(!nom || !prenom || !motDePasse || !confirmationMDP){
        setChampVide(true);
      }else{
        setChampVide(false);
        if(motDePasse!==confirmationMDP){
          setIdentique(true); 
        }else{
          setIdentique(false);
          axios
          .post('http://localhost:3546/api/authentication/register/', {nom, prenom, motDePasse})
          .then((error) => console.error(error));
        }
      }
    }

  }

  return (
    <>
    <div className="authentification">
      <h4>{title}</h4>
      {identifiantIncorrect && <p className="messageDerreur">identifiant ou mot de passe incorrect</p>}
      {champVide && <p className="messageDerreur">veuillez remplir tous les champs</p>}
      {identique && <p className="messageDerreur">les mots de passes ne sont pas identiques</p>}
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
      </div>
    </div>
    </>
    )
}