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