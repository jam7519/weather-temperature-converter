//James Weather

// This variable Kelvin will be constant
const kelvin = 293;
// convert Kelvin to Celsius by subtracting 273
let celsius = kelvin -273;
// Use this equation to calcualte Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
//Round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);
// Log the temperature in Fahrenheitusing string interpolation
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
// Extra Task Convert celsius to Newton scale
let newton = celsius * (33 / 100);
// Round down Newton temperature
newton = Math.floor(newton);
// Log Newton temperature
console.log(`The temperature is ${newton} degrees Newton.`);
