const chai = require('chai'); // Using Expect style
const { Player } = require('../../src/Classes/Player');


const { assert, expect } = chai;

chai.use(require('chai-like'));
chai.use(require('chai-things'));

const player = new Player('Toto')

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
    
})