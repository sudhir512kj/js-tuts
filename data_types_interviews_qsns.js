// https://medium.com/@hohanga/javascript-interview-questions-data-types-94baf528374b
// Data types interview questions

// Falsy values - '', 0, null, undefined, false, NaN

// check if a value if falsy
console.log(!!0); /* false */

console.log(Boolean(0)); /* false */

// Other than falsy values are truthy values

// Wrapper objects
// Number, String constructors, and Symbol, and BigInt are factory functions
const numObj = new Number(1);
const strObj = new String("Sudhir");

// get primitive value from wrapper objects
console.log(numObj.valueOf());
console.log(strObj.valueOf());

// JS coercion rules
// https://delapouite.com/ramblings/javascript-coercion-rules.html

console.log(0 || 1); /* 1 */
console.log(0 && 1); /* 0 */
console.log(false == "0"); /* true */
console.log(4 < 5 < 6); /* true */
console.log(6 > 5 > 4); /* false */
console.log(typeof undefined == typeof null); /* false */
console.log(typeof typeof 10); /* string */
