document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  const btn = document.getElementById('btn');
  const inputContainer = document.getElementById('input-container');
  const passwordInput = document.getElementById('password');
  const password = 'RENASCOR';

  const checkPassword = function () {
    if (passwordInput.value === password) {
      inputContainer.style.opacity = 0;
      setTimeout(() => {
        inputContainer.style.display = 'none';
        content.style.display = 'block';
        setTimeout(() => {
          content.style.opacity = 1;
        }, 100);
      }, 500);
    } else {
      alert('Incorrect password. Try again.');
    }
  };

  btn.addEventListener('click', checkPassword);
  passwordInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      checkPassword();
    }
  });
});
