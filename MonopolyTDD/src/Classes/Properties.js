const { Cell } = require("./Cell.js");

class Properties extends Cell{
    constructor(name, color, price, basicRent, oneHouseRent, twoHouseRent, threeHouseRent, fourHouseRent, hostelRent, housePrice){
        super(name, color)
        this.price = price
        this.basicRent = basicRent
        this.oneHouseRent = oneHouseRent
        this.twoHouseRent = twoHouseRent
        this.threeHouseRent = threeHouseRent
        this.fourHouseRent = fourHouseRent
        this.hostelRent = hostelRent
        this.numberHouse = 0
        this.owner = null
        this.housePrice = housePrice
    }
}

module.exports = {Properties};