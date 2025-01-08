import LikeModel from "./like.model.js";

export default class LikeController {
    getAllLikesByPostId(req,res){
        const postId = req.params.postId;
        const postLikes = LikeModel.getAllLikesByPostId(postId);

        if (!postLikes) {
            res.status(404).send('no likes or post found');
        }
        res.status(200).send('Likes Updated!');
    }

    toggleLikeStatus(req,res,next){
        try {
            const postId = req.params.postId;
            const userId = req.userId;

            if (!userId) {
                return res.status(400).json({ message: "User ID is required to toggle like status" });
            }

            const like = LikeModel.toggleLikeStatus(postId, userId);
            res.status(200).json(like);
        } catch (error) {
            next(error);
        }
    }
}