var message = 'Hello World';
console.log(message);
// Annagram checker Function 
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output:
// [
//   ["eat", "tea", "ate"],
//   ["tan", "nat"],
//   ["bat"]
// ]
//Add Two Numbers and Return Equivalent Hexadecimal String
function addTwoNumbersAndReturnHex(num1, num2) {
    var sum = num1 + num2;
    return sum.toString(16);
}
// Example usage:
var hexResult = addTwoNumbersAndReturnHex(10, 16);
console.log(hexResult);
//  Good Morning Message with Optional Name// Output: "10f"
function greetingMessage(greet, name) {
    var vName = name ? ", ".concat(name) : '.';
    return greet + vName;
}
var greetMsg = greetingMessage("Good Morning ", "Archana");
console.log(greetMsg); // Output: "Good Morning Archana"
function calculate(add) {
    return add(5, 3);
}
