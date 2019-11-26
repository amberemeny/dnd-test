
const fs = require("fs")

let all = JSON.parse(fs.readFileSync("./users.JSON", 'utf8'))

let orc = all.find(obj => obj.name == "Orc")
let wizard = all.find(obj => obj.name == "Wizard")

module.exports = {
    all,
    orc,
    wizard
}

console.log(module.exports)