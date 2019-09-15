import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({

    type: {
        type: Number,
        required: "Text is required"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const model = mongoose.model("Comment", commentSchema);
export default model;
