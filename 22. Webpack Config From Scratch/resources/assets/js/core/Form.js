import Errors from './Errors';
class Form {

	constructor(data) {
		this.original_data = data;
		this.errors = new Errors();
		this.is_loading = false;
		//Assign data fields directly as form fields
		//Loop through data object parameters
		for(let field in data) {
			this[field] = data[field];
		}
	} 

	//Retrieve dynamic form data fields only. I.E Form controls
	data() {
		let data = {};
		for (let property in this.original_data) {
			data[property] = this[property];
		}
		return data;
		//This method required manual removal of every other property within our Form object. Inefficient/ Cumbersome
		// let data = Object.assign({}, this);
		// delete data.original_data;
		// delete data.errors;
		// return data;
	}

	reset() {
		for(let field in this.original_data) {
			this[field] = '';
		}
		this.errors.clear();
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
		//Manually set up a promise. On success call resolve, on fail call reject so that we can have end user chain additional callbacks on the submit method
		return new Promise((resolve, reject) => {
			// console.log(this.data());
			axios[request_type](url, this.data())
				// .then(this.onSuccess.bind(this))
				.then(response => {
					this.onSuccess(response.data);
					//Says: Hey, the promise has been fulfilled. I have the data you requested, here it is
					resolve(response.data);
				})
				// .catch(this.onFail.bind(this));
				.catch(errors => {
					this.onFail(errors.response.data);
					reject(errors.response.data);
				});
		});
	}

	onSuccess(data) {
		// console.log(this);
		alert(data.message);
		this.reset();
		this.is_loading = false;
	}

	onFail(errors) {
		// console.log(errors.response);
		// console.log(errors.response.data);
		this.errors.record(errors);
		this.is_loading = false;
	}

}

export default Form;