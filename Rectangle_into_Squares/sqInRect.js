function sqInRect(lng, wdth){
  if(lng === wdth) return null;
	let squares = [];
	while( wdth > 0 ) {
		if( lng < wdth ) [lng, wdth] = [wdth,lng];
		squares.push(wdth);
		[lng, wdth] = [wdth, (lng * wdth - Math.pow(wdth, 2))/wdth];
	}
	return squares;
}

console.log(sqInRect(5, 5), null)
console.log(sqInRect(5, 3), [3, 2, 1, 1])
console.log(sqInRect(3, 5), [3, 2, 1, 1])
console.log(sqInRect(20, 14), [14, 6, 6, 2, 2, 2])


/* Output */
null null
[ 3, 2, 1, 1 ] [ 3, 2, 1, 1 ]
[ 3, 2, 1, 1 ] [ 3, 2, 1, 1 ]
[ 14, 6, 6, 2, 2, 2 ] [ 14, 6, 6, 2, 2, 2 ]
