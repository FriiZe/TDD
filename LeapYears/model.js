module.exports = {
    leapyear(num) {
        if (Number.isInteger(num/400)) { 
            return true
        }
        if (Number.isInteger(num/100)) { 
            return false
        }
        if (Number.isInteger(num/4) && !Number.isInteger(num/100)){
            return true
        }
    }
}