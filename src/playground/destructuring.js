//OBJECTS

// const person = {
//     name: 'Tom',
//     age: 24,
//     location: {
//         city: 'Tisnov',
//         temp: 15
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`)

// const { city, temp } = person.location;
// if (city && temp) {
//     console.log(`It's ${temp} in ${city}`);
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

//ARRAYS

// const address = ['U Humpolky 1506', 'Tisnov', 'Czech Republic', '66601'];

// const [ street, city, state, zip ] = address;

// console.log(`You are in ${city}, ${state}`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];

const [itemName, , medium] = item;

console.log(`A medium ${itemName} costs ${medium}`);
