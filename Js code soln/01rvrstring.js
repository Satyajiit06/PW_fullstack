// Variable storing the input string
let input = "Hello, World!";

// Function to reverse the string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Using setTimeout to delay the reversal by 2 seconds (2000 milliseconds)
setTimeout(() => {
  let reversedString = reverseString(input);
  console.log("Reversed string:", reversedString);
}, 2000);
