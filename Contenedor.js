const fs = require('fs')
const pathToFile = './productos.json'

class Manager {
    Save = async (user) => {
        if (!user.title || !user.autor || !user.thumbnail) return {status: "error", message: "missing files"} 
        try {
            if(fs.existsSync(pathToFile)){
                let data = await fs.promises.readFile(pathToFile, 'utf-8')
                let users = JSON.parse(data)
                let id = users[users.length-1].id+1
                user.id = id
                users.push(user)
                await fs.promises.writeFile(pathToFile, JSON.stringify(users, null, 2))
                return {status: "success", message: "user saved"}
            } else {
                user.id = 1
                await fs.promises.writeFile(pathToFile, JSON.stringify([user], null, 2))
                return {status: "success", message: "user saved"}
            }
        } catch (error) {
            return {status: "error", message: error.message}
        }
    }
    getAll = async () => {
        if (fs.existsSync(pathToFile)) {
            let data = await fs.promises.readFile(pathToFile, 'utf-8')
            let users = JSON.parse(data)
            return {status: "success", message: users}
        } else {
            return {status: "error", message: err.message}
        }
        }
    getById = async (id) => {
        if (fs.existsSync(pathToFile)) {
            let data = await fs.promises.readFile(pathToFile, 'utf-8')
            let users = JSON.parse(data)
            let user = users.find(user => user.id === id)
            if (user) return {producto: user}
            return {status: "error", message: "user not found"}
        } else {
            return {status: "error", message: err.message}
        }
    }
    deleteById = async (id) => {
        if (fs.existsSync(pathToFile)) {
            let data = await fs.promises.readFile(pathToFile, 'utf-8')
            let users = JSON.parse(data)
            let newUsers = users.filter(user => user.id === id)
            await fs.promises.writeFile(pathToFile, JSON.stringify(newUsers, null, 2))
            return {status: "success", message: "deleted!"}
        } else {
            return {status: "error", message: err.message}
        }
    }
    deleteAll= async () => {
        if (fs.existsSync(pathToFile)) {
            let data = await fs.promises.readFile(pathToFile, 'utf-8')
            let users = JSON.parse(data)
            await fs.unlink('./productos.json', (err) => {
                if (err) throw err;
                console.log('los productos fueron eliminados')
            })
            return {status: "success", message: "deleted!"}
        } else {
            return {status: "error", message: err.message}
        }
    }
}

module.exports = Manager