// Function to validate LinkedIn profile URL using regex
function validateLinkedInProfile(url) {
    // Regular expression for validating LinkedIn profile URLs
    const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
  
    // Test the URL against the regex
    if (regex.test(url)) {
      console.log("Valid LinkedIn profile URL");
    } else {
      console.log("Invalid LinkedIn profile URL");
    }
  }
  
  // Test cases
  validateLinkedInProfile("https://www.linkedin.com/in/john_doe123");   // Valid
  validateLinkedInProfile("https://www.linkedin.com/in/john_doe_123");  // Valid
  validateLinkedInProfile("https://www.linkedin.com/in/john123");       // Valid
  validateLinkedInProfile("https://www.linkedin.com/in/john1234_");     // Invalid (ends with underscore)
  validateLinkedInProfile("https://www.linkedin.com/in/john@doe123");   // Invalid (contains '@')
  validateLinkedInProfile("https://www.linkedin.com/in/j");              // Invalid (less than 5 characters)
  validateLinkedInProfile("https://www.linkedin.com/in/john_doe_12345"); // Valid
  validateLinkedInProfile("https://www.linkedin.com/in/john-doe12345");  // Valid
  validateLinkedInProfile("https://www.linkedin.com/in/!john_doe123");   // Invalid (contains '!')
  