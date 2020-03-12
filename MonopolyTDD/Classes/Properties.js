const { Cell } = require("./Cell.js");

class Properties extends Cell{
    constructor(name, color, price, basicRent, oneHouseRent, twoHouseRent, threeHouseRent, fourHouseRent, hostelRent, hypotheque, housePrice){
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
        this.hypotheque = hypotheque
        this.housePrice = housePrice
        this.ishypotheque = false
    }
}

module.exports = {Properties};