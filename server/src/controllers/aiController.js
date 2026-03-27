import axios from "axios";
import History from "../models/History.js";

// POST /api/ask-ai — Send prompt to OpenRouter, return AI response
export const askAI = async (req, res) => {
    try {
        const { prompt } = req.body;

        if (!prompt || prompt.trim() === "") {
            return res.status(400).json({ error: "Prompt is required." });
        }

        const response = await axios.post(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                model: "openrouter/auto",
                messages: [{ role: "user", content: prompt }],
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                    "Content-Type": "application/json",
                },
            }
        );
        const aiResponse = response.data.choices[0].message.content;
        return res.status(200).json({ response: aiResponse });
    } catch (error) {
        console.error("OpenRouter API Error:", error.response?.data || error.message);
        return res.status(500).json({ error: "Failed to get AI response." });
    }
};

// POST /api/save — Save a prompt+response to MongoDB
export const saveHistory = async (req, res) => {
    try {
        const { prompt, response } = req.body;

        if (!prompt || !response) {
            return res.status(400).json({ error: "Prompt and response are required." });
        }

        const history = new History({ prompt, response });
        await history.save();

        return res.status(201).json({ message: "Saved successfully.", history });
    } catch (error) {
        console.error("Save History Error:", error.message);
        return res.status(500).json({ error: "Failed to save history." });
    }
};

// GET /api/history — Retrieve all saved history from MongoDB
export const getHistory = async (req, res) => {
    try {
        const history = await History.find().sort({ createdAt: -1 });
        return res.status(200).json(history);
    } catch (error) {
        console.error("Get History Error:", error.message);
        return res.status(500).json({ error: "Failed to retrieve history." });
    }
};
