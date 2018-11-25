function findNextSquare(sq) {
	const root = Math.sqrt(sq);
	if(Number.isInteger(root)) return Math.pow(root + 1, 2);
  return -1;
}

console.log('144', findNextSquare(121)); 
console.log('676', findNextSquare(625));
console.log('-1', findNextSquare(114));

