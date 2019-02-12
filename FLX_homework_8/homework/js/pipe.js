function pipe (val) {
	var result = val;
	for(var i = 1; i < arguments.length; i++) {
		console.log(i, result, arguments[i], arguments[i](result));
			result = arguments[i](result) ; 
	}
	return result;
}

function addOne(x) {
  return x + 1;
}
pipe(1, addOne);
pipe(1, addOne, addOne);