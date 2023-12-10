const greeting = function (name) {
    return `Hi, I'm ${name}`
}
const newGreeting = (name) => {
    return `Hi, I'm ${name}`
}

// Arrow function - implicit return
const newGreetingImplicit = name => `Hi, I'm ${name}`
const newGreetingImplicitWithTwoParameters = (name, lastName) => `Hi, I'm ${name} ${lastName}`

//Lexical Binding
const fictionalCharacter = {
    name:'Uncle Ben',
    messageWithTraditionalFuction: function (message) {
        console.log(`${this.name} says: ${message}`)
    },
    messageWithArrowFuction: (message) => {
        console.log(`${this.name} says: ${message}`)
    },
}
fictionalCharacter.messageWithTraditionalFuction('With great power comer great responsibility')
fictionalCharacter.messageWithArrowFuction('Beware of doctor octopus')