
countBits = (n) => {
	const b = n.toString(2).split('');
	return n.toString(2).split('').reduce( (a, c)  => a + ((c === '1') & 1), 0 );
}

console.log('1234', countBits(1234));
console.log('4', countBits(4));
console.log('7', countBits(7));
console.log('9', countBits(9));
console.log('10', countBits(10));

/* Output

*/
