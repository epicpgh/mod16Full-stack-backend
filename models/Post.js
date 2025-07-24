import mongoose, { Schema } from "mongoose";

// This is the model you will be modifying
const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  body: {
    type: String,
    required: true,
  },
   author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
 
});

const Post = mongoose.model("Post", postSchema);

export default Post;