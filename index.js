const readMoreBtns = document.querySelectorAll('.read-more-btn');
const hiddenTexts = document.querySelectorAll('.hidden-text');

readMoreBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    hiddenTexts[index].classList.toggle('hidden-text');

    if (hiddenTexts[index].classList.contains('hidden-text')) {
      btn.textContent = 'Read More';
    } else {
      btn.textContent = 'Read Less';
    }
  });

  // Show initial text
  if (hiddenTexts[index].classList.contains('hidden-text')) {
    btn.textContent = 'Read More';
  } else {
    btn.textContent = 'Read Less';
  }
});
const form = document.querySelector('#contact form');
const submitButton = document.querySelector('#contact .sub');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Get the form field values
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  // Perform form validation (you can add more validation as needed)
  if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
    alert('Please fill in all the required fields.');
    return;
  }

  // Simulate form submission (you'll need to replace this with your actual form submission logic)
  submitButton.textContent = 'Submitting...';
  setTimeout(() => {
    submitButton.textContent = 'Successfully Done';
    form.reset(); // Reset the form fields
  }, 2000);
});