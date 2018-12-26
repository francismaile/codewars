// using Kadane’s algorithm
const maxSequence = function(arr) {
	let maxSoFar = 0, maxToHere = 0;
	for( let i = 0; i <= arr.length; i++ ) {
		maxToHere += arr[i];
		if( maxToHere < 0 ) {
			maxToHere = 0;
		}
		if( maxToHere > maxSoFar ) {
			maxSoFar = maxToHere;
		}
	}
	return maxSoFar;
}

console.log( maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);

/* Output
6 6
*/
