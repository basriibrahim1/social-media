import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// READ
// in the homepage it will be showing every friend or user post
router.get("/", verifyToken, getFeedPosts);

// in the profile it only showing user post
router.get("/:userId/posts", verifyToken, getUserPosts);

// UPDATE
// get like post
router.patch("/:id/like", verifyToken, likePost);

export default router;
