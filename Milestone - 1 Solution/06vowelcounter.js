function countVowels(name) {
    let vowels = "aeiouAEIOU"; // Define the vowels (both uppercase and lowercase)
    let count = 0;

    for (let char of name) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    console.log(`The number of vowels in the name is: ${count}`);
    return count;
}

// Example usage:
const userName = "Alexanderii";
countVowels(userName); // Output: The number of vowels in the name is: 6
