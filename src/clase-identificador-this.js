// Enlace implicito - implicit binding

const house = {
    dogName: 'Luchi',
    dogGreeting: function () {
        console.log(`Hi, i'm ${this.dogName}`)
    }
}
house.dogGreeting()

// Enlace explicito - explicit binding
function dogGreeting2 () {
    console.log(`Hi, i'm ${this.dogName}`)
}

const house1 = {
    dogName: 'Otto',
}

dogGreeting2.call(house1)

function newDogGreeting (owner, adress) {
    console.log(`Hi, i'm ${this.dogName} and I live with ${owner} on ${adress}`)
}

const owner = 'Lucy'
const adress = 'Troll land'

newDogGreeting.call(house1, owner, adress)