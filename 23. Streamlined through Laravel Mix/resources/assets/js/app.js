import Vue from 'vue';
/**
 * import global objects vue and axios. 
 * This way, in any file we dont have to import these objects, can just start using them
 */
import axios from 'axios';
import Form from './core/Form';

import Example from './components/Example'; 

window.axios = axios;
window.Form = Form;

var form_instance = new Vue({
	el: '#root',
	components: {
		Example //<example></example>
	},
	data: {
		form: new Form({
			name: '',
			description: '',
		}),
	},
	methods : {
		onSubmit() {
			this.form.post('/projects')
				.then(data => console.log(data))
				.catch(errors => console.log(errors));
		}
	},
	computed : {

	},
	mounted() {

	},
	created() {

	},
});