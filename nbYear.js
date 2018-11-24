function nbYear(p0, percent, aug, p) {
	// your code
	let currPop = p0;
	let years = 0;
	while( currPop < p ) {
		currPop = currPop + (currPop*(percent/100)) + aug;
		years = years + 1;
	}
	return years;
}

/*
In a small town the population is p0 = 1000 at the beginning of a year. The
population regularly increases by 2 percent per year and moreover 50 new
inhabitants per year come to live in the town. How many years does the town
need to see its population greater or equal to p = 1200 inhabitants?

p0 -> initial population
percent -> percent yearly growth
aug -> inhabitants coming or leaving each year
p -> population to surpass

Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
*/


console.log('15', nbYear(1500, 5, 100, 5000));
console.log('10', nbYear(1500000, 2.5, 10000, 2000000));

/* Output
15 15
10 10
*/
