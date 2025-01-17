// Define a customer object
const customer = {
    name: "John Doe",
    balance: 1000, // Initial balance
    deposit: function(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited Rs. ${amount}. New balance is Rs. ${this.balance}`);
        } else {
            console.log("Deposit amount must be greater than 0.");
        }
    },
    withdraw: function(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew Rs. ${amount}. New balance is Rs. ${this.balance}`);
        } else if (amount > this.balance) {
            console.log("Insufficient funds for withdrawal.");
        } else {
            console.log("Withdrawal amount must be greater than 0.");
        }
    },
    getBalance: function() {
        console.log(`Current balance is Rs. ${this.balance}`);
    }
};

// Example usage:
customer.getBalance(); // Display the initial balance
customer.deposit(500); // Deposit Rs. 500
customer.withdraw(200); // Withdraw Rs. 200
customer.withdraw(1500); // Attempt to withdraw more than the available balance
customer.getBalance(); // Display the updated balance
