function isPrime(num) {
	if(num <= 3) {
		return true;
	} else if( ! (num % 2) || ! (num % 3) ) {
		return false;
	}
	let i = 5;
	while(i * i <= num) {
		if( num % i === 0 || num % (i+2) === 0  ) {
			return false;
		} else {
			i = i + 6;
		}
	}
	return true;
}

function gap(g, m, n) {
	let first = 0;
	for( let i = m; i <= n; i++ ) {
		if( isPrime(i) ) {
			if(first) {
				if( i - first === g ) return [first, i];
				else first = i;
			} else {
				first = i;
			}
		}
	}
	return null;
}


console.log(gap(2,100,110), [101, 103]);
console.log(gap(4,100,110), [103, 107]);
console.log(gap(6,100,110), null);
console.log(gap(8,300,400), [359, 367]);
console.log(gap(10,300,400), [337, 347]);

/*
console.log(gap(2,100,110), [101, 103]);
console.log(gap(4,100,110), [103, 107]);
console.log(gap(6,100,110), null);
console.log(gap(8,300,400), [359, 367]);
console.log(gap(10,300,400), [337, 347]);
*/

