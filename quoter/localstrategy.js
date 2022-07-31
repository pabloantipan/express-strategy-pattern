function LocalStrategy() {
    this.quote = function(amount, gainPercentage) {
        return amount * (1 + gainPercentage);
    }
}

module.exports = LocalStrategy