// DO YOUR MAGIC
const express = require('express')
const Car = require('./cars-model')
const carsMid = require('./cars-middleware')
const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const cars = await Car.getAll()
        res.json(cars)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', carsMid.checkCarId, async (req, res, next) => { // eslint-disable-line
   res.json(req.car)
})

router.post(
    '/',
    carsMid.checkCarPayload,
    carsMid.checkVinNumberUnique,
    carsMid.checkVinNumberValid,
async (req, res, next) => { // eslint-disable-line
    try {
        const car = await Car.create(req.body)
        res.json(car)
    } catch (err) {
        next(err)
    }
})

module.exports = router