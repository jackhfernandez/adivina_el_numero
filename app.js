let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 25;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Muy bien, acertaste en ${intentos} ${
        intentos === 1 ? "intento" : "intentos"
      } 🤗`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroSecreto > numeroUsuario) {
      asignarTextoElemento("p", "El numero secreto es mayor");
    } else {
      asignarTextoElemento("p", "El numero secreto es menor");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

  // Verificar si ya se sortearon todos numeros del rango
  if (listaNumerosSorteados.length === numeroMaximo) {
    asignarTextoElemento(
      "p",
      "Muy bien! ya se sortearon todos los numeros posibles 🧑‍💻"
    );
  } else {
    // Verificar que no se repita el numero secreto
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      // Ejemplo de recursividad. funcion que se llama asimisma
      return generarNumeroSecreto();
    } else {
      // En caso el numero generado sea diferente se agrega a la lista
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del numero secreto");
  asignarTextoElemento("p", `Ingresa un numero entre 1 y ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
  return;
}

function reiniciarJuego() {
  // Limpiar caja
  limpiarCaja();

  // Indicaar mensaje de intervalo de numeros
  condicionesIniciales();

  // Deshabilitar el boton de nuevo juego
  document.querySelector("#reiniciar").setAttribute("disabled", true);
  return;
}

condicionesIniciales();
