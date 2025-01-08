import { ApplicationError } from "../error-handler/error.handler.js";
import UserModel from "../user/user.model.js";
export default class PostModel {
    constructor(id,userId,caption,imageUrl) {
        this.id = id;
        this.userId = userId;
        this.caption = caption;
        this.imageUrl = imageUrl;
    }
    static getAllPosts(userId){
        return posts.filter((post)=>post.userId==userId);
    }
    static getPostById(id){
        return posts.find((post)=>post.id==id);
    }
    static getPostsByUser(userId){
        // const user = UserModel.allUsers().find((u)=>u.id==userId);
        // if (!user) {
        //     throw new ApplicationError("user not found",404);            
        // }
        const postsByUser = posts.filter((post)=>post.userId==userId);
        if (postsByUser.length===0) {
            throw new Error('No posts Found for this userId');
        }
        return postsByUser;
    }
    static createPost(newPostData,userId){
        const {caption,imageUrl} = newPostData;
        const newPost = new PostModel(
            posts.length+1,
            userId,
            caption,
            imageUrl
        );
        newPost.date = new Date();
        posts.push(newPost);
        return newPost;
    }
    static deletePostById(id){
        const postIndex = posts.findIndex((post)=>post.id==id);
        if (postIndex==-1) {
            throw new Error ('post not found');
        }
        posts.splice(postIndex,1);
        posts.forEach((post,index)=>{
            post.id = index+1;
        })
        return 'post removed';
    }
    static updatePostById(id,receivedData){
        const postIndex = posts.findIndex((post)=>post.id==id);
        if (postIndex==-1) {
            throw new Error ('post not found');
        }
        const updatedPost = {
            id:id,    
            ...receivedData
        }
        posts[postIndex] = updatedPost;
        return updatedPost;        
    }
    // additional
    static filterPosts(caption){
        return posts.filter((post)=>post.caption==caption);
    }
    
    static sortPostsByDate(userId){
        try {
            const postsByUser = this.getPostsByUser(userId);
            return postsByUser.sort((a,b)=>new Date(b.date)-new Date(a.date));
        } catch (error) {
            throw new ApplicationError("can not get the posts");
        }
    }
}






var posts = [
    {
        id: 1,
        userId: 1,
        caption: "Enjoying the sunny day at the beach!",
        imageUrl: "https://i.pinimg.com/originals/78/a0/d7/78a0d740924810464741e4561452d091.jpg"
    },
    {
        id: 2,
        userId: 1,
        caption: "Had an amazing dinner tonight.",
        imageUrl: "https://i.pinimg.com/originals/78/a0/d7/78a0d740924810464741e4561452d091.jpg"
    },
    {
        id: 3,
        userId: 1,
        caption: "Morning hike to the mountains.",
        imageUrl: "https://www.united-education.co.uk/app/uploads/2021/12/Untitled-800-x-400-px-Facebook-Post-Instagram-Post-Twitter-Post-1200-x-900-px.png"
    },
    {
        id: 4,
        userId: 1,
        caption: "Learning JavaScript is fun!",
        imageUrl: "https://www.united-education.co.uk/app/uploads/2021/12/Untitled-800-x-400-px-Facebook-Post-Instagram-Post-Twitter-Post-1200-x-900-px.png"
    }

]