// Array containing the correct answers for the quiz questions
const correctAnswers = ['B', 'B', 'A', 'B'];

// Selecting elements from the DOM using CSS classes
const form = document.querySelector('.quiz-form'); // The quiz form element
const result = document.querySelector('.result');   // The element to display the result

// Adding an event listener for when the form is submitted
form.addEventListener('submit', e => {
  e.preventDefault(); // Prevents the default form submission behavior

  let score = 0; // Variable to keep track of the user's score
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]; // Array of user's answers

  // Checking the user's answers against the correct answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]){
      score += 25; // Increment the score by 25 for each correct answer
    }
  });

  // Scroll to the top of the page
  scrollTo(0,0);

  // Show the result element by removing the 'd-none' class
  result.classList.remove('d-none');

  let output = 0; // Variable to control the animation of displaying the score

  // Set up a timer to animate the score display
  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`; // Update the displayed score
    if(output === score){
      clearInterval(timer); // Stop the timer when the animation is complete
    } else {
      output++; // Increment the output for the animation
    }
  }, 25); // Interval of 25 milliseconds for the animation timer
});
