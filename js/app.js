const inputRange = document.querySelector("input[type='range']");
const intro = document.querySelector(".container__intro");
const promo = document.getElementById("promo");
const slider = document.querySelector(".discount__btn-switch");

// Declaración de un arry de objetos
const arr = [
  { view: "10K pageviews", elem: "8" },
  { view: "50K pageviews", elem: "12" },
  { view: "100K pageviews", elem: "16" },
  { view: "500K pageviews", elem: "24" },
  { view: "1M pageviews", elem: "36" },
];

/* Función que se encarga de cambiar el color de la barra del input al momento de delizarla.

como en delizar la barra del input este tiene 5 niveles  comienza a comparar y va aumentado de 20 en 20 y 
se crea un gradient que va pintando la barra


*/
function changeColorInputRange(elem) {
  let increment;
  const color1 = "#10D5C2";
  const color2 = " #EAEEFB";

  if (elem > 0 && elem <= 8) {
    increment = 20;
  } else if (elem > 8 && elem <= 12) {
    increment = 40;
  } else if (elem > 12 && elem <= 16) {
    increment = 60;
  } else if (elem > 16 && elem <= 24) {
    increment = 80;
  } else if (elem > 24) {
    increment = 100;
  } else {
    increment = 0;
  }
  const gradientColor = `linear-gradient(to right, ${color1} ${increment}%, ${color2} 0 )`;
  inputRange.style.backgroundImage = gradientColor;
}

//funcion que se encarga de cargar los estilos al deslizar el boton y llama a la funcion render para que actualice los valores de los precios a aplicarle el descuento de 25%
function toggleSlider() {
  slider.classList.toggle("active");
  render(Number(inputRange.value));
}

function refresh() {
  intro.innerHTML = "";
  promo.innerHTML = "";
}

//función que se encarga de pintar y actualizar en dom este recibe el inde de busqueda para ubicarse en el array, compara si esta activo el botón de descuento y si lo esta o no aplica el descuento 
function update(i) {
  if (i == -1) {
    intro.textContent = "0K PAGEVIEWS";
    promo.textContent = "$0.00";
  } else {
    const num = Number(arr[i].elem);
    const discount = slider.classList.contains("active") ? 0.25 : 0; // Aplica el descuento si el botón está activo
    intro.textContent = arr[i].view;
    promo.textContent = `$${(num - num * discount).toFixed(2)}`;
  }
}
/* Función que recibe el valor de input range transformado en un dato de tipo número, este segun el valor se le asigna una indice para buscar los datos dentro del array declarado */
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


/* Funció que se encarga de establecer los saltos al momento de desplazar la barra del input tipo range
  Compara el valor del input y según el el valor le asigna el ranto de la barra del input.


*/
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

slider.addEventListener("click", () => {
  toggleSlider();
});

inputRange.addEventListener("input", (e) => {
  changeColorInputRange(Number(e.target.value));

  step(Number(e.target.value));
  render(Number(e.target.value));
});
