import express from 'express';

import CommentController from './comment.controller.js';

const commentController = new CommentController();

const commentRoutes = express.Router();

commentRoutes.get('/:id',commentController.getAllById);


commentRoutes.post('/:id',commentController.addComment);
commentRoutes.delete('/:id',commentController.deleteComment);
commentRoutes.put('/:id',commentController.updateComment);


export default commentRoutes;