const { Router } = require('express');
const { createOrder , getAllOrders ,getAllOrderOfUser } = require('./order.controller');

const router = Router();

router.route('/:id').post(createOrder);
router.route('/:id').get(getAllOrderOfUser);

module.exports = router;