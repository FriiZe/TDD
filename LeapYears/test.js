const chai = require('chai'); // Using Expect style


const { assert, expect } = chai;
const model = require('./model')

chai.use(require('chai-like'));
chai.use(require('chai-things'));

describe('Test TDD', () => {
    describe('Test LeapYears', () => {
        it('test with a year is a LEAPYEAR (Divisible by 400)', () => {
            assert.equal(model.leapyear(1200),true)
        })
        it('test with a year is not a LEAPYEAR (Divisible by 100 but not by 400)', () => {
            assert.equal(model.leapyear(1100),false)
        })
        it('test with a year is a LEAPYEAR (Divisible by 4 but not by 100)', () => {
            assert.equal(model.leapyear(2008),true)
        })
    })  
})