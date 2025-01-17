// Function to validate URL using regex
function validateURL(url) {
    // Regular expression for validating URLs starting with http:// or https://
    const regex = /^(https?:\/\/)[a-zA-Z0-9-._~:?#\[\]@!$&'()*+,;=]+(\.[a-zA-Z]+)+$/;
  
    // Test the URL against the regex
    if (regex.test(url)) {
      console.log("Valid URL");
    } else {
      console.log("Invalid URL");
    }
  }
  
  // Test cases
  validateURL("http://example.com");    // Valid URL
  validateURL("https://my-site.org");   // Valid URL
  validateURL("ftp://example.com");     // Invalid URL
  validateURL("http://mywebsite123.co"); // Valid URL
  validateURL("https://example");       // Invalid URL
  