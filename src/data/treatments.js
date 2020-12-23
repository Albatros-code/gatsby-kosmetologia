//      name: nazwa zabiegu
//      description: opis zabiegu
//      prize: cena w PLN
//      time: czas w minutach
//      image: jakieś zdjęcie

// export default [
//     {
//         id: 1,
//         name: "Henna",
//         description: "Rysowanie brwi od nowa",
//         prize: "30",
//         time: "20",
//         image: "no elo"
//     }
// ]

const services = require('./services.js').services
const groupNames = require('./services.js').groupNames

console.log(services[0].group)

console.log(groupNames)