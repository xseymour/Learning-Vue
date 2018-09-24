var coupon = Vue.component('coupon', {
	template: `<input placeholder="Enter your coupon code" @blur="onCouponApplied">`,	
	methods: {
		onCouponApplied() {
			this.$emit('applied');
		} 
	}
});

var app = new Vue({
	el: '#root',
	data: {
		laracast_url: 'https://laracasts.com/series/learn-vue-2-step-by-step/episodes/12',
		couponApplied: false,
	},
	methods : {
		onCouponApplied() {
			// alert('It was applied!');
			this.couponApplied = true;
		}
	},
});