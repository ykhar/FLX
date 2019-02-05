'use strict';

let amount = +prompt('Input amount of money');
let discount = +prompt('Input your discount');

if (amount < 9999999 && amount > 0 && discount < 99 && discount > 0) {
	let savedMoney = (amount * discount) / 100;
	let priceWithDiscount = amount - savedMoney;

	savedMoney = +savedMoney.toFixed(2);
	priceWithDiscount = +priceWithDiscount.toFixed(2);

	alert(`
	Price without discount: ${amount} \n
	Discount: ${discount}% \n
	Price with discount: ${priceWithDiscount} \n
	Saved money: ${savedMoney} \n`
	);
} else {
  alert('Invalid input data');
}
