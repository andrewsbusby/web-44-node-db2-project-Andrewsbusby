const express = require('express');
const Car = require('./cars-model');

const md = require('./cars-middleware');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try{
        const cars = await Car.getAll()
        res.json(cars)
    }
    catch(err) {
        next(err)
    }
})

router.get('/:id', md.checkCarId,  async (req, res, next) => {
    res.json(req.car)
})

router.post('/', md.checkCarPayload,
 md.checkVinNumberUnique,
 md.checkVinNumberValid,
 async (req, res, next) => {
    res.json('creating new car')
})

module.exports = router;