const dbService = require('../../services/db.service.js');
const logger = require('../../services/logger.service.js');
const ObjectId = require('mongodb').ObjectId;

module.exports = {
    query,
    getById
}

async function query() {
    try {
        // const criteria = _buildCriteria(filterBy);
        // const sort = _buildSort(filterBy);
        const collection = await dbService.getCollection('stay');
        var stays = await collection.find().toArray();
        return stays;
    } catch (err) {
        logger.error('Cannot find stays', err)
        throw err
    }
}

async function getById(stayId) {
    try {
        const collection = await dbService.getCollection('stay');
        const stay = collection.findOne({ '_id': ObjectId(stayId) });
        return stay;
    } catch (err) {
        logger.error(`While finding stay ${stayId}`, err)
        throw err
    }
}

// for host functions
// async function remove(stayId){

// }

// async function add(stay){

// }

// async function update(stay){

// }

function _buildCriteria(filterBy) {
    const criteria = {}

    if (filterBy.location) {
        const locationCriteria = { $regex: filterBy.location, $options: 'i' }
        criteria.location = locationCriteria;
    }
    if (filterBy.countOfGuests) {
        const GuestsCriteria = { capacity: filterBy.countOfGuests }
        criteria.capacity = GuestsCriteria;
    }
}