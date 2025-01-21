import express from 'express';
import mainController from '../controllers/mainController.js';

const mainRouter = express.Router();

mainRouter.get("/", mainController.showHomepage);
mainRouter.get("/catalogue", mainController.showCatalogpage);
mainRouter.get("/catalogue/:id", mainController.showDetailpage);

export default mainRouter;
