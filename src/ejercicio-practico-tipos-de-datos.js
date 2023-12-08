// social Media Profile

// 1. User information 
const username = 'chese890'
const fullName = 'Gino Giorgi'
const age = 25
const isStudent = true

// 2. Adress
const adress = {
    street: 'Peru',
    city: 'Fuentes',
    state: 'Santa Fe',
    zipCode: 1231,
}

// 3. Hobbies
const hobbies = ['Play soccer', 'Watch television', 'Go on a walk']

// 4. Generating personaliced biography
const personalicedBio = `Hi, I'm ${fullName}.
I'm ${age} years old.
I  live in ${adress.city}.
I love ${hobbies.join(', ')}.
Follow me on GitHub for more coding adventures!!`

// 5. Print the user profile and bio
console.log(personalicedBio)