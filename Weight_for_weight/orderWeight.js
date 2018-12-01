function orderWeight(strng) {
	if(strng.length ===0) return '';
	let wghts = strng.match(/(\d+)/gi);
	const numWght = (wghtStr) => wghtStr.split('').reduce( (a, c) => a + parseInt(c), 0);
	return wghts.sort( (a, b) => {
		const aWght = numWght(a);
		const bWght = numWght(b);
		if( aWght === bWght) {
			if( a < b ) {
				return -1;
			} else if( a > b ) {
				return 1;
			} else {
				return 0;
			}
		} else {
			return aWght - bWght;
		}
	}).join(' ');
}

console.log(orderWeight("103 123 4444 99 2000"), '|',  "2000 103 123 4444 99")
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"), '|',  "11 11 2000 10003 22 123 1234000 44444444 9999")
console.log(orderWeight("272330 28 132540 112 129254 93 480526 163 4386 155 98299 28 255670 176 417445 98 305247 149 97747 38 61"), '|', '112 61 163 28 28 155 38 93 149 176 132540 272330 98 305247 4386 129254 255670 417445 480526 97747 98299');
console.log(orderWeight("284543 70 73505 133 3393 89 394354 119 124658 70 4494 139 296843 77 488879 70 401714 158 313015 45 5"), '|', '5 133 70 70 70 45 119 139 313015 158 77 401714 89 3393 73505 4494 124658 284543 394354 296843 488879');

