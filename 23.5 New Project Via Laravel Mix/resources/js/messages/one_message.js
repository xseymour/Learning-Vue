class OneMessage {
	constructor(message = 'One.JS Message') {
		this.message = message;
	}

	asAlert()
	{
		alert(this.message);
	}
}

export {OneMessage, foo};