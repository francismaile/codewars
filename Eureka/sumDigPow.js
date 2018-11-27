const sumDigPow = (a, b) => 
		Array(b-a+1).fill(a)
		.map((x, y) => x + y)
		.filter( (c, i) => ( c === c.toString().split('')
		.reduce( (a, c, i) => a = a + Math.pow(parseInt(c), i+1), 0) )
		);

// I just couldn't resist trying to do this one as a one-liner

console.log(sumDigPow(1,10));
console.log(sumDigPow(80,100));
console.log(sumDigPow(313,2062));

/* Output */
[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
[ 89 ]
[ 518, 598, 1306, 1676 ]
