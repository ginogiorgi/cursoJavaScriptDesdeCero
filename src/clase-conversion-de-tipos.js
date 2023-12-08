// Expliciti Type Casting
const string = '42'
const integer = parseInt(string)

console.log(integer, typeof(integer))

const stringDecimal = '2.14'
const float = parseFloat(stringDecimal)

console.log(float, typeof(float))

const binary = '1010'
const decimal = parseInt(binary, 2)
console.log(decimal, typeof(decimal))

//Implicit Type Casting
const sum = '5' + 3

console.log(sum)

const sumWithBoolean = '3' + true

console.log(sumWithBoolean)

const sumWithNumer = 2 + true

console.log(sumWithNumer)

const stringValue = '10'
const numberValue = 10
const booleanValue = true

console.log(stringValue + numberValue) //CONCATENA
console.log(stringValue + booleanValue) //CONCATENA
console.log(stringValue + stringValue) //CONCATENA
console.log(numberValue + stringValue) //CONCATENA
console.log(numberValue + numberValue) //SUMA
console.log(numberValue + booleanValue) //SUMA
console.log(booleanValue + stringValue) //CONCATENA
console.log(booleanValue + numberValue)  //SUMA
console.log(booleanValue + booleanValue)  //SUMA