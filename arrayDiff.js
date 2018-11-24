function array_diff(a, b) {
	return a.filter( elem =>  ! b.includes(elem) );
}

let response;
response = array_diff([1,2,2,2,3],[2]);

console.log({response});

