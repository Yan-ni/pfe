import { makeObservable, observable, action } from 'mobx';
import axios from 'axios';

class APIStore {
  constructor() {
    makeObservable(this, {
      fournisseurs: observable,
      setFournisseurs: action,
      loadFournisseurs: action
    });
  }

  fournisseurs = [];

  setFournisseurs(fournisseurs) {
    this.fournisseurs = fournisseurs;
  }

  loadFournisseurs() {
    axios
      .get('http://localhost:3000/api/fournisseur')
      .then(({data}) => this.setFournisseurs(data));
  }
}

export default new APIStore(); 