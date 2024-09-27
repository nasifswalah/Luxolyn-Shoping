import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductsByCategory,
  recommendedProducts,
} from "../controllers/product.controller.js";
import { protectRoute, sellerRoute } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", protectRoute, sellerRoute, getAllProducts);
router.get("/recommendations", recommendedProducts);
router.get("/category/:category", getProductsByCategory);
router.post("/create", protectRoute, sellerRoute, createProduct);
router.delete("/delete/:id", protectRoute, sellerRoute, deleteProduct);

export default router;
