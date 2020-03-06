module.exports = {
    fizzbuzz(num) {   
        let ret = ""
        Number.isInteger(num/3) ? ret+= "Fizz" : ret
        if (Number.isInteger(num/5)){
            ret+= "Buzz"   
        }
        return ret
    }
}