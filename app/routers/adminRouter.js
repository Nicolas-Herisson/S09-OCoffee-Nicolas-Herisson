import express from 'express';
import adminController from '../controllers/adminController.js'

const adminRouter = express.Router();

adminRouter.get("/admin", adminController.showAdminPage);
adminRouter.get("/admin/addProduct", adminController.addProduct);

export default adminRouter;