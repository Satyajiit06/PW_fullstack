function splitBill(dishCosts, numberOfPeople) {
    // Calculate the total bill by summing up the dish costs
    const totalBill = dishCosts.reduce((sum, cost) => sum + cost, 0);

    // Calculate the bill per person
    const billPerPerson = totalBill / numberOfPeople;

    // Return an object with the total bill and bill per person
    return {
        totalBill,
        billPerPerson,
    };
}

// Example usage:
const dishCosts = [200, 150, 300, 400]; // Cost of each dish
const numberOfPeople = 4;

const billDetails = splitBill(dishCosts, numberOfPeople);

console.log(`Total Bill: Rs. ${billDetails.totalBill}/-`);
console.log(`Bill Per Person: Rs. ${billDetails.billPerPerson.toFixed(2)}/-`);
