let RomanNumerals = (function() {

	const romanDigits = {
		'M': 1000, 'CM': 900, 'D': 500, 'CD': 400,
		'C': 100, 'XC': 90, 'L': 50, 'XL': 40,
		'X': 10, 'IX': 9, 'V': 5, 'IV':4, 'I': 1
	}

	return {
		toRoman: function(number) {
			const romans = Object.entries(romanDigits);
			let i = 0;
			let quotient = 0;
			let remainder = 0;
			let romanNumeral = [];
			while( number > 0 ) {
				[roman, decimal] = romans[i];
				if( decimal <= number ) {
					quotient = Math.floor(number/decimal);
					remainder = number % decimal;
					number -= quotient * decimal;
					romanNumeral = [...romanNumeral,...Array(quotient).fill(roman)];
				}
				i++;
			}
			return romanNumeral.join('');
		},
		fromRoman: function(roman) {
			let decimal = 0;
			for( let i = 0; i < roman.length; i++ ) {
				if( i+1 < roman.length ) {
					if( romanDigits[roman[i]] >= romanDigits[roman[i+1]] ) {
						decimal += romanDigits[roman[i]];
					} else {
						decimal += romanDigits[roman[i+1]] - romanDigits[roman[i]] 
						i++;
					}
				} else {
					decimal += romanDigits[roman[i]];
				}
			}
			return decimal;
		}
	}
})();


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
