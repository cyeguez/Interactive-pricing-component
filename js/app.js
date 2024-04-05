const inputRange = document.querySelector("input[type='range']");
const intro = document.querySelector(".container__intro");
const promo = document.getElementById("promo");
const slider = document.querySelector(".discount__btn-switch");

function toggleSlider() {
  slider.classList.toggle("active");
  console.log(inputRange.value)
  render(Number(inputRange.value));
}

function refresh() {
  intro.innerHTML = "";
  promo.innerHTML = "";
}
function update(i) {
  if (i == -1) {
    intro.textContent = "0K PAGEVIEWS";
    promo.textContent = "$0.00";
  } else  {
    const num = Number(arr[i].value);
    const discount = slider.classList.contains("active") ? 0.25 : 0; // Aplica el descuento si el botón está activo
    intro.textContent = arr[i].view;
    promo.textContent = `$${(num - num * discount).toFixed(2)}`;
  }
}

function render(e) {
  let i;
  switch (e) {
    case 0:
      i = -1;
      update(i);
      break;
    case 8:
      i = 0;
      update(i);
      break;
    case 12:
      i = 1;
      update(i);
      break;
    case 16:
      i = 2;
      update(i);
      break;
    case 24:
      i = 3;
      update(i);
      break;
    case 36:
      i = 4;
      update(i);
      break;
  }
}

function step(indice) {
  let step;
  if (indice < 8) {
    step = 8;
    inputRange.step = step;
  } else if (indice >= 8 && indice <= 16) {
    step = 4;
    inputRange.step = step;
  } else if (indice > 16 && indice <= 24) {
    step = 8;
    inputRange.step = step;
  } else if (indice > 24) {
    step = 12;
    inputRange.step = step;
  }
}



const arr = [
  { view: "10K pageviews", value: "8" },
  { view: "50K pageviews", value: "12" },
  { view: "100K pageviews", value: "16" },
  { view: "500K pageviews", value: "24" },
  { view: "1M pageviews", value: "36" },
];

slider.addEventListener("click", () => {
  toggleSlider();
 
});

inputRange.addEventListener("input", (e) => {
  step(Number(e.target.value));
  render(Number(e.target.value));
  
});
