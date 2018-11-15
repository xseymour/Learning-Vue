class Errors {
	constructor() {
		this.errors = {};
	}

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
		delete this.errors[field];
	}
}

var app = new Vue({
	el: '#root',
	data: {
		name: '',
		description: '',
		errors: new Errors(),
	},
	methods : {
		onSubmit() {
			axios.post('/projects', this.$data)
				.then(response => {
					this.onSuccess(response);
				})
				.catch(error => {
					console.log(error.response);
					// console.log(error.response.data);
					this.errors.record(error.response.data);
				});
			// axios.post('/projects', {
			// 	name: this.name,
			// 	description: this.description
			// });
		},
		onSuccess(response) {
			alert(response.data.message);
			
			// form.reset();
			this.name = '',
			this.description = '';
		}
	},
	computed : {

	},
	mounted() {

	},
	created() {

	},
});