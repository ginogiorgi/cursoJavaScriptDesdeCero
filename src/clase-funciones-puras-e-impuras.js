//Funciones Puras

//side Efffcts
//1. Modificar variables globales
//2. Modificar parámetros
//3. Solicitudes HTTP
//4. Imprimir mensajes en pantalla o en consola
//5. Manipulación del DOM
//6. Obtener la hora o día actual

function sumPura(a, b) {
    return a + b
}
function square(x) {
    return x * x
}
function addTen (y) {
    return y + 10
}
const number = 5 
const finalResult = addTen(square(number))

console.log(finalResult)
//Funciones Impuras
function sumImpura(a, b) {
    console.log(a)
    return a + b
}

let total = 0

function sumWithsideEffect () {
    total ++
    return total
}