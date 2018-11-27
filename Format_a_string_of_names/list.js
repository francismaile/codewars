function list(names) {
	return names.reduce( (a, c, i) => a + (i===0 ? '' : (i==names.length-1 ? ' & ' : ', ') ) + c.name, '');
}

console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]), '::', 'Bart, Lisa, Maggie, Homer & Marge', "Must work with many names")
console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]), '::', 'Bart, Lisa & Maggie', "Must work with many names")
console.log(list([{name: 'Bart'},{name: 'Lisa'}]), '::', 'Bart & Lisa', "Must work with two names")
console.log(list([{name: 'Bart'}]), '::', 'Bart', "Wrong output for a single name")
console.log(list([]), '::', '', "Must work with no names")

/* Output */
Bart, Lisa, Maggie, Homer & Marge :: Bart, Lisa, Maggie, Homer & Marge Must work with many names
Bart, Lisa & Maggie :: Bart, Lisa & Maggie Must work with many names
Bart & Lisa :: Bart & Lisa Must work with two names
Bart :: Bart Output for a single name
 ::  Must work with no names
