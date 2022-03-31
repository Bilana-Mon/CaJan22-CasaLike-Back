const express = require('express');
// const {requireAuth,requireHost} = require('../../middlewares');
// const { log } = require('../../middlewares/logger.middleware');
const { addOrder, getOrders } = require('./order.controller.js');
const router = express.Router();

router.get('/', getOrders);
router.post('/', addOrder);

module.exports = router;
