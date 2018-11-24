function digPow(n, p){
	let exp = p;
	const sumOfPows = Array.from(String(n), Number).reduce( (acc, curr) => acc + Math.pow(curr, exp++), 0);
	return sumOfPows % n ? -1 : sumOfPows/n;
}


console.log('1', digPow(89,1));
console.log('-1',digPow(92,1));
console.log('2',digPow(695,2));
console.log('51',digPow(46288,3));

