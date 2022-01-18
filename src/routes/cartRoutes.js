const { Router } = require('express');
const cartController = require('../controllers/cartControllers');
const router = Router();

router.get('/cart/:id',cartController.getCartProducts);
router.post('/cart/:id',cartController.addCartProduct);
router.delete('/cart/:userId/:productId',cartController.deleteProduct);

module.exports = router;