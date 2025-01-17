function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Example usage:
const celsiusTemperature = 14;
const fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);

console.log(`${celsiusTemperature}°C is equal to ${fahrenheitTemperature}°F`);
