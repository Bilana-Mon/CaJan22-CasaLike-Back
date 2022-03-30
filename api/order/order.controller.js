const logger = require('../../services/logger.service.js')
const orderService = require('./order.service.js')

async function addOrder(req, res) {
    try {
        const order = req.body
        const addedOrder = await orderService.add(order)
        console.log('back controller', addedOrder);
        res.json(addedOrder)
    } catch (err) {
        logger.error('Failed to add order', err)
        res.status(500).send({ err: 'Failed to add order' })
        console.log('Failed to add order', err)
    }
}

module.exports = {
    addOrder
}