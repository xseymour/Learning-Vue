var card_modal = Vue.component('bulma-card-modal', {
	template: `
		<div class="modal is-active">
			<div class="modal-background"></div>
			<div class="modal-card">
				<header class="modal-card-head">
					<p class="modal-card-title">
						<slot name="header">slot="header"</slot>
					</p>
					<button class="delete" aria-label="close" @click="$emit('close-card-modal')"></button>
				</header>
				<section class="modal-card-body">
					<slot>Default Slot</slot>
				</section>
				<footer class="modal-card-foot">
					<slot name="footer">
						<button class="button is-success">Save changes</button>
						<button class="button">Cancel</button>
					</slot>
				</footer>
			</div>
		</div>
	`,
		//Custom Attributes of modal
	//props: [],
	props: {},
	//Cannot set data = an object, as a component is not linked to any single instance. Must set data = a function that returns an object
	data() {
		return {

		};
	},
	mounted() {
		
	},
	created() {

	},
	methods: {
		
	},
	computed: {
	},
});