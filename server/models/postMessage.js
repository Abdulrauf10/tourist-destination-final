import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    description: String,
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;