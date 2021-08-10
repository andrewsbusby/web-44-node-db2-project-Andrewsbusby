const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
    res.json('get all cars')
})

router.get('/:id', async (req, res, next) => {
    res.json('get car by id')
})

router.post('/', async (req, res, next) => {
    res.json('creating new car')
})

module.exports = router;