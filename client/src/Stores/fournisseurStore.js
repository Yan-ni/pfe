import { makeObservable, observable, action } from 'mobx';
import axios from 'axios';

class FournisseurStore {
	constructor() {
		makeObservable(this, {
			fournisseurs: observable,
			setFournisseurs: action,
			loadFournisseurs: action,
			addFournisseur: action,
		});
	}

	fournisseurs = [];

	addFournisseur(fournisseur) {
		return axios
			.post('/api/fournisseur', fournisseur)
			.then(({ data }) => {
				this.setFournisseurs([...this.fournisseurs, data]);
			})
			.then((error) => console.error(error));
	}

	setFournisseurs(fournisseurs) {
		this.fournisseurs = fournisseurs;
	}

	async loadFournisseurs() {
		await axios
			.get('/api/fournisseur')
			.then(({ data }) => this.setFournisseurs(data))
			.catch((error) => console.error(error));
	}
}

export default new FournisseurStore();
