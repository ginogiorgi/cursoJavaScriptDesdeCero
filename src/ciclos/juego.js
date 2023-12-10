const prompt = require('prompt-sync')();
const numeroSecreto = Math.floor(Math.random() * 10 + 1)
const numeroJugador = parseInt (prompt('Adivina el número secreto entre 1 y 10: '))

console.log(`Este es el número con el que juegas: ${numeroJugador}`)

if (numeroJugador === numeroSecreto) {
    console.log("Felicidades, adivinaste el numero secreto!")
} else if (numeroJugador < numeroSecreto) {
    console.log('El numero es demaciado bajo');
} else {
    console.log('El numero es demaciado alto')
}

