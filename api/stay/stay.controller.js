const stayService = require('./stay.service.js');
const logger = require('../../services/logger.service.js');


//GET list
async function getStays(req, res) {
    try {
        var queryParams = req.query;
        const stays = await stayService.query(queryParams)
        res.json(stays)
    } catch (err) {
        logger.error('Failed to get stays', err)
        res.status(500).send({ err: 'Failed to get stays' })
    }
}

//GET by ID
async function getStayById(req, res) {
    try {
        const stayId = req.params.id;
        const stay = await stayService.getStayById(stayId)
        res.json(stay)
    } catch (err) {
        logger.error('Failed to get stay', err)
        res.status(500).send({ err: 'Failed to get stay' })
    }
}

// for host functions
// async function addStay(req,res){

// }

// async function updateStay(req,res){

// }

// async function removeStay(req,res){

// }

module.exports = {
    getStays,
    getStayById
}