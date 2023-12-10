const personalicedMessage = () => 'Goodbye everybody 🔥🔥'

function Rocket(name, ownMessage) {
    this.name = name
    this.launchMessage = () => ownMessage
    }

const falcon9Rocket = new Rocket('Falcon 9', personalicedMessage())
const falconHeavyRocket = new Rocket('Falcon Heavy', 'See you soon')

console.log(falcon9Rocket.name, falcon9Rocket.launchMessage())

const RocketWithArrowFunction = (name, ownMessage) => ({
    name: name,
    launchMessage: ownMessage,
})
const personalicedMessageArrowFunction = () => 'Succesful Launch'
const falcon9Rocket1 = RocketWithArrowFunction('Falcon 9 ', personalicedMessageArrowFunction)

console.log(falcon9Rocket1.name, falcon9Rocket1.launchMessage())