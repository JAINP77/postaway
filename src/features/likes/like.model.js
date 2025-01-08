import { ApplicationError } from "../error-handler/error.handler.js";

export default class LikeModel {
    constructor(id,userId,postId) {
        this.id = id;
        this.userId = userId;
        this.postId = postId;
    }

    static getAllLikesByPostId(postId){
        return likes.filter((like)=>like.postId==postId);
    }
    static toggleLikeStatus(postId, userId) {
        try {
            // Find the index of the existing like for this post and user
            const index = likes.findIndex((like) => like.postId == postId && like.userId == userId);
    
            if (index !== -1) {
                // If a like is found, remove it
                likes.splice(index, 1);
                return { message: 'Post like removed successfully', liked: false };
            } else {
                // If no like is found, add a new one
                const newLike = new LikeModel(likes.length + 1, userId, postId);
                likes.push(newLike);
                return { message: 'Post liked successfully', liked: true };
            }
        } catch (error) {
            console.error("Error in toggleLikeStatus:", error); // Log error details
            throw new ApplicationError('Something went wrong', 400);
        }
    }
}


var likes = [
    new LikeModel(1, 101, 201),
    new LikeModel(2, 102, 202),
    new LikeModel(3, 103, 201),
    new LikeModel(4, 101, 203),
    new LikeModel(5, 102, 202)
];