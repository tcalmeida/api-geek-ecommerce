import { Router } from 'express';
import loginController from './controller';
import loginValidation from '../../validations/Login/userLogin'

const routes = Router();

routes.post('/login', loginValidation, loginController.login);

export default routes;