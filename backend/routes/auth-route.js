import express from "express"
import { register, logout, login } from "../controllers/auth-controllers.js";

const router = express.Router();

router.post("/register",  register);

router.post("/login", login);

router.get("/logout", logout);

export default router;