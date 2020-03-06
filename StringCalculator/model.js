module.exports = {
    add(str) {
        if (str === "") return "0"
        let result = 0 
        if (str.startsWith("//")){
            str = str.substring(2)
            let tab = str.split(/\n/)
            tab = tab[1].split(tab[0])
            for (let i = 0; i < tab.length; i++) {
                result += parseFloat(tab[i])
            }
            return "" + result.toFixed(1)
        }
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

