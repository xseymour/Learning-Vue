var tabs = Vue.component('tabs', {
	//Custom Attributes of modal
	props: [],
	template: `
		<div>
			<div class="tabs">
				<ul>
					<li v-for="tab in tabs" :class="{ 'is-active': tab.isActive == true }">
						<a :href="tab.href" @click="selectTab(tab)">{{tab.name}}</a>
					</li>
				</ul>
			</div>

			<div class="tabs-details">
				<slot></slot>
			</div>
		</div>
		
	`,
	//Cannot set data = an object, as a component is not linked to any single instance. Must set data = a function that returns an object
	data() {
		return {
			tabs : []
		};
	},
	mounted() {
		console.log(this.$children);
	},
	created() {
		this.tabs = this.$children;
	},
	
	methods: {
		selectTab(selected_tab) {
			// alert('selecting '+tab.name);
			this.tabs.forEach(tab => {
				tab.isActive = tab.name == selected_tab.name;
			});
		},
	},
});

var tab = Vue.component('tab', {
	template: `
	<div v-show="isActive">
		<slot></slot>
	</div>`,
	//Custom Attributes of modal
	props: {
		name: {required : true},
		selected: {default: false}
	},
	//Cannot set data = an object, as a component is not linked to any single instance. Must set data = a function that returns an object
	data() {
		return {
			isActive: false
		};
	},
	mounted() {
		this.isActive = this.selected;
	},
	methods: {

	},
	computed: {
		href() {
			//About Our culture
			return '#'+this.name.toLowerCase().replace(/ /g, '-');
		}
	}
});