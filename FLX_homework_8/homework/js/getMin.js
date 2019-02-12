function getMin() {
	for (var i = 0, res; i < arguments.length; i++) {
		if (res > arguments[i] || i === 0) {
			res = arguments[i];
		}
	console.log(arguments);
	}  
}
getMin(3, 0, -3);