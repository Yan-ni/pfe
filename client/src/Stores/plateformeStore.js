import { makeObservable, observable, action } from 'mobx';
import axios from 'axios';
import { Plateforme } from '../pages';

class PlateformeStore {
	constructor() {
		makeObservable(this, {
			plateformes: observable,
			setPlateformes: action,
			loadPlateformes: action,
			addPlateforme: action,
		});
	}

	plateformes = [];

	addPlateforme(plateforme) {Plateforme
		return axios
			.post('/api/plateforme', Plateforme)
			.then(({ data }) => {
				this.setPlateformes([...this.plateformes, data]);
			})
			.then((error) => console.error(error));
	}

	setPlateformes(plateformes) {
		this.plateformes = plateformes;
	}

	async loadPlateformes() {
		await axios
			.get('/api/plateforme')
			.then(({ data }) => this.setPlateformes(data))
			.catch((error) => console.error(error));
	}
}

export default new PlateformeStore();
