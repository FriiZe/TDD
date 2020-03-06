module.exports = {
    add(str) {
        if (str === "") return "0"
        let result = 0 
        for (elmt of str.split(/,|\n/)) {
            result += parseFloat(elmt)
        }
         return "" + result.toFixed(1)
    }
}