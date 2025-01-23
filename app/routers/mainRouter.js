import express from 'express';
import mainController from '../controllers/mainController.js';

const mainRouter = express.Router();

mainRouter.get("/", mainController.showHomepage);

mainRouter.get("/catalogue", mainController.showCatalogpage);
mainRouter.get("/catalogue/:id", mainController.showDetailpage);

mainRouter.get("/catalogue/specFilter", mainController.showSpecpage);
mainRouter.get("/catalogue/originFilter", mainController.showOriginpage);
mainRouter.get("/catalogue/sort", mainController.showSortpage);

mainRouter.get('/contact', mainController.showContactPage);

export default mainRouter;

