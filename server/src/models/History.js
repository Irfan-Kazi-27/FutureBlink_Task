import mongoose from "mongoose";

const historySchema = new mongoose.Schema(
    {
        prompt: {
            type: String,
            required: true,
            trim: true,
        },
        response: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const History = mongoose.model("History", historySchema);

export default History;
