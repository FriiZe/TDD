module.exports = {
    leapyear(num) {
        return (Number.isInteger(num/400) || !Number.isInteger(num/100))//|| (Number.isInteger(num/4) && !Number.isInteger(num/100)))

    }
}