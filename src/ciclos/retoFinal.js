// Juguemos a adivinar la palabra.

// El usuario tiene 3 intentos para adivinar la palabra oculta

// Requerimientos:

// - El juego debe tener una palabra oculta.
// - El juego puede dar 1 pista de la palabra.
// - El juego debe verificar si la suposición del usuario es correcta.
// - El juego debe tener un número limitado de intentos.
// - El juego debe terminar cuando el usuario encuentre la palabra o se quede sin intentos.

const prompt = require('prompt-sync')();
const palabraOculta = 'Pizza'
let palabraJugador

console.log(`La palabra oculta empieza con ${palabraOculta.slice(0,2)} y termina con ${palabraOculta.slice(palabraOculta.length-2, palabraOculta.length)}, tienes 3 intentos`)
for (let i = 3; i > 0; i--) {
    palabraJugador = prompt('Intoduzca la palabra secreta: ')
    if (palabraJugador.toLowerCase === palabraOculta.toLowerCase) {
        console.log(`Felicidades! Ha descubierto la palabra secreta ${palabraOculta} con ${i} intentos restantes!`)
        break
    } else if (i === 1) {
        console.log(`No lo ha logrado! La palabra secreta era ${palabraOculta}, mas suerte la proxima.`)
    } else {
        console.log(`${palabraJugador} no es la palabra secreta!, ${i - 1} intentos restantes...`)
    }
}