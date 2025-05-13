import express from "express"
import { createBanner, deleteBanner, getRandomBanner, getAllBanners } from "../controllers/banner-controller.js";


const router = express.Router();

router.post("/create", createBanner);

router.delete("/delete/:id", deleteBanner);

router.get("/random", getRandomBanner);

router.get("/", getAllBanners);

export default router;