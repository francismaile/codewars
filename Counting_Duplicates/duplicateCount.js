function duplicateCount(text){
	let str = text;
	let count = 0;
	let dupes = 0;
	do {
		const regex = new RegExp(str[0], 'gi')
		str = str.replace( RegExp(str[0], 'gi'), (match) => {
			count++;
			return '';
		});
		dupes += (count > 1) & 1;
		count = 0;
	} while(str.length);
	return dupes;
}

console.log(duplicateCount('abcde'));
console.log(duplicateCount('aabbcde'));
console.log(duplicateCount('aabBcde'));
console.log(duplicateCount('indivisibility'));
console.log(duplicateCount('Indivisibilities'));
console.log(duplicateCount('aA11'));
console.log(duplicateCount('ABBA'));

/* Output */
0
2
2
1
2
2
2
