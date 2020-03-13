const { Gare } = require("./Gare");
const { Properties } = require('./Properties')
const scanf = require('scanf')

class Player {
    constructor(name) {
        this.name = name
        this.money = 1500
        this.propertiesList = []
        this.actualPosition = 0
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
        if ((this.money - rent) < 0){
            console.log('Vous ne pouvez pas payer, il va falloir hypothequer :(')
        }else{
            this.money -= rent
            owner.money += rent
        }
        console.log("Il vous reste " + this.money)
    }

    move(board, roll){
        if ((this.actualPosition + roll) > (board.cells.length - 1)) {
            let tmp = board.cells.length - this.actualPosition
            roll -= tmp
            this.actualPosition = roll
            console.log("DINGDINGDING !! C'est jour de paie")
            this.money += 200
        } else {
            this.actualPosition += roll
        }
    }

    buyAProperty(property) {
        if (this.money - property.price >= 0) {
            console.log("Voulez vous acheter " + property.name + " ? Il vous resterai " + (this.money - property.price) + " (y/n)")
            let awnser = scanf('%s')
            if (awnser === 'y') {
                this.money -= property.price
                this.propertiesList.push(property)
                property.owner = this
                for (let color of this.nbColors) {
                    if (color.color === property.color) {
                        color.nb += 1
                        console.log("Désormais vous avez " + color.nb + " carte(s) de couleur " + color.color)
                    }
                }
                console.log("Vous avez acheté " + property.name + "\n Il vous reste " + this.money)
            } else {
                console.log("Vous n'avez pas acheté " + property.name)
            }
        } else {
            console.log("Vous n'avez pas assez d'argent pour acheter " + property.name)
        }
    }

    canBuild() {
        for (let color of this.nbColors) {
            if (color.nb === 3) {
                console.log("Vous pouvez construire une maison sur la couleur " + color.color)
                return (color.color)
            }
        }
        return null
    }

    build(color) {
        for (let properties of this.propertiesList) {
            if (properties.color === color) {
                console.log("Voulez vous construire une maison sur le terrain " + properties.name + " ?\n La maison est au prix de " + properties.housePrice + " (y/n)")
                let awnser = scanf('%s')
                if (awnser === 'y') {
                    this.money -= properties.housePrice
                    properties.numberHouse += 1
                    console.log("Vous avez désormais " + properties.numberHouse + " maisons sur la case " + properties.name)
                }
            }
        }
    }

    playerTurn(board) {
        console.log("Cest le tour de " + this.name)
        let a = this.rollADice()
        let b = this.rollADice()
        let roll = a + b
        console.log(this.name + " a fais " + a + " et " + b)
        this.move(board, roll)
        if (this.actualPosition === 30) {
            console.log("ALLEZ EN PRISON ! NE PASSEZ PAS PAR LA CASE DEPART !! ")
            this.actualPosition = 10
            return;
        }
        this.onAProperty(board.cells[this.actualPosition])
    }

    endTurn() {
        let color = this.canBuild()
        if (color !== null) {
            this.build(color)
        }
        console.log("Le tour de " + this.name + " est terminé !\n")
    }

    onAProperty(property) {
        if (property instanceof Properties) {
            if (property.owner == null) {
                this.buyAProperty(property)
            } else {
                this.payARent(property, property.owner)
            }
        } else {
            if (property instanceof Gare) {
                if (property.owner == null) {
                    this.buyAProperty(property)
                } else {
                    this.payARent(property, property.owner)
                }
            } else {
                console.log("Vous etes tombé sur la case " + property.name)
            }
        }
    }
}

module.exports = { Player };