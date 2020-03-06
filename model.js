module.exports = {
     fizz(num) {   
         let ret = ""
         if (Number.isInteger(num/3)){
             ret += "Fizz"
         }
         
         return ret
     }
}