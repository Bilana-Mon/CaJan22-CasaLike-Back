const dbService = require('../../services/db.service.js');
const ObjectId = require('mongodb').ObjectId;

module.exports = {
    query,
    // getOrderById,
    add
}

async function query() {
    console.log('hiyaaaa');
    try {
        const collection = await dbService.getCollection('order')
        var orders = await collection.find().toArray();
        return orders;
    } catch (err) {
        console.log('Cannot find orders', err);
        logger.error('Cannot find orders', err)
        throw err
    }
}

async function add(order) {
    try {
        const collection = await dbService.getCollection('order')
        order.createdAt = Date.now()
        const addedOrder = await collection.insertOne(order)
        console.log(addedOrder);
        return addedOrder
    } catch (err) {
        logger.error('Cannot insert order', err);
        console.log('Cannot insert order', err);
        throw err;
    }
}

