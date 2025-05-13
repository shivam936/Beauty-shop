import express from "express"
import { createOrder, deleteOrder, getAllOrders, getOrderUser, updateOrder } from "../controllers/order-controller.js"

const router = express.Router()

router.post("/create", createOrder);

router.put("/uodate/:id", updateOrder)

router.delete("/delete/:id", deleteOrder);

router.get("/:id", getOrderUser)

router.get("/", getAllOrders);

export default router;
