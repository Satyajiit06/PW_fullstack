function printInvertedTriangle(rows) {
    for (let i = rows; i > 0; i--) {
        console.log("*".repeat(i));
    }
}

// Example usage:
const rows = 6;
printInvertedTriangle(rows);