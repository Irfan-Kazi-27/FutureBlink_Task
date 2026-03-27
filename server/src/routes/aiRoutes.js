import express from "express";
import { askAI, saveHistory, getHistory } from "../controllers/aiController.js";

const router = express.Router();

// POST /api/ask-ai — Get AI response from OpenRouter
router.post("/ask-ai", askAI);

// POST /api/save — Save prompt + response to MongoDB
router.post("/save", saveHistory);

// GET /api/history — Get all saved history
router.get("/history", getHistory);

export default router;
