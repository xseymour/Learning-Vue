var task_list = Vue.component('task-list', {
	template: `
	<div>
		<task v-for="a_task in tasklist_tasks">{{a_task.task}}</task>
	</div>
	`,
	data() {
		return {
			tasklist_tasks: [
				{task: 'Go to the store', complete: true},
				{task: 'Go to the bank', complete: false},
				{task: 'Go to the farm', complete: true},
				{task: 'Go to work', complete: false},
			],
		};
	},
});

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
		laracast_url_1: "https://laracasts.com/series/learn-vue-2-step-by-step/episodes/7",
		laracast_url_2: "https://laracasts.com/series/learn-vue-2-step-by-step/episodes/8",
	},
	methods : {

	},
	computed : {

	},
	mounted() {

	}
})
