import { ApplicationError } from "../error-handler/error.handler.js";

export default class draftModel {
    constructor(id,userId,caption,imageUrl){
        this.id = id;
        this.userId = userId;
        this.caption = caption;
        this.imageUrl = imageUrl;
    }

    static draftPost(userId,body){
        try {
            const{caption,imageUrl} = body;
            const draftPost = new draftModel(
                drafts.length+1,
                userId,
                caption,
                imageUrl
            );
            drafts.push(draftPost);
            return draftPost;
        } catch (error) {
            throw new ApplicationError("can not be added",400);            
        }
    }
}



let drafts = [];