import { makeObservable, observable, action } from 'mobx';
import axios from 'axios';

class TechnicienStore {
	constructor() {
		makeObservable(this, {
			techniciens: observable,
			setTechniciens: action,
			loadTechniciens: action,
			addTechnicien: action,
		});
	}

	techniciens = [];

	addTechnicien(technicien) {
		return axios
			.post('/api/technicien', technicien)
			.then(({ data }) => {
				this.setTechniciens([...this.techniciens, data]);
			})
			.then((error) => console.error(error));
	}

	setTechniciens(techniciens) {
		this.techniciens = techniciens;
	}

	async loadTechniciens() {
		await axios
			.get('/api/technicien')
			.then(({ data }) => this.setTechniciens(data))
			.catch((error) => console.error(error));
	}
}

export default new TechnicienStore();
