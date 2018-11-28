class Errors {
	constructor() {
		this.errors = {};		
	}
	/**
	 * @param  {string}
	 * @return {Boolean}
	 */
	has(field) {
		// return typeof this.errors[field] != 'undefined';
		return this.errors.hasOwnProperty(field);
	}

	any() {
		return Object.keys(this.errors).length > 0;
	}

	get(field) {
		if (this.errors[field]) {
			return this.errors[field][0];
		}
	}

	record(errors) {
		this.errors = errors;
	}

	clear(field) {
		// this.errors[field] = [];
		if(field) {
			delete this.errors[field];
		} else {
			this.errors = {};
		}

	}
}

export default Errors;