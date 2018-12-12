
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

Vue.component('coupon', {
	props: ['value'], //MUST USE VALUE on a cumstom component that uses v-model
	data() {
		return {
			code: '',
			expired: [
				'free', 'expired'
			],
			valids: [
				'discount' , 'valid'
			]
		}
	},
	template: `
		<div>
			<label for='coupon_component'>Using v-model on an input within a component:</label>
			<a href="https://vuejs.org/v2/guide/components-custom-events.html#Customizing-Component-v-model" target="_blank">Vue Docs</a><br/>

			<input id='coupon_component' v-bind:value='value' @input="updateValue($event.target.value)" v-on:keyup.13="checkCoupon()" ref="coupon_input" >
			<button @click="checkCoupon()">Submit Coupon</button>
		</div>
	`,
	methods: {
		updateValue(code) {
			this.code = code;
			this.$emit('invalid');
			//Emit
			this.$emit('input', code);
		},
		checkCoupon() {
			//Do any sanitization, then emit an input event so parent coupon can handle updating data through v-model two way bind
			//Sanitization / Validation
			if(this.valids.includes(_.lowerCase(this.code))) {
				alert('Valid Coupon! Discount will be applied!');
				// $(this.$refs.coupon_input).addClass('valid_coupon');
				this.$emit('valid');
				return;
			} else {
				if (_.indexOf(this.expired, _.lowerCase(this.code)) != -1) {
					alert('This coupon is expired. Sorry!');
				} else {
					alert('Invalid Coupon Code');
				}
				this.$emit('input', '');
				this.$refs.coupon_input.focus();
			}
		}
	},
	mounted() {
		this.code = this.value;
	}
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    data: {
        laracast_url: 'https://laracasts.com/series/learn-vue-2-step-by-step/episodes/25?autoplay=true',
        coupon: 'FREEBIE',
        code_is_valid: false
    }
});
