// Write your code here!
// Remove the <main id="main"> element from the DOM
const main = document.getElementById("main");
main.remove();

// Create a new <h1> element
const newHeader = document.createElement("h1");

// Assign it the ID of 'victory'
newHeader.id = "victory";

// Set the text inside the newHeader
newHeader.textContent = "GLORIA is the champion";

// Add the newHeader to the document body
document.body.append(newHeader);
