import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductsBySearch,
  recommendedProducts,
  uploadImage,
} from "../controllers/product.controller.js";
import { protectRoute, sellerRoute } from "../middlewares/auth.middleware.js";
import upload from "../utils/multer.js";

const router = express.Router();

router.get("/", protectRoute, sellerRoute, getAllProducts);
router.get("/recommendations", recommendedProducts);
router.get("/:keyword", getProductsBySearch);
router.post("/create", protectRoute, sellerRoute, createProduct);
router.post("/upload", protectRoute, sellerRoute, upload.array('images', 4), uploadImage);
router.delete("/delete/:id", protectRoute, sellerRoute, deleteProduct);

export default router;
