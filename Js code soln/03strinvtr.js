// Store's inventory with item names and prices in USD
const inventory = {
    "Laptop": 1000,
    "Smartphone": 500,
    "Headphones": 150,
    "Keyboard": 50,
    "Mouse": 25
  };
  
  // Exchange rate from USD to INR
  const exchangeRate = 80;
  
  // Function to convert USD to INR
  function convertToINR(priceInUSD) {
    return priceInUSD * exchangeRate;
  }
  
  // Convert the inventory prices to INR
  const inventoryInINR = Object.fromEntries(
    Object.entries(inventory).map(([item, priceInUSD]) => [
      item,
      convertToINR(priceInUSD)
    ])
  );
  
  console.log(inventoryInINR);
  