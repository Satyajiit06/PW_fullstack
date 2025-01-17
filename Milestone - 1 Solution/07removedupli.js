function removeDuplicates(cart) {
    // Use a Set to store unique items from the cart
    let uniqueCart = [...new Set(cart)];
    return uniqueCart;
}

// Example usage:
const customerCart = ["apple", "banana", "apple", "orange", "banana", "grape", "banana"];
const updatedCart = removeDuplicates(customerCart);

console.log("Original Cart:", customerCart);
console.log("Updated Cart (No Duplicates):", updatedCart);
