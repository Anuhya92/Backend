// Initial count value
let count: number = 0;

// Update the count display
const updateCountDisplay = (): void => {
  const countElement = document.getElementById("count");
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
const increment = (): void => {
  count += 1;
  updateCountDisplay();
};

// Decrement the count
const decrement = (): void => {
  count -= 1;
  updateCountDisplay();
};

// Reset the count
const reset = (): void => {
  count = 0;
  updateCountDisplay();
};

// Attach event listeners to buttons
/*
document.getElementById("increment-button").onclick = increment;
document.getElementById("decrement-button").onclick = decrement;
document.getElementById("reset-button").onclick = reset;*/

const incrementButton = document.getElementById("increment-button");
const decrementButton = document.getElementById("decrement-button");
const resetButton = document.getElementById("reset-button");

if (incrementButton && decrementButton && resetButton) {
  incrementButton.onclick = increment; // + button calls increment function
  decrementButton.onclick = decrement; // - button calls decrement function
  resetButton.onclick = reset; // reset button calls reset function
} else {
  console.error("One or more buttons not found");
}
