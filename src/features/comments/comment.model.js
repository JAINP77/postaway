import { ApplicationError } from "../error-handler/error.handler.js";
import PostModel from "../posts/post.model.js";

export default class CommentModel {
    constructor(id,userId,postId,content) {
        this.id = id;
        this.userId = userId;
        this.postId = postId;
        this.content = content;
    }

    static getAllById(id){
        return comments.find((comment)=>comment.id==id);
    }

    static addComment(userId,postId,contet){
        try {
            const post = PostModel.getPostById(postId);
            if (!post) {
                return "there is no such post";                
            }
            const newComment = new CommentModel(comments.length+1,userId,postId,contet);
            comments.push(newComment);
            return comments;
        } catch (error) {
            throw new ApplicationError("there is something wrong",500);            
        }
    }
    static deleteComment(id){
        try {
            const index = comments.find((comment=>comment.id==id));
            comments.splice(index,1);
            return 'comment deleted';
        } catch (error) {
            throw new ApplicationError("something went wrong",500);
            
        }
    }
    static updateComment(id,userId,receivedData){
        try {
            const index = comments.findIndex((comment=>comment.id==id));
            if (index === -1) {
                throw new ApplicationError("Comment not found", 404);
            }
            const updatedData = {                
                id:id,
                userId,
                ...receivedData
            }
            comments[index] = updatedData;
            return updatedData;
        } catch (error) {
            throw new ApplicationError("something went wrong",500);            
        }
    }
}











var comments = [
    new CommentModel(1,1,1,'Comment'),
    new CommentModel(2,1,1,'Comment'),
]