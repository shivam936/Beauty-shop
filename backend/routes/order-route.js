import express from "express"
import { createOrder, deleteOrder, getAllOrders, getOrderUser, updateOrder } from "../controllers/order-controller.js"
import { protectRoute } from "../Middlewares/auth-middleware.js";

const router = express.Router()

router.post("/create", createOrder);

router.put("/update/:id", updateOrder)

router.delete("/delete/:id", deleteOrder);

router.get("/:id", getOrderUser)

router.get("/", protectRoute, getAllOrders);

export default router;
