let RomanNumerals = (function() {

	const romanDigits = {
		'M': 1000,
		'D': 500,
		'C': 100,
		'L': 50,
		'X': 10,
		'V': 5,
		'I': 1
	}

	let convertRoman = (num) => {
		return Object.entries(romanDigits).find( (elem) => {
			[key, value] = elem;
			// console.log( key );
			return num === value ? key : null;
		});
		// forEach( ([key, value] ) => console.log( {key}, {value} ) );
	}
	return {
		keys: function() {
			return Object.keys(romanDigits);
		},
		entries: function() {
			return Object.entries(romanDigits).forEach( ([key, value] ) => console.log( {key}, {value} ) );
		},
		toRoman: function(integer) {
			
		},
		fromRoman: function(roman) {
			let digital = 0;
			for( let i = 0; i < roman.length; i++ ) {
				if( i+1 < roman.length ) {
					if( romanDigits[roman[i]] >= romanDigits[roman[i+1]] ) {
						digital += romanDigits[roman[i]];
					} else {
						digital += romanDigits[roman[i+1]] - romanDigits[roman[i]] 
						i++;
					}
				} else {
					digital += romanDigits[roman[i]];
				}
			}
			return digital;
		}
	}
})();

// console.log(RomaonNumerals.keys());
// console.log(RomanNumerals.entries());
console.log(RomanNumerals.fromRoman('VIII'));

/* Output

*/
