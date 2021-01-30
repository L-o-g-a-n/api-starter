const { Router } = require('express');
const { NotExtended } = require('http-errors');

const router = Router();


router.use('/hello', (req,res,next) => {
    res.send('hi');
});

router.use('/he', (req,res,next) => {
    next();
});


module.exports = router;


