const { Cell } = require("./Cell.js");

class Gare extends Cell {
    constructor(name, color){
        super(name, color)
        this.price = 200
        this.basicRent = 50
        this.owner = null
    }
}

module.exports = {Gare};