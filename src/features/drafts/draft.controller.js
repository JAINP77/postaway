import draftModel from "./draft.model.js";

export default class DraftController {
    draftPost(req,res,next){
        try {
            const userId = req.userId;
            const postData = draftModel.draftPost(userId,req.body);
            res.status(201).send(postData);
        } catch (error) {
            next(error);
        }
    }
}