import { Router } from 'express';
import controller from './controller';
import createValidation from '../../validations/User/create';
import updateValidation from '../../validations/User/update';
import userAuthentication from '../../middlewares/authentication';
import adminVerification from '../../middlewares/adminVerification';
import PurchaseController from '../Purchase/controller';

const routes = Router();

routes.post("/user/register", createValidation, controller.create);
// client routes
routes.get("/user/profile", userAuthentication, controller.findMyUser);
routes.get('/user/profile/purchases', userAuthentication, PurchaseController.findAllUserPurchase);
routes.put("/user/profile/edit", userAuthentication, controller.updateMyUser);
routes.delete("/user/profile/delete", userAuthentication, controller.deleteMyUser);
// admin routes
routes.get("/user/admin", userAuthentication, adminVerification, controller.findAll);
routes.get("/user/admin/:id", userAuthentication, adminVerification, controller.findOne);
routes.put("/user/admin/:id", userAuthentication, adminVerification, updateValidation, controller.update);
routes.delete("/user/admin/:id", userAuthentication, adminVerification, controller.delete);

export default routes;