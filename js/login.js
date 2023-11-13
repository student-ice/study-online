const registerBtn = document.querySelector('.register-btn');
const signInBtn = document.getElementById('signIn');
const signUpBtn = document.getElementById('signUp');
const container = document.querySelector('.container');

registerBtn.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});

signInBtn.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});

signUpBtn.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});
