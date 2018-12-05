webpackJsonp([0],{

/***/ 11:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
	template: '<h1>Hello World</h1>'
};

/***/ },

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Errors__ = __webpack_require__(30);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Form = function () {
	function Form(data) {
		_classCallCheck(this, Form);

		this.original_data = data;
		this.errors = new __WEBPACK_IMPORTED_MODULE_0__Errors__["a" /* default */]();
		this.is_loading = false;
		//Assign data fields directly as form fields
		//Loop through data object parameters
		for (var field in data) {
			this[field] = data[field];
		}
	}

	//Retrieve dynamic form data fields only. I.E Form controls


	_createClass(Form, [{
		key: 'data',
		value: function data() {
			var data = {};
			for (var property in this.original_data) {
				data[property] = this[property];
			}
			return data;
			//This method required manual removal of every other property within our Form object. Inefficient/ Cumbersome
			// let data = Object.assign({}, this);
			// delete data.original_data;
			// delete data.errors;
			// return data;
		}
	}, {
		key: 'reset',
		value: function reset() {
			for (var field in this.original_data) {
				this[field] = '';
			}
			this.errors.clear();
		}
	}, {
		key: 'post',
		value: function post(url) {
			return this.submit('post', url);
		}
	}, {
		key: 'put',
		value: function put(url) {
			return this.submit('put', url);
		}
	}, {
		key: 'patch',
		value: function patch(url) {
			return this.submit('patch', url);
		}
	}, {
		key: 'delete',
		value: function _delete(url) {
			return this.submit('delete', url);
		}
	}, {
		key: 'submit',
		value: function submit(request_type, url) {
			var _this = this;

			this.is_loading = true;
			//Manually set up a promise. On success call resolve, on fail call reject so that we can have end user chain additional callbacks on the submit method
			return new Promise(function (resolve, reject) {
				// console.log(this.data());
				axios[request_type](url, _this.data())
				// .then(this.onSuccess.bind(this))
				.then(function (response) {
					_this.onSuccess(response.data);
					//Says: Hey, the promise has been fulfilled. I have the data you requested, here it is
					resolve(response.data);
				})
				// .catch(this.onFail.bind(this));
				.catch(function (errors) {
					_this.onFail(errors.response.data);
					reject(errors.response.data);
				});
			});
		}
	}, {
		key: 'onSuccess',
		value: function onSuccess(data) {
			// console.log(this);
			alert(data.message);
			this.reset();
			this.is_loading = false;
		}
	}, {
		key: 'onFail',
		value: function onFail(errors) {
			// console.log(errors.response);
			// console.log(errors.response.data);
			this.errors.record(errors);
			this.is_loading = false;
		}
	}]);

	return Form;
}();

/* harmony default export */ exports["a"] = Form;

/***/ },

/***/ 30:
/***/ function(module, exports, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Errors = function () {
	function Errors() {
		_classCallCheck(this, Errors);

		this.errors = {};
	}
	/**
  * @param  {string}
  * @return {Boolean}
  */


	_createClass(Errors, [{
		key: "has",
		value: function has(field) {
			// return typeof this.errors[field] != 'undefined';
			return this.errors.hasOwnProperty(field);
		}
	}, {
		key: "any",
		value: function any() {
			return Object.keys(this.errors).length > 0;
		}
	}, {
		key: "get",
		value: function get(field) {
			if (this.errors[field]) {
				return this.errors[field][0];
			}
		}
	}, {
		key: "record",
		value: function record(errors) {
			this.errors = errors;
		}
	}, {
		key: "clear",
		value: function clear(field) {
			// this.errors[field] = [];
			if (field) {
				delete this.errors[field];
			} else {
				this.errors = {};
			}
		}
	}]);

	return Errors;
}();

/* harmony default export */ exports["a"] = Errors;

/***/ },

/***/ 34:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_Form__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Example__ = __webpack_require__(11);

/**
 * import global objects vue and axios. 
 * This way, in any file we dont have to import these objects, can just start using them
 */





window.axios = __WEBPACK_IMPORTED_MODULE_1_axios___default.a;
window.Form = __WEBPACK_IMPORTED_MODULE_2__core_Form__["a" /* default */];

var form_instance = new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
	el: '#root',
	components: {
		Example: __WEBPACK_IMPORTED_MODULE_3__components_Example__["a" /* default */] //<example></example>
	},
	data: {
		form: new __WEBPACK_IMPORTED_MODULE_2__core_Form__["a" /* default */]({
			name: '',
			description: ''
		})
	},
	methods: {
		onSubmit: function onSubmit() {
			this.form.post('/projects').then(function (data) {
				return console.log(data);
			}).catch(function (errors) {
				return console.log(errors);
			});
		}
	},
	computed: {},
	mounted: function mounted() {},
	created: function created() {}
});

/***/ }

},[34]);