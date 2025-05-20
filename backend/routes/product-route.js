import express from "express"
import { UpdateProduct, CreateProduct, DeleteProduct, getProduct, getAllProducts, ratingProduct } from "../controllers/product-controller.js";
import { protectRoute } from "../Middlewares/auth-middleware.js";

const router = express.Router();

router.post("/create" , CreateProduct);

router.put("/find/:id", UpdateProduct);

router.delete("/delete/:id", DeleteProduct);

router.get("/:id", getProduct);

router.get("/", protectRoute, getAllProducts);

router.put("/rating/:id", ratingProduct);

export default router;