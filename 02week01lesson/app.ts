// Initial count value
let count: number = 0;

// Update the count display
const updateCountDisplay = (): void => {
  const countElement = document.getElementById("count");
  if (countElement) {
    countElement.textContent = count.toString();
  }
};

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
document.getElementById("increment-button")!.onclick = increment;
document.getElementById("decrement-button")!.onclick = decrement;
document.getElementById("reset-button")!.onclick = reset;
