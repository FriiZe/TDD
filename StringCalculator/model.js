module.exports = {
    add(str) {
        let result = 0 
        for (elmt of str.split(',')) {
            result += parseFloat(elmt)
        }
         return result.toFixed(1)
    }
}