import express from "express";
import cors from "cors";
import aiRoutes from "./routes/aiRoutes.js";

const app = express();

// Middlewares
app.use(cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true
}));
app.use(express.json());

// Routes
app.use("/api", aiRoutes);

// Health check
app.get("/", (req, res) => {
    res.json({ message: "AI Flow API is running 🚀" });
});

export default app;
