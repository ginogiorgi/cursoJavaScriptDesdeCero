// Creación de string
const primeraOpcion = 'Comillas simples'
const segundaOpcion = "Comillas dobles"
const terceraOpcion = `Comillas simples`

//1. Concatenacion: Opción +
const direccion = 'Calle falsa 123'
const ciudad = 'Springfield'
const direccionCompleta = 'Mi dirección completa es ' + direccion + ' ,' + ciudad

console.log(direccionCompleta)

//2. Concatenación: Template Literals
const nombre = 'Gino'
const apellido = 'Giorgi'
const nombreCompleto = `Mi nombre completo es ${nombre} ${apellido}`

console.log(nombreCompleto)

//3. Concatenación: join()
const primeraParte = 'Me encanta'
const segundaParte = 'la gente de'
const terceraParte = 'Perú'
const pensamiento = [primeraParte, segundaParte, terceraParte]

console.log(pensamiento.join(' '))

//4. Concatenación: concat()
const hobbie1 = 'Correr'
const hobbie2 = 'Comer'
const hobbie3 = 'Jugar'
const hobbie4 = 'Volar'
const boddies = 'Mis hobbies son: '.concat(hobbie1, ', ',hobbie2, ', ',hobbie1, ', ',hobbie4)

console.log(boddies)