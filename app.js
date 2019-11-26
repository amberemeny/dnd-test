const dice = require("./dice")
const users = require("./users")

// Function that calculates modifiers.
let mod = function(score) {
    score -= 10
    return Math.floor(score /= 2)
}

// Function to calculate the "User" player's modifiers based on their stats.
let calculate = function(player, callback) {
    player.strMod = callback(player.str)
    player.dexMod = callback(player.dex)
    player.conMod = callback(player.con)
    player.intMod = callback(player.int)
    player.wisMod = callback(player.wis)
    player.chaMod = callback(player.cha)
}

// Calculate the "wizard" player's modifiers.
calculate(users.wizard, mod)

// Rolls a D20, display a message for a crit success or failure, display the result.
let check = function(mod) {
    let diceroll = dice.d20
        if (diceroll >= 20) {
            console.log("Critical Success!")
        }
        else if (diceroll <= 1) {
            console.log("Critical Failure!")
        }
    let result = mod + diceroll
    return `You rolled a(n) ${diceroll}. Your modifier is ${mod}. Your total result is ${result}.`
}

// A wisdom check from the "wizard" player.
console.log(check(users.wizard.wisMod))



