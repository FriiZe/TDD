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

    payARent(property, owner) {
        let rent = null;

        if (property instanceof Gare) {
            let count = 0
            for (let p of owner.propertiesList) {
                if (p instanceof Gare) {
                    count += 1
                }
            }
            rent = property.basicRent * count
        } else {

            switch (property.numberHouse) {
                case 0:
                    rent = property.basicRent
                    break;
                case 1:
                    rent = property.oneHouseRent
                    break;
                case 2:
                    rent = property.twoHouseRent
                    break;
                case 3:
                    rent = property.threeHouseRent
                    break;
                case 4:
                    rent = property.fourHouseRent
                    break;
                case 5:
                    rent = property.hostelRent
                    break;
                default:
                    break;
            }
        }
        console.log("Vous payer le loyer de " + property.name + " à " + owner.name + ". Il s'élève à " + rent)

        this.money -= rent
        owner.money += rent
        console.log("Il vous reste " + this.money)
    }

}

module.exports = { Player };