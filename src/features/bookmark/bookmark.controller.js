import bookmarkModel from "./bookmark.model.js";

export default class BookmarkController{
    bookmarkPost(req,res,next){
        try {
            const {id} = req.params;
            const post = bookmarkModel.bookmarkPost(id);
            res.status(200).send(post);
        } catch (error) {
            next(error);
        }
    }
    removeFromBookmark(req,res,next){
        try {
            const {id} = req.params;
            const post = bookmarkModel.removeFromBookmark(id);
            res.status(200).send(post);
        } catch (error) {
            next(error);
        }
    }
}