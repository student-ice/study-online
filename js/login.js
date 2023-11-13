const loginBtn = document.querySelector('.login-btn');
const registerBtn = document.querySelector('.register-btn');

loginBtn.addEventListener('click', () => {
  // 跳转到首页
  window.location.href = './index.html';
});

registerBtn.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});

const signInBtn = document.getElementById('signIn');
const signUpBtn = document.getElementById('signUp');
const container = document.querySelector('.container');

signInBtn.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});

signUpBtn.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});
