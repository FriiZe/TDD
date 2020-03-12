const { Properties } = require("./Properties.js");
const { Gare } = require("./Gare.js");
const scanf = require('scanf')

class Player {
    constructor(name) {
        this.name = name
        this.money = 1500
        this.propertiesList = []
        this.actualPosition = 0
        this.nbDoubles = 0
        this.willReplay = false
        this.turnInJail = 0
        this.nbColors = [{ color: "brown", nb: 0 },
            { color: "clairBlue", nb: 0 },
            { color: "purple", nb: 0 },
            { color: "orange", nb: 0 },
            { color: "red", nb: 0 },
            { color: "yellow", nb: 0 },
            { color: "green", nb: 0 },
            { color: "blue", nb: 0 }
        ]
    }

    rollADice() {
        return Math.floor(Math.random() * Math.floor(6)) + 1
    }
}

module.exports = { Player };