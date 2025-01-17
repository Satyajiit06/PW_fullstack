function findDivisibleByThreeNotTwo(numbers) {
    console.log("Numbers divisible by 3 but not by 2:");
    for (let num of numbers) {
        if (num % 3 !== 0 || num % 2 === 0) {
            continue; // Skip the numbers that don't meet the criteria
        }
        console.log(num);
    }
}

// Example usage:
const numbers = [3, 6, 9, 12, 15, 18, 21, 25];
findDivisibleByThreeNotTwo(numbers);