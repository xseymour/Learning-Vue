var modal = Vue.component('bulma-modal', {
	//Custom Attributes of modal
	props: [],
	template: `
	<div class="modal is-active">
		<div class="modal-background"></div>
	  	<div class="modal-content">
	  		<div class="box" style="text-align: center;">
	  			<slot></slot>
	  		</div>
	  	</div>
	  	<button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
	</div>
	`,
});