import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoute.js";
import foodRouter from "./routes/foodRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(cors());

// Database
connectDB();

// API routes
app.use("/api/user", userRouter);
app.use("/api/food", foodRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Images
app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Pizza King API Working"
    });
});

// IMPORTANT: Vercel
export default app;
