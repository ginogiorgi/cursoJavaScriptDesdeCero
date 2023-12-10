// Create Powerpuff girl objects
function PowerpuffGirl (name, color, superpower) {
    this.name = name
    this.color = color
    this.superpower = superpower
    this.isLeader = false
    this.displayInfo = function() {
        console.log(`Powepuff Girl Information:
         .Name: ${this.name}
         .Color: ${this.color}
         .Super Power: ${this.superpower}
         ${this.isLeader ? 'Leader: yes' : 'Leader: no'}`)
    }
    this.becameLeader = function() {
        this.isLeader = true
        console.log(`${this.name} has became the leader of the power puff girls!`)
    }
}

const blossom = new PowerpuffGirl('Blossom', 'Pink', 'Ice Breath')
const buttercup = new PowerpuffGirl('Buttercup', 'Green', 'Super strengh')
const bubbles = new PowerpuffGirl('Bubbles', 'Blue', 'flight')


blossom.becameLeader()
blossom.displayInfo()
buttercup.displayInfo()
bubbles.displayInfo()