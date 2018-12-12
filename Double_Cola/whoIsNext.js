function whoIsNext(names, r) {
	let x = r, m = 1, q = 0;
	if(r <= names.length ) return names[r-1];
	while( x >= q ) {
		q = names.length * m;
		if( x-q < 0 ) break;
		x = x - q;
		m = m * 2;
	} 
	if( x % m !== 0 ) {
		return names[Math.floor(x/m)];
	} else {
		return names[(x/m)-1];
	}
}


console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 8786));
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 61));
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 84508451));
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 544555));
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 160551));
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 42239510));
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 71));
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 18684217));
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 9297905));
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1) ) // == "Sheldon"
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52) ) // == "Penny"
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951) ) // == "Leonard"

/* Output

Rajesh
Rajesh
Sheldon
Rajesh
Howard
Sheldon
Howard
Rajesh
Rajesh
Sheldon
Penny
Leonard
*/
