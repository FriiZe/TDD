module.exports = {
    add(str) {
        if (str === "") return "0"
        if (str.startsWith("//")){
            str = str.substring(2)
            let tab = str.split(/\n/)
            return this.addFromATab(tab[1].split(tab[0]))
        }
        let tab = str.split(/,|\n/)
        return this.addFromATab(tab)
    }, 
    addFromATab(tab){
        result = 0 
        for (let i = 0; i < tab.length; i++) {
            if (tab[i] === '' || isNaN(tab[i])){
                throw new Error(`Bad structure, 2 separators on the way`)
            }
            result += parseFloat(tab[i])
        }
        return "" + result.toFixed(1)
    }
}

