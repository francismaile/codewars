// a less over engineered solution
const RomanNumerals = {
	
	romanDigits:[
		['M', 1000], ['CM', 900], ['D', 500], ['CD', 400],
		['C', 100], ['XC', 90], ['L', 50], ['XL', 40],
		['X', 10], ['IX', 9], ['V', 5], ['IV',4], ['I', 1]
	],
	toRoman: function(integer) {
		let rom = '';
		this.romanDigits.forEach( ([roman, arabic]) =>{
			while( integer >= arabic ) {
				integer -= arabic;
				rom += roman;
			}
		});
		return rom;
	},
	fromRoman: function(rNum) {
		let int = 0;
		this.romanDigits.forEach( ([roman, arabic]) => {
			while( rNum.substring(0, roman.length) === roman ) {
				int += arabic;
				rNum = rNum.substring(roman.length);
			}
		});
		return int;
	}
};


console.log(RomanNumerals.toRoman(1000), 'M')
console.log(RomanNumerals.toRoman(999), "CMXCIX")
console.log(RomanNumerals.toRoman(4), 'IV')
console.log(RomanNumerals.toRoman(1), 'I')
console.log(RomanNumerals.toRoman(1991), 'MCMXCI')
console.log(RomanNumerals.toRoman(2006), 'MMVI')
console.log(RomanNumerals.toRoman(2020), 'MMXX')

console.log(RomanNumerals.fromRoman('XXI'), 21)
console.log(RomanNumerals.fromRoman('I'), 1)
console.log(RomanNumerals.fromRoman('III'), 3)
console.log(RomanNumerals.fromRoman('IV'), 4)
console.log(RomanNumerals.fromRoman('MMVII'), 2007)
console.log(RomanNumerals.fromRoman('MDCLXIX'), 1669)
/* Output
M M
CMXCIX CMXCIX
IV IV
I I
MCMXCI MCMXCI
MMVI MMVI
MMXX MMXX
21 21
1 1
3 3
4 4
2007 2007
1669 1669
*/
