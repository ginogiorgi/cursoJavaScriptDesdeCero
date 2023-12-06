//Tipo de dato complejo - paso por referencia
let frutas = {
    naranja: '🍊',
}
let vegetales = frutas

console.log(frutas, vegetales)
vegetales.naranja = '🥦'
console.log(frutas, vegetales)

let ropa = {
    blusa: '👕',
}

ropa.pantalon = '👖'
console.log(ropa)