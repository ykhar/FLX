function reverseNumber (num) {
	var str = num + '';
	for (var result = '', i = str.length - 1; i >= 0; i--) {
		if (str[i] === '-') {
			result = -result;
		} else {
			result += str[i];
		}
	}
	return +result;
}
reverseNumber(123); 
reverseNumber(-456); 
reverseNumber(10000); 
