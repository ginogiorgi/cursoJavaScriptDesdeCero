//String primitivos
const stringPrimitivo = 'Soy un string primitivo'

console.log(typeof stringPrimitivo)

const stringPrimitivoTambien = String('Soy un string primitivo tambien')

console.log(typeof stringPrimitivoTambien)

//String objeto
const stringObjeto =new String('Soy un string objeto')

console.log(typeof stringObjeto)

//Acceder a caracteres
const saludo = 'Hola, como estas?'

console.log(saludo[2])
console.log(saludo.charAt(2))
console.log(saludo.indexOf('l'))
console.log(saludo.lastIndexOf('o'))
console.log(saludo.length)
console.log(saludo.toLocaleUpperCase())
console.log(saludo.toLocaleLowerCase())

const saludoDividido = saludo.split(' ')

console.log(saludoDividido)
console.log(saludoDividido[1])
console.log(saludoDividido[1])

const saludoConEspacios = ' Hola mundo '
const saludoSinEspacios = saludoConEspacios.trim()

console.log(saludoSinEspacios)

const saludoOriginal = 'Hola Mundo'
const nuevoSaludo = saludoOriginal.replace('Mundo', '💖')

console.log(nuevoSaludo)