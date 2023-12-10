// switch (expression) {
//     case valor1: 
//         //código
//         break
//     case valor2:
//         //código
//         break
//     case valor3:
//         //código
//         break
//     default:
//         //código
//         break
// }

let expresion = 'Kiwi'

switch (expresion) {
    case "Papayas":
        console.log("Las Papayas salen 10 pe")
        break
    case "Naranjas":
        console.log("Las Naranjas salen 100 dolares")
        break
    case "Kiwi":
        console.log("Como te va a gustar el kiwi asqueroso")
        break
    case "Coca cola zero":
        console.log("Es gratis!")
        break
    default:
        console.log(`No se ha encontrado el producto ${expresion}!`)
}