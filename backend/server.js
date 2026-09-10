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

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

// Database
connectDB();

// API routes
app.use("/api/user", userRouter);
app.use("/api/food", foodRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Images
app.use("/images", express.static("uploads"));

// Health check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Pizza King API Working",
  });
});
if (process.env.NODE_ENV !== "production") {
    app.listen(port, () => {
        console.log(`Server started on http://localhost:${port}`);
    });
}

export default app;

// IMPORTANT:
// Do NOT use app.listen() when deploying this Express app to Vercel.

export default app;
