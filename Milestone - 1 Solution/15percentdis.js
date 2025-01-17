const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    // Calculate the discount percentage
    const discount = ((originalPrice - discountedPrice) / originalPrice) * 100;
    // Round off the discount percentage to two decimal places
    return discount.toFixed(2);
};

// Example usage:
const originalPrice = 1500;
const discountedPrice = 1200;

const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);

console.log(`The discount percentage is ${discountPercentage}%`);

