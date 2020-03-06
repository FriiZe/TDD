module.exports = {
    add(str) {
        if (str === "") return "0"
        let result = 0 
        let tab = str.split(/,|\n/)
        for (let i = 0; i < tab.length; i++) {
            if (tab[i] === ''){
                throw new Error(`Bad structure, 2 separators on the way`)
            }
            result += parseFloat(tab[i])
        }
        return "" + result.toFixed(1)
    }
}

