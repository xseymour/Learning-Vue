
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key)))

Vue.component('example-component', require('./components/ExampleComponent.vue'));

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


//Shared source User. Single source of data being shared between multiple vue instances
let source = {
		user: {
			name: ''
		}
	}
axios.get('/getName').then(response => {
	source.user.name = response.data.name;
	console.log(response);
});

const one = new Vue({
    el: '#one',
    data: {
    	laracast_url: 'https://laracasts.com/series/learn-vue-2-step-by-step/episodes/24',
    	shared: source
    }
});

const two = new Vue({
    el: '#two',
    data: {
    	shared: source
    }
});
