/*
I love this solution. It's beautiful. 
https://www.codewars.com/kata/reviews/5266876c8f4bf2da9b000365/groups/564ab2ff633fa181490000b7

What they did was return an object constructed of the templates and accessed using the 
length of the names array (or 4 if length > 4) to choose which to return.

For example: likes(['Jacob', 'Alex']) returns {}[2]

*/

function likes(names) {
  return {
    0: 'no one likes this',
    1: `${names[0]} likes this`, 
    2: `${names[0]} and ${names[1]} like this`, 
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
  }[Math.min(4, names.length)]
}

console.log(likes([]));
console.log(likes(['Peter']));
console.log(likes(['Jacob', 'Alex']));
console.log(likes(['Max', 'John', 'Mark']));
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));

