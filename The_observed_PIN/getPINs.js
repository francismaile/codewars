function getPINs(observed) {
  // TODO: This is your job, detective!
	let keys = Array(observed.length);

	// get all possible key presses
	[...observed].forEach( (cur, idx) => {
		keys[idx] = [];
		const x = parseInt(cur);
		if( !keys[idx].includes(x) ) keys[idx].push(x);
		if( x === 0 && !keys.includes(8)  ) {
			keys[idx].push(8);
		} else {
			if( x === 8 && !keys[idx].includes(0) ) keys[idx].push(0);
			if( x % 3 > 0 && !keys[idx].includes(x+1) ) keys[idx].push( x + 1 );
			if( x % 3 === 0 || x % 3 === 2 && !keys[idx].includes(x-1) ) keys[idx].push(x - 1);
			if( x <= 6 && !keys[idx].includes(x+3) ) keys[idx].push(x + 3);
			if( x > 3 && !keys[idx].includes(x-3) ) keys[idx].push(x - 3);
		}
	});
	// convert to strings
	keys = keys.map( keyChoices => keyChoices.map(String) );
	// return keys;

	let variations = [[]];
	for( i = 0; i < keys.length; i++ ) {
		let currentSubArray = keys[i];
		let temp = [];
		for( j = 0; j < variations.length; j++ ) {
			for( k = 0; k < currentSubArray.length; k++ ) {
				temp.push( variations[j] + currentSubArray[k] );
			}
		}
		variations = temp;
	}
	return variations;
}

console.log('8', getPINs('8') );
console.log('11', getPINs('11') );
console.log('369', getPINs('369') );


