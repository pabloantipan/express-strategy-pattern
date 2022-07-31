function QuoterContext(strategy, gainPercentage) {

    this.strategy = strategy;
    this.gainPercentage = gainPercentage;

    this.setStrategy = function(strategy) {
        this.strategy = strategy
    }

    this.quote = function(amount) {
        return this.strategy.quote(amount, this.gainPercentage);
    }
}

module.exports = QuoterContext
