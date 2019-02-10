'use strict';
var login = prompt('Login:');

if (login === 'User' || login === 'Admin') {
	var password = prompt('Your password:'); 
	if (login === 'User' && password === 'UserPass' || login === 'Admin' && password === 'RootPass') {
		var date = new Date().getHours();
		if (login === 'User' && date < 20) {
			alert('Good day, dear User!');
		} else if (login === 'Admin' && date < 20) {
			alert('Good day, dear Admin!');
		} else if (login === 'User' && date >= 20) {
			alert('Good evening, dear User!');
		} else if (login === 'Admin' && date >= 20) {
			alert('Good evening, dear Admin!');
		}
	} else if (password === '') {
		alert('Canceled');
	} else {
		alert('Wrong password'); 
	}
} else if (!login) {
  alert('Canceled');
} else if (login.length < 4) {
  alert('I don\'t know any users having name length less than 4 symbols');
} else {
	alert('I don\'t know you');
}