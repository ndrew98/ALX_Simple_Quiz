
// Function to check the user's answer
function checkAnswer() {
  // Define the correct answer
  const correctAnswer = "4";

  // Get the selected radio button
  const selectedAnswer = document.querySelector('input[name="quiz"]:checked');

  // Get the feedback element
  const feedbackElement = document.getElementById('feedback');

  // Check if an answer was selected
  if (!selectedAnswer) {
      feedbackElement.textContent = "Please select an answer!";
      return;
  }

  // Get the value of the selected answer
  const userAnswer = selectedAnswer.value;

  // Compare the user's answer with the correct answer
  if (userAnswer === correctAnswer) {
      feedbackElement.textContent = "Correct! Well done.";
  } else {
      feedbackElement.textContent = "That's incorrect. Try again!";
  }
}

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);