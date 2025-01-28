// Initial count value
var count = 0;
// Update the count display
var updateCountDisplay = function () {
    var countElement = document.getElementById("count");
    if (!countElement) {
        console.error("Count element not found");
        return;
    }
    countElement.textContent = count.toString();
};
/*
  if (countElement) {
    countElement.textContent = count.toString();
  }
};*/
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
/*
document.getElementById("increment-button").onclick = increment;
document.getElementById("decrement-button").onclick = decrement;
document.getElementById("reset-button").onclick = reset;*/
var incrementButton = document.getElementById("increment-button");
var decrementButton = document.getElementById("decrement-button");
var resetButton = document.getElementById("reset-button");
if (incrementButton && decrementButton && resetButton) {
    incrementButton.onclick = increment; // + button calls increment function
    decrementButton.onclick = decrement; // - button calls decrement function
    resetButton.onclick = reset; // reset button calls reset function
}
else {
    console.error("One or more buttons not found");
}
