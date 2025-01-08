import express from 'express';

import ArchiveController from './archive.controller.js';

const archiveRoutes = express.Router();

const archiveController = new ArchiveController();

archiveRoutes.put('/:id',archiveController.archivePost);

export default archiveRoutes;