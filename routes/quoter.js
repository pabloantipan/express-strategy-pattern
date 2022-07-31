var express = require('express');
var router = express.Router();
const QuoterContext = require('../quoter/quotercontext');
const LocalStrategy = require('../quoter/localstrategy');
const LocalWithTaxStrategy = require('../quoter/localwithtaxstrategy');
const gainPercentage = 0.3;
const someTax = 0.19;

router.get('/local', function(req, res, next) {
    const quoter = new QuoterContext(new LocalStrategy(), gainPercentage);
    const amount = req.query.amount;
    const total = quoter.quote(amount);

    res.json(total);
});

router.get('/localwithtax', function(req, res, next) {
    const quoter = new QuoterContext(new LocalWithTaxStrategy(someTax), gainPercentage);
    const amount = req.query.amount;
    const total = quoter.quote(amount);

    res.json(total);
});

module.exports = router;