// Null
const snoopy = null

console.log(snoopy)
console.log(typeof snoopy)

// Undefined
let name

console.log(name)

//Symbol 
const uniqueId = Symbol('id')
const symbol1 = Symbol(1)
const symbol2 = Symbol(1)

console.log(uniqueId)
console.log(symbol1 === symbol2)

const id = Symbol('id')
let user = {}
user[id] = '1234'

console.log(user)

// BigInit
const bigNumber = 2317829389123781289378123n

console.log(bigNumber)

const numberOfParticlesInTheUniverse = 999999999999999999999999999999999999n

console.log(numberOfParticlesInTheUniverse)