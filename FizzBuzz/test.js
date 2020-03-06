const chai = require('chai'); // Using Expect style


const { assert, expect } = chai;
const model = require('./model')

chai.use(require('chai-like'));
chai.use(require('chai-things'));

describe('Test TDD', () => {
    describe('Test FizzBuzz', async () => {
        it('test with a number witch is divisible by 3', () => {
            assert.equal(model.fizzbuzz(3),"Fizz")
        })
        it('test with a number witch is divisible by 5', () => {
            assert.equal(model.fizzbuzz(5),"Buzz")
        })
        it('test with a number witch is divisible by 5 and 3', () => {
            assert.equal(model.fizzbuzz(15),"FizzBuzz")
        })
        it('test with a number witch is not divisible by 5 and 3', () => {
            assert.equal(model.fizzbuzz(16),"")
        })
    })  
})