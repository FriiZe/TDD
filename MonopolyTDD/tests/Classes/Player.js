const chai = require('chai'); // Using Expect style
const { Player } = require('../../src/Classes/Player');
const { Properties } = require("../../src/Classes/Properties");
const { Gare } = require("../../src/Classes/Gare");
const { Board } = require("../../src/Classes/Board");
const { Cell } = require("../../src/Classes/Cell");



const { assert } = chai;

chai.use(require('chai-like'));
chai.use(require('chai-things'));

const start = new Cell("Départ", "Uncolored")
const classicProperty = new Properties("VueJS", "brown", 80, 4, 20, 60, 180, 320, 450, 50)
const gare1 = new Gare("YnovCampusNantes")
const gare2 = new Gare("YnovCampusBordeaux")
const gare3 = new Gare("YnovCampusLyon")
const gare4 = new Gare("YnovCampusParis")
const buyingProperty = new Properties("CodeBuds", "blue", 350, 35, 175, 500, 1100, 1300, 1500, 200)
const canBuild = new Properties("JavaScript", "red", 220, 18, 90, 250, 700, 875, 1050, 150)
const canBuild1 = new Properties("HTML/CSS", "red", 220, 18, 90, 250, 700, 875, 1050, 150)
const canBuild2 = new Properties("SQL", "red", 240, 20, 100, 300, 750, 925, 1100, 150)


const board = new Board()
board.init(start, classicProperty, gare1, gare2, gare3, gare4)


const player = new Player('Toto')
const player2 = new Player('Tata')
const player3 = new Player('Titi')


describe('Test player', () => {
    it('Test player should launch dices', () => {
       let diceRolls = []
       for(let i = 0; i < 10; i++){
           diceRolls.push(player.rollADice())
       }
       for (diceRoll of diceRolls){
           if (diceRoll === undefined || diceRoll < 1 || diceRoll > 6) throw new Error('Lauch should return a number between 1 and 9')
       }
    })
    describe("Test player should pay rents", () => {
        it('Test player should pay a classic rent', () => {   
            player2.propertiesList.push(classicProperty)
            player.payARent(classicProperty, player2)
            assert.equal(player.money, 1496)
            assert.equal(player2.money, 1504)
        })
        it('Test player should pay a rent with one train station', () => {
            player2.propertiesList.push(gare1)
            player.payARent(gare1, player2)
            assert.equal(player.money, 1446)
            assert.equal(player2.money, 1554)
        })
        it('Test player should pay a rent with two train stations', () => {
            player2.propertiesList.push(gare2)
            player.payARent(gare2, player2)
            assert.equal(player.money, 1346)
            assert.equal(player2.money, 1654)
        })
        it('Test player should pay a rent with three train stations', () => {
            player2.propertiesList.push(gare3)
            player.payARent(gare3, player2)
            assert.equal(player.money, 1196)
            assert.equal(player2.money, 1804)
        })
        it('Test player should pay a rent with four train stations', () => {
            player2.propertiesList.push(gare4)
            player.payARent(gare4, player2)
            assert.equal(player.money, 996)
            assert.equal(player2.money, 2004)
        })
        it('Test player should pay a rent with one house', () => {
            player2.propertiesList[0].numberHouse = 1
            player.payARent(classicProperty, player2)
            assert.equal(player.money, 976)
            assert.equal(player2.money, 2024)
        })
        it('Test player should pay a rent with two houses', () => {
            player2.propertiesList[0].numberHouse = 2
            player.payARent(classicProperty, player2)
            assert.equal(player.money, 916)
            assert.equal(player2.money, 2084)
        })
        it('Test player should pay a rent with three houses', () => {
            player2.propertiesList[0].numberHouse = 3
            player.payARent(classicProperty, player2)
            assert.equal(player.money, 736)
            assert.equal(player2.money, 2264)
        })
        it('Test player should pay a rent with four houses', () => {
            player2.propertiesList[0].numberHouse = 4
            player.payARent(classicProperty, player2)
            assert.equal(player.money, 416)
            assert.equal(player2.money, 2584)
        })
        it('Test player should pay a rent with four hostel : Not enough money', () => {
            player2.propertiesList[0].numberHouse = 5
            player.payARent(classicProperty, player2)
            assert.equal(player.money, 416)
            assert.equal(player2.money, 2584)
        })
        it('Test player should pay a rent with four hostel : Enough money', () => {
            player.money = 10000
            player2.propertiesList[0].numberHouse = 5
            player.payARent(classicProperty, player2)
            assert.equal(player.money, 9550)
            assert.equal(player2.money, 3034)
        })
    })
    describe("Test player should move", () => {
        it("Test player should have standard move", () => {
            player.move(board, 3)
            assert.equal(player.actualPosition, 3)
        })
        it("Test player should have right position", () => {
            player.move(board, 4)
            assert.equal(player.actualPosition, 1)
        })
        it("Test player should gain 200e by passing by departure", () => {
            assert.equal(player.money, 9750)
        })
    })
    describe("Test player should buy a property", async () => {
        it("Test player should buy a property", async () => {
            console.log(player.money)
            await player.buyAProperty(buyingProperty)
            assert.equal(player.money, 9400)
            assert.equal(player.propertiesList[0], buyingProperty)
            
        })
    })
    describe("A player can build", () => {
        player3.buyAProperty(canBuild)
        player3.buyAProperty(canBuild1)
        player3.buyAProperty(canBuild2)
        it('Test a player should not build', () => {
            assert.equal(player2.canBuild(), null)
        })
        it('Test a player should build', () => {
            assert.equal(player3.canBuild(), 'red')
        })
    })
    describe('Test a player should build', () => {
        player3.build('red')
        it('Test a player should have builded', () => {
            assert.equal(player3.propertiesList[0].numberHouse, 1)
            assert.equal(player3.propertiesList[1].numberHouse, 1)
            assert.equal(player3.propertiesList[2].numberHouse, 1)
        })
    })
})