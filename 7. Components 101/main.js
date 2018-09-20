var task = Vue.component('task', {
	template: '<li><slot></slot></li>',
	//Cannot set data = an object, as a component is not linked to any single instance. Must set data = a function that returns an object
	data() {
		return {

		};
	}
});
var app = new Vue({
	el: '#root',
	data: {
		laracast_url: "https://laracasts.com/series/learn-vue-2-step-by-step/episodes/7"
	},
	methods : {

	},
	computed : {

	},
	mounted() {

	}
})
