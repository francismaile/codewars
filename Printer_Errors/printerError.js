function printerError(s) {
		return [...s].reduce( (errors, curr) => { return curr <= 'm' ? errors : errors += 1 } , 0 ) + '/' + s.length
}

console.log(printerError("aaabbbbhaijjjm"));
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"));

