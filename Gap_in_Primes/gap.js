function gap(g, m, n) {
	let primes = Array.from({ length: (n - 2) }, (_, i) => 2 + i);
	// sieve of eratosthenes
	let p = 2;
	let index = 0;
	while( index <= n && index >= 0 ) {
		for( let i = index; i <= n; i += p) {
			if( primes[i] !== p) primes[i] = 0;
		}
		index = primes.findIndex( num => num > p );
		p = primes[index];
	}

	primes =  primes.filter( num => num > 0 );
	primes = primes.slice(primes.findIndex(e => e >= m) )
	index = primes.findIndex( (e, i, a) => a[i+1] - e === g );

	return index < 0 ? null : [primes[index], primes[index+1]];
}

console.log(gap(10,300,400), [337, 347]);

/*

console.log(gap(2,100,110), [101, 103]);
console.log(gap(4,100,110), [103, 107]);
console.log(gap(6,100,110), null);
console.log(gap(8,300,400), [359, 367]);
console.log(gap(10,300,400), [337, 347]);
*/

