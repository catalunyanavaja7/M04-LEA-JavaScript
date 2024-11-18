// Ejercicio 1
console.log("=====Ejercicio 1=====")

function nombreapellido (nombre, apellido) {
    console.log("Mi nombre es " + nombre + apellido)
}
nombreapellido("Leo ","Mata")

// Ejercicio 2
console.log("=====Ejercicio 2=====")

function dequetipo (numero) {
    console.log("Este valor es de tipo: " + typeof numero)
}
dequetipo(6)

// Ejercicio 3
console.log("=====Ejercicio 3=====")

const hoy = new Date();

function formatoFecha(fecha, formato) {
    console.log(fecha + formato)
}
formatoFecha(hoy, ' 18/11/24');

// Ejercicio 4
console.log("=====Ejercicio 4=====")

function vardentro () {
    var variablenose = 5;
}
//console.log(variablenose);
console.log("Da error y dice que no esta definida.")

// Ejercicio 5
console.log("=====Ejercicio 5=====")

function fvocales (cadena) {
    var vocales = cadena.match(/[aeiouáéíóú]/gi);
    return vocales? vocales.length : 0;
}
console.log(fvocales("Ayuida porfiplis"))

// Ejercicio 6
console.log("=====Ejercicio 6=====")

function tresenters (uno , dos, tres=6) {
    var suma = uno + dos + tres;
    console.log(suma);
}
tresenters(5, 5)

// Ejercicio 7
console.log("=====Ejercicio 7=====")

console.log("Ni idea de como se hace")

// Ejercicio 8
console.log("=====Ejercicio 8=====")

function enters (enterouno, enterodos) {
    return enterouno === 30 || enterodos === 30 || enterouno + enterodos === 30
}
console.log(enters(30, 0))

// Ejercicio 9
console.log("=====Ejercicio 9=====")

function entersanonim () {
    let enterouno = 20;
    let enterodos = 0;
    return enterouno === 30 || enterodos === 30 || enterouno + enterodos === 30
}
console.log(entersanonim())

// Ejercicio 10
console.log("=====Ejercicio 10=====")

const dadesIguals = (igual1 , igual2) => igual1 === igual2;

console.log(dadesIguals(5, 5))
console.log(dadesIguals(5, "5"))

// Ejercicio 11
console.log("=====Ejercicio 11=====")

const arrelQ = (varconarrel) => Math.sqrt(varconarrel).toFixed(2)

console.log(arrelQ(10))

// Ejercicio 12
console.log("=====Ejercicio 12=====")

const minusculas = (frase) => frase.toLowerCase()

console.log(minusculas("Yow Yow YOW yow"))

// Ejercicio 13
console.log("=====Ejercicio 13=====")

const valores = (valor1, valor2) => valor1 ?? valor2;

console.log(valores(null, "Hola"))
console.log(valores("Adios", null))

// Ejercicio 15
console.log("=====Ejercicio 13=====")

// Esta funcion se llama a si misma, luego se suma 3 veces ella misma.

const sumasuma = (equis) => equis + equis + equis

console.log(sumasuma(5))
console.log(sumasuma("5"))