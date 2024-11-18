// Ejercicio 6
console.log("=====Ejercicio 6=====")


const number = 1234;
const bigInt = 5678n;
const bigintcomonumero = Number(bigInt);


console.log((number + bigintcomonumero).toFixed(1));
console.log((number - bigintcomonumero).toFixed(1));
console.log((number / bigintcomonumero).toFixed(1));
console.log((number * bigintcomonumero).toFixed(1));


// Ejercicio 7
console.log("=====Ejercicio 7=====")


const a = 4;
const b = 4;
const c = a * a + b * b;
const hipotenusa = Math.sqrt(c)
console.log(hipotenusa)


// Ejercicio 8
console.log("=====Ejercicio 8=====")


var numeroentero = 10;
var stringhola = "10";

var sumaaveces = numeroentero / stringhola;
console.log(sumaaveces)


// Ejercicio 9
console.log("=====Ejercicio 9=====")

var nombreentero = "Leonardo Mata Nagy";
var porpartes = nombreentero.split(" ");
var apellido = porpartes[1];

console.log(apellido);
console.log(apellido.length);


// Ejercicio 10
console.log("=====Ejercicio 10=====")

var nombremio = "Leonardo Mata";
var texto = "";
var cadena = nombremio.slice(0, 6)+ texto.slice(7)

console.log(cadena)


// Ejercicio 11
console.log("=====Ejercicio 11=====")

var undef = undefined;
var nnull = null;
var sumasuma = undef + nnull;
console.log(sumasuma)
