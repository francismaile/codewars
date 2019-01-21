function getPINs(observed) {
  // TODO: This is your job, detective!
	let keys = [];
	const alternatives = [ ['8'], ['2', '4'], ['1', '3', '5'], ['2', '6'], ['1', '5', '7'], ['2', '4', '6', '8'], ['3', '5', '9'], ['4', '8'], ['5', '7', '9',  '0'], ['6', '8'] ];

	// get all possible key presses
	[...observed].forEach( cur => keys.push([cur,...alternatives[parseInt(cur)]]) );

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
