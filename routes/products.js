const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController')

router.delete('/:id', productsController.remove)
router.patch('/:id', productsController.patch)
router.put('/:id', productsController.put)
router.post('/', productsController.post)
router.get('/:id', productsController.getProductById)
router.get('/', productsController.getAll)

module.exports = router