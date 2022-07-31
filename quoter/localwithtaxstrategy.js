function LocalWithTaxStrategy(taxPercentage) {
    this.taxPercentage = taxPercentage

    this.quote = function(amount, gainPercentage) {
        return amount * (1 + gainPercentage + taxPercentage);

    }
}

module.exports = LocalWithTaxStrategy
