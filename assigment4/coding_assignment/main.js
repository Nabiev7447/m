// Array of names to loop over
var names = ["John", "Alice", "Bob", "Jill", "Charlie", "Jake"];

// Loop through the array of names
for (var i = 0; i < names.length; i++) {
    var name = names[i];
    
    // Check if the first letter of the name is 'J' or 'j'
    if (name.charAt(0).toLowerCase() === 'j') {
        console.log("Goodbye " + name);
    } else {
        console.log("Hello " + name);
    }
}
