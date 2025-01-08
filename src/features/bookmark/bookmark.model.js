import { ApplicationError } from "../error-handler/error.handler.js";
import PostModel from "../posts/post.model.js";

export default class bookmarkModel {
    static bookmarkPost(id){
        try {
            let post = PostModel.getPostById(1);
            if (!post) {
                throw new ApplicationError("post not found",404);                
            }
            post.bookmark = true;
            return post;
        } catch (error) {
            throw new ApplicationError(error.message,500);            
        }
    }
    static removeFromBookmark(id){
        try {
            let post = PostModel.getPostById(1);
            if (!post) {
                throw new ApplicationError("post not found",404);                
            }
            post.bookmark = false;
            return post;
        } catch (error) {
            throw new ApplicationError(error.message,500);            
        }
    }
}