import archiveModel from "./archive.model.js";

export default class ArchiveController {
    archivePost(req,res,next){
        try {
            const {id} = req.params;
            const post = archiveModel.archivePost(id);
            res.status(200).send(post);
        } catch (error) {
            next(error);
        }
    }
    removeFromArchive(req,res,next){
        try {
            const {id} = req.params;
            const post = archiveModel.removeFromArchive(id);
            res.status(200).send(post);
        } catch (error) {
            next(error);
        }
    }
}