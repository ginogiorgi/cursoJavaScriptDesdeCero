//1. Tipo entero y decimal
const entero = 232
const decimal = 3.14

console.log(typeof entero)
console.log(typeof decimal)

//2. Notación cientifica 
const cientifico = 5e3

console.log(cientifico)

//3.Infinitos y NaN
const inifinito = Infinity
const noEsUnNumero = NaN

console.log(inifinito, noEsUnNumero)

// Operaciones aritméticas

//1. Suma, resta, multiplciación y división

const suma = 3 + 4
const resta = 5 - 3
const multiplicacion = 5 * 6
const division = 13 / 2

console.log(suma, resta, multiplicacion, division)

//2. Módulo y Exponenciación
const modulo = 14 % 4
const exponenciacion = 2 ** 3

console.log(modulo, exponenciacion)

// Precisión
const resultado = 0.1 + 0.2

console.log(resultado.toFixed(1))
console.log(resultado === 0.3)

// Operaciones avanzadas

const raiz = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7)
const aleatorio = Math.random()

console.log(raiz, valorAbsoluto, aleatorio)