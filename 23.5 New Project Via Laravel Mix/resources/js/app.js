/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import Vue from 'vue';
import axios from 'axios';
import * as _ from 'lodash';

window.Vue = new Vue();
window.axios = axios;
window._ = _;


//Pull in bundled file created by webpack -------------------------------
// require('../../public/js/one_plus_two.js'); //commonjs
// import {require_equiv} from '../../public/js/one_plus_two.js'; //es6+. Babel compiles this down to commonjs
import {OneMessage} from './messages/one_message.js'; //es6+
// new OneMessage().asAlert();
//END: Pull in bundled file created by webpack --------------------------

//Importing functions/arrays/objects/classes from files -----------------
//Method 1:
import {sumTwo as addTwoNumbers, sumThree} from './addition.js';
console.log(addTwoNumbers(2,3));
console.log(sumThree(2,3,4));

// Method 2
import * as addition from './addition.js';
console.log(addition.sumTwo(2,3));
console.log(addition.sumThree(5,6,7));
//END: Importing functions/arrays/objects/classes from files ------------


//Using Lodash ----------------------------------------------------------
import data_class, {foo} from './data/users.js'; //Because we exported as default, no need to use {} around imported objects, as there is only one by default
var data_instance = new data_class();
console.log(_.find(data_instance.getUsers(), o => (o.age < 40) && (o.active == true)));
console.log(foo);

//END: Using Lodash -----------------------------------------------------


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key)))

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import Notification from './components/Notification.vue';

var app = new Vue({
	el: '#root',
	components: {
    	Notification
    },
	data: {
		laracast_url: 'https://laracasts.com/series/learn-vue-2-step-by-step/episodes/23',
	},
	methods : {

	},
	computed : {

	},
	mounted() {

	},
	created() {

	},
});

