const Manager = require('./contenedor.js')

const manager = new Manager()

let user = {
    title: "Midnights",
    price: 30,
    thumbnail: "https://jenesaispop.com/wp-content/uploads/2022/08/taylorswift-midnights-696x743.jpg",
    autor: "Taylor Swift",
    id: 1
  }


manager.Save(user).then(result => console.log(result))
// manager.getAll().then(result => console.log(result))
// manager.getById(3).then(result => console.log(result))
// manager.deleteById(3).then(result => console.log(result))
// manager.deleteAll().then(result => console.log(result))