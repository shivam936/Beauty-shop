import express from 'express'
import cors from "cors";
import {notFound, errorHandler} from "./Middlewares/error.middleware.js"
import cookieParser from 'cookie-parser';
import authRoute from "./routes/auth-route.js"
import productRoutes from "./routes/product-route.js"

const app = express();

app.use(express.json());
app.use(cors());

app.use(cookieParser());

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;