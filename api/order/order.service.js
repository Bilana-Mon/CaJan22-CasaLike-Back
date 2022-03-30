const dbService = require('../../services/db.service.js');
const ObjectId = require('mongodb').ObjectId;

module.exports = {
    // query,
    // getOrderById,
    add
}

// async function query(){
//     try{
//         const collection = await dbService.getCollection('order')

//     }

// }

async function add(order) {
    try {
        const collection = await dbService.getCollection('order')
        order.createdAt = Date.now()
        const addedOrder = await collection.insertOne(order)
        return addedOrder
    } catch (err) {
        logger.error('Cannot insert order', err);
        console.log('Cannot insert order', err);
        throw err;
    }
}

