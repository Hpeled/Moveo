import mongoose from "mongoose";

const codeBlockSchema = new mongoose.Schema({
    id: {
        type: "string",
        required: true
    },
    title: {
        type: "string",
        required: true
    },
    code: {
        type: "string",
        required: true
    },
    solution: {
        type: "string",
        required: true
    },
    href: {
        type: "string",
        required: true
    }
});

export default mongoose.model("CodeBlock", codeBlockSchema);
