function findEvenIndex(arr) {
	let index = 0;
	let left = 0;
	let arrSum = (array) => array.reduce( (sum, curr) => sum + curr, 0);
	let right = arrSum(arr.slice(index+1));
	while( left !== right && index <= arr.length) {
		index = index + 1;
		left = arrSum(arr.slice(0,index));
		right = arrSum(arr.slice(index+1));
		console.log({left}, {right}, {index}, 'at index:', arr[index]);
	}
	console.log({left}, {right});
	if( index >= arr.length ) return -1;
	return index;
}

console.log('0', findEvenIndex([20,10,-80,10,10,15,35]));
console.log('3', findEvenIndex([1,2,3,4,3,2,1]));
console.log('1', findEvenIndex([1,100,50,-51,1,1]));
console.log('-1', findEvenIndex([1,2,3,4,5,6]));
console.log('3', findEvenIndex([20,10,30,10,10,15,35]));


