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
