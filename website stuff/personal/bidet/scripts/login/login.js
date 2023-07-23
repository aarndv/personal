// window.location.replace('...')

function passwordKeydown(event) {
  if (event.key === 'Enter') {
    clickRedirect();
  }
}

function redirect() {
  window.location.href = "homepage.html";
};

function clickRedirect() {
  const userName = document.querySelector('.js-username-input'); 
  const password = document.querySelector('.js-password-input');
  const redWarning = document.querySelector('.js-warning'); 
  let nameCondition = '';
  let passwordCondition = '';
  if (userName.value === 'erin') {
    nameCondition = true; 
  } else if (!(userName.value === 'erin')) {
    nameCondition = false; 
  }

  if (password.value === 'password123') {
    passwordCondition = true; 
  } else if (!(password.value === 'password123')) {
    passwordCondition = false; 
  }

  if (nameCondition && passwordCondition) {
    password.value = '';
    redirect();
    redWarning.innerHTML = '';
    redWarning.classList.remove('red')
  } else {
    redWarning.innerHTML = 'Wrong password or username. Please try again.'
    redWarning.classList.add('red');
    userName.value = '';
    password.value = '';
  }
}; 