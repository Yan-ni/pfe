import { makeObservable, observable, action } from 'mobx';
import axios from 'axios';

class EquipementStore {
	constructor() {
		makeObservable(this, {
			equipements: observable,
			setEquipements: action,
			loadEquipements: action,
			addEquipement: action,
		});
	}

	equipements = [];

	addEquipement(equipement) {
		return axios
			.post('/api/equipement', equipement)
			.then(({ data }) => {
				this.setEquipements([...this.equipements, data]);
			})
			.then((error) => console.error(error));
	}

	setEquipements(equipements) {
		this.equipements = equipements;
	}

	async loadEquipements() {
		await axios
			.get('/api/equipement')
			.then(({ data }) => this.setEquipements(data))
			.catch((error) => console.error(error));
	}
}

export default new EquipementStore();
