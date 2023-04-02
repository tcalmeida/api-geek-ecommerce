import { Router } from 'express';
import controller from './controller';
import updateValidation from '../../validations/Purchase/update';
import adminVerification from '../../middlewares/adminVerification';

const routes = Router();

routes.get('/purchase/admin', adminVerification, controller.findAll);
routes.put('/purchase/admin/:id', adminVerification, updateValidation, controller.update);
routes.delete('/purchase/admin/:id', adminVerification, controller.delete);

export default routes;