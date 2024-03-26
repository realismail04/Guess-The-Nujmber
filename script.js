function guessNumber() {
  const random = Math.floor(Math.random() * 100) + 1;
  const maxChances = 10;
  let attempts = 0;

  function displayMessage(message) {
    document.getElementById("message").textContent = message;
  }

  document.getElementById("start-btn").disabled = true;

  document.getElementById("user-input").addEventListener("change", function() {
    const guess = parseInt(this.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
      displayMessage("Please enter a valid number between 1 and 100.");
      return;
    }

    attempts++;

    if (guess === random) {
      displayMessage(`Congratulations! You guessed the correct number in ${attempts} attempts.`);
      document.getElementById("start-btn").disabled = false;
    } else if (attempts === maxChances) {
      displayMessage(`Sorry, you've reached the maximum number of attempts. The correct number was ${random}.`);
      document.getElementById("start-btn").disabled = false;
    } else if (guess < random) {
      displayMessage(`Wrong! Try again. The correct number is greater. Attempts left: ${maxChances - attempts}`);
    } else {
      displayMessage(`Wrong! Try again. The correct number is less. Attempts left: ${maxChances - attempts}`);
    }
  });
}

document.getElementById("start-btn").addEventListener("click", guessNumber);
