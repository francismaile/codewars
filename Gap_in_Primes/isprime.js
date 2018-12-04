function isPrime(num) {
	// console.log( 'test: ', num % 2);
	// console.log( 'full test: ',   ! (num % 2) || ! (num % 3) );
	if(num <= 3) {
	// console.log({num});
		return true;
	} else if( ! (num % 2) || ! (num % 3) ) {
		return false;
	}

	let i = 5;
	while(i * i <= num) {
		if(!(num % i || num % i+2)) {
			return false;
		} else {
			i = i + 6;
		}
	}
	return true;
}

function gap(g, m, n) {
	const primes = [];
	for( let i = 2; i <= n; i++ ) {
		if(isPrime(i)) primes.push(i);
	}
	return primes;
}

console.time('test');
console.log(gap(3,2,550));
console.timeEnd('test');

