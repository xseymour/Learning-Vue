var message = Vue.component('bulma-message', {
	//Custom Attributes of modal
	props: ['title', 'body'],
	template: `
	<article class="message" v-show="isVisible">
	  	<div class="message-header">
	    	{{title}}
		    <button @click="hideModal" class="delete" aria-label="delete"></button>
	  	</div>	
	  	<div class="message-body">
		    {{body}}
		</div>
	</article>
	`,
	//Cannot set data = an object, as a component is not linked to any single instance. Must set data = a function that returns an object
	data() {
		return {
			isVisible: true
		}
	},
	methods: {
		hideModal() {
			this.isVisible = false;
		},
	},
});

