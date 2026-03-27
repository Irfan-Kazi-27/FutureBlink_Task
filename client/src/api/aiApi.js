import axios from "axios";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// Send prompt to the backend — gets AI response from OpenRouter
export const askAI = async (prompt) => {
    const response = await axios.post(`${API_BASE}/ask-ai`, { prompt });
    return response.data.response;
};

// Save the current prompt + response to MongoDB
export const saveHistory = async (prompt, response) => {
    const result = await axios.post(`${API_BASE}/save`, { prompt, response });
    return result.data;
};

// Fetch all saved history from MongoDB
export const getHistory = async () => {
    const result = await axios.get(`${API_BASE}/history`);
    return result.data;
};
