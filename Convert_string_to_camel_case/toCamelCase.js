toCamelCase = (str) => str.replace(/[_-]([A-Za-z])/g, (match, p1) => p1.toUpperCase());

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));

/* Output */
theStealthWarrior
TheStealthWarrior
