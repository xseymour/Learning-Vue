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
		if(field) {
			delete this.errors[field];
		} else {
			this.errors = {};
		}

	}
}

class Form {

	constructor(data) {
		this.originalData = data;
		this.errors = new Errors();
		this.is_loading = false;
		//Assign data fields directly as form fields
		//Loop through data object parameters
		for(let field in data) {
			this[field] = data[field];
		}
	} 

	//Retrieve dynamic form data fields
	data() {
		//this.name, this.description
		let data = Object.assign({}, this);
		delete data.originalData;
		delete data.errors;

		return data;
	}

	reset() {
		for(let field in this.originalData) {
			this[field] = '';
		}
	}

    post(url) {
        return this.submit('post', url);
    }

    put(url) {
        return this.submit('put', url);
    }

    patch(url) {
        return this.submit('patch', url);
    }

    delete(url) {
        return this.submit('delete', url);
    }

	submit(request_type, url) {
		this.is_loading = true;
		// console.log(this.data());
		axios[request_type](url, this.data())
			.then(this.onSuccess.bind(this))
			.catch(this.onFail.bind(this));
	}

	onSuccess(response) {
		// console.log(this);
		alert(response.data.message);
		this.errors.clear();
		this.reset();
		this.is_loading = false;
	}

	onFail(error) {
		// console.log(error.response);
		// console.log(error.response.data);
		this.errors.record(error.response.data);
		this.is_loading = false;
	}

}

var form_instance = new Vue({
	el: '#root',
	data: {
		form: new Form({
			name: '',
			description: '',
		}),
	},
	methods : {
		onSubmit() {
			this.form.post('/projects');
		}
	},
	computed : {

	},
	mounted() {

	},
	created() {

	},
});