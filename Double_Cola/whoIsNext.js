function whoIsNext(names, r) {
  let colaQueue = Array(names.length).fill(1).map( (e, i) => e + i);
	let moving = 0;
	for( let i = 1; i < r; i++ ){
		moving = colaQueue.shift();
		colaQueue.push(moving, moving);
	}
	return names[colaQueue[0] - 1];
}

console.log(whoIsNext( ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52 ) );

/* Output


*/
