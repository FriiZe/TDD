const chai = require('chai'); // Using Expect style


const { assert, expect } = chai;
const model = require('./model')

chai.use(require('chai-like'));
chai.use(require('chai-things'));

describe('Test TDD', () => {
    describe('Test FizzBuzz', () => {
        it('test with a number witch is divisible by 3', () => {
            assert.equal(model.fizzbuzz(3),"Fizz")
        })
    })
        it('test with a number witch is divisible by 5', () => {
            assert.equal(model.fizzbuzz(5),"Buzz")
    })
})