import express from "express"

import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/user-controller.js";


const router = express.Router();

router.put("/update/:id", updateUser);

router.delete("/delete/:id", deleteUser )

router.get("/:id", getUser);

router.get("/", getAllUsers)


export default router;
