// Initial count value
var count = 0;
// Update the count display
var updateCountDisplay = function () {
    var countElement = document.getElementById("count");
    if (countElement) {
        countElement.textContent = count.toString();
    }
};
// Increment the count
var increment = function () {
    count += 1;
    updateCountDisplay();
};
// Decrement the count
var decrement = function () {
    count -= 1;
    updateCountDisplay();
};
// Reset the count
var reset = function () {
    count = 0;
    updateCountDisplay();
};
// Attach event listeners to buttons
document.getElementById("increment-button").onclick = increment;
document.getElementById("decrement-button").onclick = decrement;
document.getElementById("reset-button").onclick = reset;
