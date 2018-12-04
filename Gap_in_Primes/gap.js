function gap(g, m, n) {
	const range = (start, stop, step) => Array.from({ length: (stop - start) / step }, (_, i) => start + (i * step));
	let primes = range(2, n, 1);
	let p = 2;
	for( let i = p; i <= n; i += p) {
		primes[i] = 0;
	}
	p = p + primes.slice(p).findIndex( num => num > 0 );
	console.log({p}, 'primes[p]', primes[p]);
	return 'done';
	return primes;
}

// console.time('test');
console.log(gap(2, 1, 100));
// console.timeEnd('test');

/*
1. Create a list of consecutive integers from 2 through n: (2, 3, 4, ..., n).
2. Initially, let p equal 2, the smallest prime number.
3. Enumerate the multiples of p by counting in increments of p from 2p to n,
	and mark them in the list (these will be 2p, 3p, 4p, ...; the p itself should
	not be marked).
4. Find the first number greater than p in the list that is not marked. If
	there was no such number, stop. Otherwise, let p now equal this new number
	(which is the next prime), and repeat from step 3.
5. When the algorithm terminates, the numbers remaining not marked in the list
	are all the primes below n.

console.log(gap(2,100,110), [101, 103]);
console.log(gap(4,100,110), [103, 107]);
console.log(gap(6,100,110), null);
console.log(gap(8,300,400), [359, 367]);
console.log(gap(10,300,400), [337, 347]);
*/

