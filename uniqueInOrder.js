// usage example:

// function  uniqueInOrder(iterable) { 
// 	return [].filter.call(iterable, (elem, ind, arr) => arr.indexOf(elem) === ind);
// }
// 
// function  uniqueInOrder(iterable) { 
// 	if( !Array.isArray(iterable) ) { iterable = iterable.split(''); }
// 	return iterable.filter( (elem, ind, arr) => arr.indexOf(elem) === ind);
// }

// function  uniqueInOrder(iterable) {
// 	if( !Array.isArray(iterable) ) { iterable = iterable.split(''); }
// 	return iterable.reduce( (acc, curr, ind, arr) => { 
// 		if (arr[ind+1] !== curr) acc.push(curr) 
// 		return acc;
// 	}, [] );
// }

var uniqueInOrder = function (iterable)
{
  return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));
}

let unique;
unique = uniqueInOrder('AAAABBBCCDAABBB') // == ['A', 'B', 'C', 'D', 'A', 'B']
console.log(unique);
unique = uniqueInOrder('ABBCcAD')         // == ['A', 'B', 'C', 'c', 'A', 'D']
console.log(unique);
unique = uniqueInOrder([1,2,2,3,3])       // == [1,2,3]
console.log(unique);


