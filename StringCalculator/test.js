const chai = require('chai'); // Using Expect style


const { assert, expect } = chai;
const model = require('./model')

chai.use(require('chai-like'));
chai.use(require('chai-things'));

describe('Test TDD', () => {
    describe('Test String calculator', async () => {
        it('The method can take 0, 1 or 2 numbers separated by comma, and returns their sum.', () => {
            assert.equal(model.add("1.1,2.2"),"3.3")
        })
        it('Empty string return 0', () => {
            assert.equal(model.add(""),"0")
        })
        it('newline as separator', () => {
            assert.equal(model.add("1\n2,3"),"6")
        })
    })  
})