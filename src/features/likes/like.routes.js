import express from 'express';

import LikeController from './like.controller.js';

const likeController = new LikeController();

const likeRoutes = express.Router();


likeRoutes.get('/:postId',likeController.getAllLikesByPostId);
likeRoutes.get('/toggle/:postId',likeController.toggleLikeStatus);




export default likeRoutes;