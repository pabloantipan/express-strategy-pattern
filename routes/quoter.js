var express = require('express');
var router = express.Router();
const QuoterContext = require('../quoter/quotercontext');
const LocalStrategy = require('../quoter/localstrategy');
const gainPercentage = 0.3;

router.get('/local', function(req, res, next) {
    const quoter = new QuoterContext(new LocalStrategy(), gainPercentage);
    const amount = req.query.amount;
    const total = quoter.quote(amount);

    res.json(total);
});

module.exports = router;