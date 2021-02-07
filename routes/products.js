const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController')
const jwt = require('jsonwebtoken')
const { needsAuth } = require('../utils/auth');

router.use(needsAuth)
router.delete('/:id', productsController.remove)
router.patch('/:id', productsController.patch)
router.put('/:id', productsController.put)
router.post('/', productsController.create)
router.get('/:id', needsAuth, productsController.getById)
router.get('/', needsAuth, productsController.getAll)
router.post('/:id/images', productsController.createImage)
router.delete('/:productId/images/:id', productsController.removeImage)

module.exports = router