import express from 'express';
import { protectRoute } from '../middlewares/auth.middleware.js';
import { orderSuccess, paymentCheckout } from '../controllers/paymentController.js';

const router = express.Router();

router.post('/checkout', protectRoute, paymentCheckout);
router.post('/success', protectRoute, orderSuccess);

export default router;