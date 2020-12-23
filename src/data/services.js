//      id: some id
//      name: service name
//      group: group name
//      description1: short description
//      description2: long description
//      prize: price in PLN
//      time: time in minutes
//      image: foto relative path

const groupNames = (() => {
    let groupNames = []
    for (let i = 0; i < 5; i++){
        let name = `Service group ${i + 1}`
        groupNames.push({
            name: name,
            description: "Long description, long description, long description, long description, long description, long description, long description, long description, long description, long description, long description, long description, long description, long description, long description, long description, long description",
            image: "./image/service1.jpg",
            slug: name.toLowerCase().replace(/\s+/g, '-')
        })
    }
    return groupNames
})()

const services= (() => {
    let services = []
    groupNames.map((item, index) => {
        let groupServices = [];
        for (let i = 0; i < 5; i++){
            let name = `service ${i + 1} in ${item.name}`

            groupServices.push({
                //id: `${index + 1}.${i + 1}`,
                name: name,
                group: item.slug,
                description1: "Short description",
                description2: "Long description, long description, long description, long description, long description, long description, long description, long description, long description, long description, long description, long description, long description, long description, long description, long description, long description",
                prize: 99,
                time: 60,
                image:"./image/service1.jpg",
                slug: name.toLowerCase().replace(/\s+/g, '-')
            })
        }
        services.push(...groupServices)        
    })
    return services
})()

console.log(services)
console.log(groupNames)

const fs = require('fs');
let data = JSON.stringify(services, null, 2);
fs.writeFileSync('./src/data/services/services.json', data);
data = JSON.stringify(groupNames, null, 2);
fs.writeFileSync('./src/data/serviceGroups/service-groups.json', data);

module.exports = {
    groupNames: groupNames,
    services: services
}

//   node src/data/services.js


