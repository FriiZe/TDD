module.exports = {
    fizzbuzz(num) {   
        let ret = ""
        Number.isInteger(num/3) ? ret+= "Fizz" : ret
        return Number.isInteger(num/5) ? ret+= "Buzz" : ret        
    }
}