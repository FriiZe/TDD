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
    })  
})