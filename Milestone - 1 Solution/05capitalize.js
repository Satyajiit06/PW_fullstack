function capitalizeName(name) {
    return name[0] === name[0].toLowerCase()
        ? name[0].toUpperCase() + name.slice(1)
        : name;
}

// Example usage:
const userName = "rahul";
console.log(capitalizeName(userName)); // Output: Rahul

const anotherUserName = "Satya";
console.log(capitalizeName(anotherUserName)); // Output:Satya
