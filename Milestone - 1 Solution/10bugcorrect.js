function correctCartQuantities(cart) {
    return cart.map(quantity => quantity * 2);
}

// Example usage:
const cartQuantities = [1, 2, 3, 4, 5]; // Quantities reduced to half
const correctedQuantities = correctCartQuantities(cartQuantities);

console.log("Original Quantities:", cartQuantities);
console.log("Corrected Quantities:", correctedQuantities);