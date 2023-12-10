// for in ---> objetos

// objetos tienen propiedades que a su vez tienen un valor

// los array y stirngs solamente tienen items

// for (variable in objeto) {
//     código
// }

const listaDeCompras = {
    manzana: 5,
    pera: 3,
    naranja: 2,
    uva: 'un ramo'
}

for (fruta in listaDeCompras) {
    console.log(`Nesesito ${listaDeCompras[fruta]} de ${fruta}`)
}