import CommentModel from "./comment.model.js";

export default class CommentController {

    getAllById(req,res){
        const id = req.params.id;
        const comments = CommentModel.getAllById(id);

        if (!comments) {
            res.status(404).send('No Comments yet');
        }
        res.status(200).send(comments);

    }
    addComment(req,res,next){
        try {
            const postId = req.params.id;
            const userId = req.userId;
            const {content} = req.body;
            const newComment = CommentModel.addComment(userId,Number(postId),content);            
            res.status(201).send(newComment);
        } catch (error) {
            next(error);
        }
    }
    deleteComment(req,res,next){
        try {
            const id = req.params.id;
            const comment = CommentModel.deleteComment(Number(id));
            res.status(202).send(comment);

        } catch (error) {
            next(error);
        }
    }
    updateComment(req,res,next){
        try {
            const id = req.params.id;
            const receivedData = req.body;
            const userId = req.userId;
            const comments = CommentModel.updateComment(Number(id),userId,receivedData);
            res.status(202).send(comments);
        } catch (error) {
            next(error);
        }
    }
}