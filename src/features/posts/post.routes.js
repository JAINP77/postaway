import express from 'express';

import PostController from './post.controller.js';

const postController = new PostController();

const postRoutes = express.Router();

postRoutes.get('/sort',postController.sortPostsByDate);
postRoutes.get('/all',postController.getAllPosts);//done
postRoutes.get('/:id',postController.getPostById);//done
postRoutes.get('/',postController.getPostsByUser);

postRoutes.post('/',postController.createPost);
postRoutes.delete('/:id',postController.deletePostById);//done
postRoutes.put('/:id',postController.updatePostById);//done
//additional task
postRoutes.post('/filter',postController.filterPosts);


export default postRoutes;