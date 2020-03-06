module.exports = {
    add(str) {
        let elmts = str.split(',')
        let result = 0 
        for (elmt of elmts) {
            result += parseFloat(elmt)
        }
         return result.toFixed(1)
    }
}