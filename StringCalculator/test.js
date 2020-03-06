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
            assert.equal(model.add("1\n2,3"),"6.0")
        })
        it('Error on structure', () => {
            expect(function() {
                model.add("1\n,2,3").to.throw(`Bad structure`)
            }) 
        })
        it('Number expected but EOF found.', () => {
            expect(function() {
                model.add("1,2,").to.throw(`Number expected but EOF found.`)
            }) 
        })
        it('Custom separators', () => {
            assert.equal(model.add("//sep\n2sep3"),"5.0")
        })
    })  
})