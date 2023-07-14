let calc = JSON.parse(localStorage.getItem('sheet')) || '';
displayMathElement();
function displayMath(x) {
  calc += x; 
  console.log(calc);
  if (!(typeof 9 === typeof x)) {
    displayMathElement();
    return;
  } else {
    localStorage.setItem('sheet', JSON.stringify(calc));
  }
  displayMathElement();
}

function displayMathElement() {
  document.querySelector('.js-math-display')
    .innerHTML = calc;
}

function displayMathAnswer(answer) {
  document.querySelector('.js-answer')
    .innerHTML = answer
}