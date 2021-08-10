const express = require("express")
const carsRouter = require('./cars/cars-router');


const server = express();

server.use(express.json());

// DO YOUR MAGIC


server.use('*', (req, res) => {
    res.status(404).json({message: 'not fount'})
})
module.exports = server
