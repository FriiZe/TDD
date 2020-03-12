class Board {
    constructor(){
        this.cells = []
    }
    init(...properties){
        for (let property of properties){
            this.cells.push(property)
        }
    }
}

module.exports = {Board};