const chai = require('chai'); // Using Expect style
const { Player } = require('../../src/Classes/Player');
const { Properties } = require("../../src/Classes/Properties");
const { Gare } = require("../../src/Classes/Gare");


const { assert, expect } = chai;

chai.use(require('chai-like'));
chai.use(require('chai-things'));

const player = new Player('Toto')
const player2 = new Player('Tata')

const classicProperty = new Properties("VueJS", "brown", 80, 4, 20, 60, 180, 320, 450, 40, 50)
const gare1 = new Gare("YnovCampusNantes")
const gare2 = new Gare("YnovCampusBordeaux")
const gare3 = new Gare("YnovCampusLyon")
const gare4 = new Gare("YnovCampusParis")



describe('Test player', () => {
    it('Test rolldice', () => {
       let diceRolls = []
       for(let i = 0; i < 10; i++){
           diceRolls.push(player.rollADice())
       }
       for (diceRoll of diceRolls){
           if (diceRoll === undefined || diceRoll < 1 || diceRoll > 6) throw new Error('Le lancer doit retourner un nombre entre 1 et 6')
       }
    })
    describe("Pay a rent", () => {
        it('Pay a classic rent', () => {   
            player2.propertiesList.push(classicProperty)
            player.payARent(classicProperty, player2)
            assert.equal(player.money, 1496)
            assert.equal(player2.money, 1504)
        })
        it('Pay a rent with one train station', () => {
            player2.propertiesList.push(gare1)
            player.payARent(gare1, player2)
            assert.equal(player.money, 1446)
            assert.equal(player2.money, 1554)
        })
        it('Pay a rent with two train stations', () => {
            player2.propertiesList.push(gare2)
            player.payARent(gare2, player2)
            assert.equal(player.money, 1346)
            assert.equal(player2.money, 1654)
        })
        it('Pay a rent with three train stations', () => {
            player2.propertiesList.push(gare3)
            player.payARent(gare3, player2)
            assert.equal(player.money, 1196)
            assert.equal(player2.money, 1804)
        })
        it('Pay a rent with four train stations', () => {
            player2.propertiesList.push(gare4)
            player.payARent(gare4, player2)
            assert.equal(player.money, 996)
            assert.equal(player2.money, 2004)
        })
    }) 
})