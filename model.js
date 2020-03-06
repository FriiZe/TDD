module.exports = {
     fizz(num) {   
         let ret = ""
         return Number.isInteger(num/3) ? ret+= "Fizz" : ret       
     }
}