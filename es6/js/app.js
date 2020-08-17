'use strict';

const TAX = 0.2;

function getTax() {
	return TAX;
}

class Helloworld{
	static pozdrav(...daco){
		let ahoj=(a,b) => b-a;
		console.log(ahoj(daco[2],daco[3]));
	}
}
Helloworld.pozdrav(1,4,3,5);

//let ahoj22=(a,b)=>a+b;
//console.log(ahoj22(2,3));
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