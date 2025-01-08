import express from 'express';

import DraftController from './draft.controller.js';

const draftRoutes = express.Router();

const draftController = new DraftController();

draftRoutes.post('/',draftController.draftPost);

export default draftRoutes;