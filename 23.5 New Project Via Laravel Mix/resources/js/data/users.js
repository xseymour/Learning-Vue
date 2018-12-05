/**
 * exporting default results in non-strict naming import. Meaning you can name resulting class whatever you like on import
 * NOTE: You can also export other things in addition to default export. Just be sure to only have 1 default
 */
export default class {
	constructor() {
		this.users = [
		  	{ 'user': 'barney', 'age': 36, 'active': false, 'pets': ['hoppy']},
			{ 'user': 'fred', 'age': 40, 'active': true, 'pets': ['baby puss', 'dino'] },
			{ 'user': 'pebbles', 'age': 1, 'active': true, 'pets': ['baby puss', 'dino'] }
		];
	}
	/**
	 * Retrieve base user data array
	 * @return {array}
	 */
	getUsers() {
		return this.users;
	}
}
export let foo = 'bar';
