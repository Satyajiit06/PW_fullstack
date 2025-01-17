function calculateRentalCost(daysRented, carType) {
    let costPerDay;

    switch (carType.toLowerCase()) {
        case "economy":
            costPerDay = 4000;
            break;
        case "midsize":
            costPerDay = 10000;
            break;
        case "luxury":
            costPerDay = 20000;
            break;
        default:
            return "Invalid car type";
    }

    return costPerDay * daysRented;
}

// Example usage:
const daysRented = 5;
const carType = "Luxury";
const totalCost = calculateRentalCost(daysRented, carType);

console.log(`The total rental cost for ${daysRented} days in a ${carType} car is Rs. ${totalCost}/-`);
