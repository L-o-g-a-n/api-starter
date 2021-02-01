const { Router } = require('express');
const { NotExtended } = require('http-errors');

const router = Router();


router.use('/hello', (req,res,next) => {
    console.log('nice to meet U !!!');
    res.send('hi');
});

router.use('/he', (req,res,next) => {
    res.send('test');
});


module.exports = router;


