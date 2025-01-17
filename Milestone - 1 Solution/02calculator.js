function calculator(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            console.log(`Result: ${result}`);
            break;
        case '-':
            result = num1 - num2;
            console.log(`Result: ${result}`);
            break;
        case '*':
            result = num1 * num2;
            console.log(`Result: ${result}`);
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
                console.log(`Result: ${result}`);
            } else {
                console.log("Error: Division by zero is not allowed.");
            }
            break;
        default:
            console.log("Invalid operator");
    }
}

// Example usage:
calculator(10, 5, '+');  // Output: Result: 15
calculator(10, 5, '-');  // Output: Result: 5
calculator(10, 5, '*');  // Output: Result: 50
calculator(10, 5, '/');  // Output: Result: 2
calculator(10, 0, '/');  // Output: Error: Division by zero is not allowed.
calculator(10, 5, '%');  // Output: Invalid operator
