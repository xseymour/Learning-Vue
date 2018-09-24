//Root Vue instance. Because every vue instance can emit ($emit) and listen ($on), we create a shared vue instance to handle cross component communication
window.vueEvent = new Vue();

//Wrapper for vue instance in custom class to define 'fire' and 'listen' methods to be used insteas of $emit, and $on
//ES2015 class syntax. Should be compiled down using webpack/browserify/rollup to work with older browsers
// window.vueEvent = new class {
// 	contructor() {
// 		this.vue = new Vue();
// 	}

// 	fire(event, data = null) {
// 		this.vue.$emit(event, data);
// 	}

// 	listen(event, callback) {
// 		this.vue.$on(event, callback);
// 	}
// }

var coupon = Vue.component('coupon', {
	template: `<input placeholder="Enter your coupon code" @blur="onCouponApplied">`,	
	methods: {
		onCouponApplied() {
			vueEvent.$emit('applied');
			// vueEvent.fire('applied');
		} 
	}
});

var app = new Vue({
	el: '#root',
	data: {
		laracast_url: 'https://laracasts.com/series/learn-vue-2-step-by-step/episodes/12',
		laracast_url_2: 'https://laracasts.com/series/learn-vue-2-step-by-step/episodes/13',
		couponApplied: false,
	},
	methods : {
		onCouponApplied() {
			// alert('It was applied!');
			this.couponApplied = true;
		}
	},
	created() {
		vueEvent.$on('applied', () => this.couponApplied = true);
		// vueEvent.listen('applied', () => alert('Handling it!'));
	}
});