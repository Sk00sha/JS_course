'use strict';

const TAX = 0.2;

function getTax() {
	return TAX;
}

class Helloworld{
	static pozdrav(...daco){
		let ahoj=daco.sort((a,b) => a-b);
		return ahoj;
	}
}
console.log(Helloworld.pozdrav(1,3,2,4));
/**
 * @class SexyNumbers
 */
class SexyNumbers {

	static multiMax(first,...theRest) {
		let sorted = theRest.sort( (a, b) => b - a ),
			max= sorted[0];
		console.log(max,sorted);
	}

}

/**
 * @class SexierNumbers
 * @extends {SexyNumbers}
 */
class SexierNumbers extends SexyNumbers {

	static discount( price, percent = 100 / 10, tax = getTax() ) {
		price = price - ( price * percent / 100 );
		price = price - ( price * tax );
		return price.toFixed(2);
	}

}


console.log(
	SexierNumbers.discount(100)
);