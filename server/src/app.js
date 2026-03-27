import express from "express";
import cors from "cors";
import aiRoutes from "./routes/aiRoutes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", aiRoutes);

// Health check
app.get("/", (req, res) => {
    res.json({ message: "AI Flow API is running 🚀" });
});

export default app;
