const bascalForm = document.getElementById('bascal-grades-form');
const bascalResult = document.getElementById('bascal-result');

bascalForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const bascal_WW1 = parseInt(document.getElementById('bascal_ww1').value);
  const bascal_WW1Max = parseInt(document.getElementById('bascal_ww1max').value);
  const bascal_WW2 = parseInt(document.getElementById('bascal_ww2').value);
  const bascal_WW2Max = parseInt(document.getElementById('bascal_ww2max').value);
  const bascal_WW3 = parseInt(document.getElementById('bascal_ww3').value);
  const bascal_WW3Max = parseInt(document.getElementById('bascal_ww3max').value);
  const bascal_WW4 = parseInt(document.getElementById('bascal_ww4').value);
  const bascal_WW4Max = parseInt(document.getElementById('bascal_ww4max').value);
  const bascal_WW5 = parseInt(document.getElementById('bascal_ww5').value);
  const bascal_WW5Max = parseInt(document.getElementById('bascal_ww5max').value);
  const bascal_WW6 = parseInt(document.getElementById('bascal_ww6').value);
  const bascal_WW6Max = parseInt(document.getElementById('bascal_ww6max').value);

  const bascal_PETA1 = parseInt(document.getElementById('bascal_peta1').value);
  const bascal_PETA1Max = parseInt(document.getElementById('bascal_peta1max').value);
  const bascal_PETA2 = parseInt(document.getElementById('bascal_peta2').value);
  const bascal_PETA2Max = parseInt(document.getElementById('bascal_peta2max').value);
  const bascal_PETA3 = parseInt(document.getElementById('bascal_peta3').value);
  const bascal_PETA3Max = parseInt(document.getElementById('bascal_peta3max').value);
  const bascal_PETA4 = parseInt(document.getElementById('bascal_peta4').value);
  const bascal_PETA4Max = parseInt(document.getElementById('bascal_peta4max').value);

  const bascal_QA1 = parseInt(document.getElementById('bascal_qa1').value);
  const bascal_QA1Max = parseInt(document.getElementById('bascal_qa1max').value);
  const bascal_QA2 = parseInt(document.getElementById('bascal_qa2').value);
  const bascal_QA2Max = parseInt(document.getElementById('bascal_qa2max').value);

  const bascal_WWTotal = bascal_WW1 + bascal_WW2 + bascal_WW3 + bascal_WW4 + bascal_WW5 + bascal_WW6;
  const bascal_WWMaxTotal = bascal_WW1Max + bascal_WW2Max + bascal_WW3Max + bascal_WW4Max + bascal_WW5Max + bascal_WW6Max;
  const bascal_WWPercent = (bascal_WWTotal / bascal_WWMaxTotal) * 100;

  const bascal_PETATotal = bascal_PETA1 + bascal_PETA2 + bascal_PETA3 + bascal_PETA4;
  const bascal_PETAMaxTotal = bascal_PETA1Max + bascal_PETA2Max + bascal_PETA3Max + bascal_PETA4Max;
  const bascal_PETAPercent = (bascal_PETATotal / bascal_PETAMaxTotal) * 100;

  const bascal_QATotal = bascal_QA1 + bascal_QA2;
  const bascal_QAMaxTotal = bascal_QA1Max + bascal_QA2Max;
  const bascal_QAPercent = (bascal_QATotal / bascal_QAMaxTotal) * 100;

  const bascal_finalGrade = (bascal_WWPercent * 0.25) + (bascal_PETAPercent * 0.45) + (bascal_QAPercent * 0.30);

  bascalResult.textContent = The INITIAL grade for bascal is: ${bascal_finalGrade.toFixed(2)};
});

const navHeader = document.querySelector('.nav-header');

let prevScrollPosition = window.pageYOffset;
window.addEventListener('scroll', () => {
  let currentScrollPosition = window.pageYOffset;

  if (window.innebascalidth <= 768) {
    if (prevScrollPosition > currentScrollPosition) {
      navHeader.classList.remove('hide');
    } else {
      navHeader.classList.add('hide');
    }
  } else {
    navHeader.classList.remove('hide');
  }
  prevScrollPosition = currentScrollPosition;
});

window.addEventListener('resize', () => {
  if (window.innebascalidth > 768) {
    navHeader.classList.remove('hide');
  }
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  body.classList.toggle("nav-open");
});