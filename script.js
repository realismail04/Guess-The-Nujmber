function guessNumber() {
  // generating a random integer from 1 to 100
  const random = Math.floor(Math.random() * 100) + 1;

  // set the maximum number of chances
  const maxChances = 10;

  // take input from the user
  let number = parseInt(prompt("Guess a number from 1 to 100: "));

  let attempts = 1; // track the number of attempts

  // take the input until the guess is correct or maximum chances are reached
  while (number !== random && attempts < maxChances) {
    // Check if the input is a valid number
    if (isNaN(number) || number < 1 || number > 100) {
      alert("Wrong! Please enter a valid number between 1 and 100.");
    } else {
      // Provide a hint if the guess is incorrect
      if (number < random) {
        alert("Wrong! Try again. The correct number is greater.");
      } else {
        alert("Wrong! Try again. The correct number is less.");
      }
    }
    // take input again
    number = parseInt(prompt("Guess a number from 1 to 100: "));
    attempts++;
  }

  // check if the guess is correct or maximum chances are reached
  if (number == random) {
    alert(
      `Congratulations! You guessed the correct number in ${attempts} attempts.`,
    );
  } else {
    alert(
      `Sorry, you've reached the maximum number of attempts. The correct number was ${random}.`,
    );
  }
}

document.getElementById("start-btn").addEventListener("click", guessNumber);
