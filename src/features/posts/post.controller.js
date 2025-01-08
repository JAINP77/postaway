import PostModel from "./post.model.js";

export default class PostController {
    getAllPosts(req,res){
        const userId = req.userId;
        const posts = PostModel.getAllPosts(userId);
        res.status(200).send(posts);
    }

    getPostById(req,res){
        const id = req.params.id;
        const post = PostModel.getPostById(id);
        if (!post) {
            res.status(401).send('There is no such post!');
        }
        res.status(200).send(post);
    }

    getPostsByUser(req,res){
        const userId = req.userId;
        try {
            const posts = PostModel.getPostsByUser(userId);
            return res.status(200).send(posts);
        } catch (error) {
            return res.status(404).send(error.message);
        }
    }

    createPost(req,res){
        const userId = req.userId;    
        const postAdded = PostModel.createPost(req.body,userId);
        res.status(200).send(postAdded);
    }

    deletePostById(req,res){
        const id = req.params.id;
        const deletedPost = PostModel.deletePostById(id);
        if (!deletedPost) {
            res.status(400).send('not made any changes');
        }
        res.status(200).send(deletedPost);
    }

    updatePostById(req,res){
        const id = req.params.id;
        const receivedData = req.body;
        const post = PostModel.updatePostById(id,receivedData);
        res.status(200).send(post);
    }

    // additional
    filterPosts(req,res){
        const {caption} = req.body;
        const filtered = PostModel.filterPosts(caption);
        res.status(200).send(filtered);
    }
    
    draftPost(req,res,next){
        try {
            const id = req.params.id;
            const post = PostModel.draftPost(id);
            res.status(200).send(post);
        } catch (error) {
            next(error);
        }
    }

    

    sortPostsByDate(req,res,next){
        try {
            const userId = req.userId;
            const sortedPosts = PostModel.sortPostsByDate(userId);
            res.status(200).send(sortedPosts);
        } catch (error) {
            next(error);
        }
    }

}