// Write your code here!
const main = document.querySelector("main");
// Removing Main#main from DOM
document.querySelector("main").remove();

// Creating newHeader  variable that points to node 'h1#victory'

const newHeader = document.createElement('h1');

newHeader.id = ('victory');


newHeader.textContent = "YOUR-NAME is the champion";

