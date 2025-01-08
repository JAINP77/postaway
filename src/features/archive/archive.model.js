export default class archiveModel{
    static archivePost(id){
        try {
            let post = PostModel.getPostById(1);
            if (!post) {
                throw new ApplicationError("post not found",404);                
            }
            post.archive = true;
            return post;
        } catch (error) {
            throw new ApplicationError(error.message,500);            
        }
    }
    static removeFromArchive(id){
        try {
            let post = PostModel.getPostById(1);
            if (!post) {
                throw new ApplicationError("post not found",404);                
            }
            post.archive = false;
            return post;
        } catch (error) {
            throw new ApplicationError(error.message,500);
        }
    }
}