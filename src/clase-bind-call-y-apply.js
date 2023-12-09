function dogGreeting (owner, adress) {
    console.log(`Hi, I'm ${this.dogName} and I live with ${owner} in ${adress}`)
}

const newHouse = {
    dogName: 'Coconut',
}
const owner = "Gino"
const adress = "Tu mama"

dogGreeting.call(newHouse, owner, adress)

const nesessaryValues = [owner, adress]

dogGreeting.apply(newHouse, nesessaryValues)

const bindingWithbind = dogGreeting.bind(newHouse, owner, adress)

bindingWithbind()