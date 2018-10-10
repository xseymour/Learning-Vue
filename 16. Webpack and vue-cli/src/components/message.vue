<template>
	<article class="message" v-show="isVisible">
	  	<div class="message-header">
	    	{{title_content}}
		    <button @click="hideModal" class="delete" aria-label="delete"></button>
	  	</div>	
	  	<div class="message-body">
		     <slot>{{body}}</slot>
		</div>
	</article>
</template>

<script>
	export default {
		props: ['title', 'body'],
		data() {
			return {
				isVisible: true,
				title_content: this.title
			}
		},
		methods : {
			hideModal() {
				this.isVisible = false;
			}
		},
		created() {
			this.title_content = (typeof this.title === 'undefined') ? 'Message' : this.title;
		}
	}
</script>

<style>

</style>