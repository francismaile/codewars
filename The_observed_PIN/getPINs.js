function getPINs(observed) {
  // TODO: This is your job, detective!
	let keys = [];
	let variations = [];

	// get all possible key presses
	[...observed].forEach( cur => {
		const x = parseInt(cur);
		if( !keys.includes(x) ) keys.push(x);
		if( x === 0 && !keys.includes(8)  ) {
			keys.push(8);
		} else {
			if( x === 8 && !keys.includes(0) ) keys.push(0);
			if( x % 3 > 0 && !keys.includes(x+1) ) keys.push( x + 1 );
			if( x % 3 === 0 || x % 3 === 2 && !keys.includes(x-1) ) keys.push(x - 1);
			if( x <= 6 && !keys.includes(x+3) ) keys.push(x + 3);
			if( x > 3 && !keys.includes(x-3) ) keys.push(x - 3);
		}
	});
	// convert to strings
	keys = keys.map(String);
	return keys;

	// produce all possible permutations
	for( let i = 0; i < keys.length; i++ ) {
		for( let n = 0; n < keys.length; n++ ) {
			variations.push( keys[i] + keys[n] );
		}
	}
	return variations;
}

// console.log('8', getPINs('8') );
// console.log('11', getPINs('11') );
console.log('369', getPINs('369') );
// console.log('1057', getPINs('1057') );
// console.log('1357', getPINs('1357') );

/* Output
*/
