import express from "express";
import cors from "cors";
import "dotenv/config";

import { connectDB } from "./config/db.js";

import userRouter from "./routes/userRoute.js";
import foodRouter from "./routes/foodRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

const app = express();

// Middleware
app.use(express.json());

app.use(cors({
    origin: "*"
}));

// Routes
app.use("/api/user", userRouter);
app.use("/api/food", foodRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Test route
app.get("/", (req, res) => {
    res.status(200).send("Pizza King API Working");
});

// IMPORTANT: Render provides PORT
const PORT = process.env.PORT || 4000;

// Start server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server started on port ${PORT}`);
});

// Connect database
connectDB();
