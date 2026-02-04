let message: string = 'Hello World';
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
function addTwoNumbersAndReturnHex(num1: number, num2: number): string {
    const sum = num1 + num2;
    return sum.toString(16);
}

// Example usage:
const hexResult = addTwoNumbersAndReturnHex(10, 16);
console.log(hexResult); 

//  Good Morning Message with Optional Name// Output: "10f"

function greetingMessage(greet:string, name ?:string):string{
    const vName = name ? `, ${name}` : '.';

    return greet + vName;

}

const greetMsg = greetingMessage("Good Morning ","Archana");
console.log(greetMsg); // Output: "Good Morning Archana"

// implement this into code 
type AddFunction = (a: number, b: number) => number;

function calculate(add: AddFunction) {
  return add(5, 3);
}
