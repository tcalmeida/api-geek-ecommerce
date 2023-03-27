import { Router } from 'express';
import controller from './controller';
import createValidation from '../../validations/Product/create';
import updateValidation from '../../validations/Product/update';
import userAuthentication from '../../middlewares/authentication';
import adminVerification from '../../middlewares/adminVerification';

const routes = Router();

routes.post('/product/admin', userAuthentication,  adminVerification, createValidation, controller.create)
routes.get('/product/catalog', controller.findAll);
routes.get('/product/:id', controller.findOne);
routes.put('/product/admin/:id', userAuthentication, adminVerification, updateValidation, controller.update);
routes.delete('/product/admin/:id', userAuthentication, adminVerification, controller.delete);

export default routes;