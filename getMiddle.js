function getMiddle(s) {
	return s.slice(Math.floor(s.length/2) + (s.length % 2) - 1, Math.floor(s.length/2) + 1);
}

function bgetMiddle(s) {
  //Code goes here!
	const middle = Math.floor(s.length/2);
	return s.slice(Math.floor(s.length/2) + (s.length % 2) - 1, Math.floor(s.length/2) + 1);
	if( s.length % 2 ) {
		return s.slice(middle, middle + 1);
	} else {
		return s.slice(middle - 1, middle + 1);
	}
}

// testing
// 1234567

console.log( 'test', getMiddle('test') );
console.log( 'testing', getMiddle('testing') );
console.log( 'middle', getMiddle('middle') );
console.log( 'A', getMiddle('A') );

/* Output

*/
