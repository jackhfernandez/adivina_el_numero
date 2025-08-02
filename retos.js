function holaMundo() {
  console.log("Hola mundo cruel");
}
function saludoConNombre(nombre) {
  console.log('Hola '+ nombre);
  return;
}
function dobleNumero(num){
  return console.log(num * 2);;
}
function promedio(a,b,c){
  return console.log((a+b+c)/3);
}
function mayor(a,b){
  return console.log(a>b ? a : b);
}
function dobleNumero(a){
  return console.log(a*a);
}

//holaMundo();
//saludoConNombre('Fernandez');
//dobleNumero(256);
//promedio(5,6,7);
//mayor(1.9, 1.11);
dobleNumero(9);


/* Reto 2 */
function imc(peso, altura) {
  return console.log("Su IMC ES: ", peso / altura ** 2);
}

function factorial(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  console.log(`El factorial de ${num} es: ${fact}`);
  return fact;
}

function tipoCambio(soles) {
  let dolar = 3.65;
  return console.log(`${soles} en dolares son:  ${soles * dolar}`);
}

function medidas(alto, ancho) {
  let area = alto * ancho;
  let perimetro = (alto + ancho) * 2;
  return console.log(`Area: ${area} \nPerimetro: ${perimetro}`);
}

function medidasCirculo(radio) {
  let area = (Math.PI * radio ** 2).toFixed(2);
  let perimetro = (2 * Math.PI * radio).toFixed(2);
  return console.log(`Area Circular: ${area} \nPerimetro circular: ${perimetro}`);
}

function tablaMultiplicar(a) {
  for (let i = 0; i <= 12; i++) {
    console.log(`${a} * ${i} = ${ a * i} ` + "\n");
  }
}

//imc(53, 1.6);
//factorial(1);
//tipoCambio(17);
//medidas(10, 20);
//medidasCirculo(10);
tablaMultiplicar(5);


/* Reto 3 */

let listaGenerica = [];
let lenguajesDeProgramacion = ["Java", "Ruby", "Golang"];
let numeros = [16, 10, 14, 13];
let numeros2 = [4, 10, 6, 7]

lenguajesDeProgramacion.push("Js", "C", "C++", "Kotlin", "Python");

function mostrarLista() {
  for (let i = lenguajesDeProgramacion.length -1; i >= 0 ; i--) {
    console.log(lenguajesDeProgramacion[i]);
  }
}

// Funcion para hallar el promedio de una lista
function promedioNum(){
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  console.log(`El promedio es: ${suma/numeros.length}`);
}

// Mostrar el numero mas grande y mas pequeno en una lista
function numMenorYMayor() {
  let mayor = numeros[0];
  let menor = numeros[0];

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > mayor){
      mayor = numeros[i];
    }
    if (numeros[i] < menor){
      menor = numeros[i];
    }
  }
  console.log(`Numeros: ${numeros} \nMayor: ${mayor} \nMenor: ${menor}`);
}

// Suma de una lista
function sumaLista() {
  let suma = 0;
  console.log(`Lista de numeros: ${numeros}`);
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  console.log(`La suma de la lista es: ${suma}`);
}

// Funcion devolver la posicion de un elemento en un arreglo
function devolverPosicion(num) {
  for (let i = 0; i < numeros.length; i++) {
    if (num === numeros[i]){
      return i;
    }
  }
  return -1;
}

// Forma mas concisa con indexOf
function devolverPos(num){
  return numeros.indexOf(num);
}

// Funcion para sumar dos arreglos
function sumaVectores() {
  let sumaVectores = []
  for (let i = 0; i < numeros.length; i++) {
    sumaVectores[i] = numeros[i] + numeros2[i];
  }
  console.log(sumaVectores);
}

// Devolver el cuadrado del arreglo
function devolverCuadrado() {
  let vectoresCuadrado = [];
  for (let i = 0; i < numeros2.length; i++) {
    vectoresCuadrado[i] = numeros2[i]**2;
  }
  console.log(vectoresCuadrado);
}

mostrarLista();
promedioNum();
numMenorYMayor();
sumaLista();
console.log(devolverPosicion(14));
console.log(devolverPos(99));
sumaVectores();
devolverCuadrado();