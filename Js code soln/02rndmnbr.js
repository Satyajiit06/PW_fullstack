// Variable storing the delay (in milliseconds)
let delay = 3000; // 3 seconds delay

// Function to generate a random number between 1 and 100
function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// Function to display the countdown and generate the random number after the delay
function startCountdown() {
  let countdownTime = delay / 1000; // Convert delay from milliseconds to seconds
  
  // Display countdown every second
  let countdownInterval = setInterval(() => {
    console.log(`Time remaining: ${countdownTime} second(s)`);
    countdownTime--;
    
    // When countdown reaches 0, stop the interval and generate the random number
    if (countdownTime < 0) {
      clearInterval(countdownInterval);
      let randomNumber = generateRandomNumber();
      console.log(`Random number generated: ${randomNumber}`);
    }
  }, 1000); // Update every second
}

// Start the countdown
startCountdown();
