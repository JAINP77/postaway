import express from 'express';

import BookmarkController from './bookmark.controller.js';

const bookmarkRoutes = express.Router();

const bookmarkController = new BookmarkController();

bookmarkRoutes.put('/:id',bookmarkController.bookmarkPost);
bookmarkRoutes.delete('/:id',bookmarkController.removeFromBookmark);

export default bookmarkRoutes;