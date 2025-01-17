function findHighestMarks(marks) {
    let highest = marks[0]; // Assume the first mark is the highest initially

    for (let i = 1; i < marks.length; i++) {
        // Update highest if the current mark is greater
        highest = marks[i] > highest ? marks[i] : highest;
    }

    console.log(`The highest marks scored by a student is: ${highest}`);
}

// Example usage:
const marks = [85, 91, 78, 90,71];
findHighestMarks(marks);
