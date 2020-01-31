// https://medium.com/javascript-in-plain-english/what-is-javascript-iife-f755f899ba0c

// Immediately-invoked Function Expression (IIFE)

// a normal function
(function(a, b) {
  return a * b;
})(8, 24);

// with arrow
((a, b) => {
  return a * b;
})(8, 24);

// extra shots
var name = "Sudhir";
{
  var name = "Sunny";
  console.log(name); // Sunny
}
console.log(name); // Sunny

// above code using let
let name2 = "Sudhir";
{
  let name2 = "Sunny";
  console.log(name2);
}
console.log(name2);
